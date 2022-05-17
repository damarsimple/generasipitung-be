import { prisma } from './modules/prisma'
import axios from 'axios'
import { provider } from './src/context'

async function populateProvinces() {
  const PROVINCE_URL =
    'https://raw.githubusercontent.com/guzfirdaus/Wilayah-Administrasi-Indonesia/master/csv/provinces.csv'
  const REGENCY_URL =
    'https://raw.githubusercontent.com/guzfirdaus/Wilayah-Administrasi-Indonesia/master/csv/regencies.csv'

  const { data: dataProvince } = await axios.get<string>(PROVINCE_URL)

  const rowsProvince = dataProvince.split('\n')

  rowsProvince.shift()

  const lookupProvinceMap = new Map<string, string>()

  for (const row of rowsProvince) {
    const columns = row.split(';')

    const provinceId = columns[0]
    const provinceName = columns[1]?.replace('\n', '')?.replace('\r', '').trim()

    if (!provinceId || !provinceName) continue

    lookupProvinceMap.set(provinceId, provinceName)
  }

  const { data: dataRegency } = await axios.get<string>(REGENCY_URL)

  const rowsRegency = dataRegency.split('\n')

  rowsRegency.shift()

  const regencyMap = new Map<string, string[]>()

  for (const row of rowsRegency) {
    const columns = row.split(';')

    const provinceId = columns[1]
    const cityName = columns[2]?.replace('\n', '')?.replace('\r', '').trim()

    if (!provinceId || !cityName) continue

    const KEY = lookupProvinceMap.get(provinceId)

    if (!regencyMap.has(KEY)) {
      regencyMap.set(KEY, [])
    }

    regencyMap.set(KEY, [...regencyMap.get(KEY), ...cityName])
  }

  for (const province of lookupProvinceMap.values()) {
    console.log(`province ${province} ${regencyMap.get(province).length}`)

    await prisma.province.create({
      data: {
        name: province,
        regencies: {
          create: regencyMap.get(province)?.map((city) => ({
            name: city,
          })),
        },
      },
    })
  }
}

async function main() {
  if ((await prisma.user.count()) == 0) {
    if ((await prisma.province.count()) == 0) {
      await populateProvinces()
    } else {
      console.log('provinces already populated')
    }

    const province = await prisma.province.findFirst({
      select: { id: true, regencies: true },
    })

    await prisma.user.create({
      data: {
        email: 'damaralbaribin@gmail.com',
        password: await provider.hash.hash('123456789'),
        name: 'Damar Albaribin Syamsu',
        role: 'TEACHER',
        isAdmin: true,
        phoneNumber: '08123456789',
        provinceId: province.id,
        regencyId: province.regencies[0].id,
      },
    })

    console.log(`user created`)
  } else {
    console.log(`user already created`)
  }
}

main()
