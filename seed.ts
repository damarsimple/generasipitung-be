import { prisma } from './modules/prisma'
import axios from 'axios'
import { provider } from './src/context'
import fg from 'fast-glob'
import { readFileSync } from 'fs'
import { Province } from '@prisma/client'

export interface Sekolah {
  kode_prop: string
  propinsi: string
  kode_kab_kota: string
  kabupaten_kota: string
  kode_kec: string
  kecamatan: string
  id: string
  npsn: string
  sekolah: string
  bentuk: string
  status: string
  alamat_jalan: string
  lintang: string
  bujur: string
}

async function main() {
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

    regencyMap.set(KEY, [...regencyMap.get(KEY), cityName])
  }

  if ((await prisma.province.count()) == 0) {
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
    console.log(`provinces populated`)
  } else {
    console.log(`provinces already populated`)
  }

  const provinces = await prisma.province.findMany({})

  const provincesMap = provinces.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur,
    }
  }, {} as Record<string, Province>)

  const regencies = await prisma.regency.findMany({})

  const regenciesMap = regencies.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur,
    }
  }, {} as Record<string, Province>)

  const schoolsF = await fg(['./data/schools/**.json'], { dot: true })

  const typeLevelsMap: Record<string, number[]> = {
    SD: [1, 2, 3, 4, 5, 6],
    SDLB: [1, 2, 3, 4, 5, 6],

    SMP: [7, 8, 9],
    SMLB: [7, 8, 9],
    SMPLB: [7, 8, 9],

    SMK: [10, 11, 12],
    SMA: [10, 11, 12],
    SMALB: [10, 11, 12],
  }

  const province = await prisma.province.findFirst({
    select: { id: true, regencies: true },
  })

  if ((await prisma.user.count()) == 0) {
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
    await prisma.user.create({
      data: {
        email: 'damaralbaribin2@gmail.com',
        password: await provider.hash.hash('123456789'),
        name: 'Damar Albaribin Syamsu 2',
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

  for (const schoolsJson of schoolsF) {
    const schools = Object.values(
      JSON.parse(readFileSync(schoolsJson, 'utf8')),
    )[0] as Sekolah[]

    for (const school of schools) {
      console.log(`${school.sekolah}`)

      const propinsi = school.propinsi?.replace('Prov. ', '')

      let provinceId: string = provincesMap[propinsi?.toUpperCase()]?.id
      let regencyId: string =
        regenciesMap[school.kabupaten_kota?.toUpperCase()]?.id

      if (!provinceId) {
        const province = await prisma.province.create({
          data: {
            name: propinsi?.toUpperCase(),
          },
        })

        provincesMap[province.name] = province

        provinceId = province.id
      }

      if (!regencyId) {
        const regency = await prisma.regency.create({
          data: {
            provinceId: provinceId,
            name: school.kabupaten_kota,
          },
        })

        regencyMap[regency.name] = regency

        regencyId = regency.id
      }

      await prisma.school.create({
        data: {
          name: school.sekolah,
          provinceId,
          regencyId,
          levels: typeLevelsMap[school.bentuk],
          type: school.bentuk,
          address: school.alamat_jalan,
        },
      })
    }
  }
}

main()
