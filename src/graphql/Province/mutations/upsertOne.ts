import { mutationField, nonNull } from 'nexus'

export const ProvinceUpsertOneMutation = mutationField('upsertOneProvince', {
  type: nonNull('Province'),
  args: {
    where: nonNull('ProvinceWhereUniqueInput'),
    create: nonNull('ProvinceCreateInput'),
    update: nonNull('ProvinceUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.province.upsert({
      ...args,
      ...select,
    })
  },
})
