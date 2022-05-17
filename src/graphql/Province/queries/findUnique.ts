import { queryField, nonNull } from 'nexus'

export const ProvinceFindUniqueQuery = queryField('findUniqueProvince', {
  type: 'Province',
  args: {
    where: nonNull('ProvinceWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.province.findUnique({
      where,
      ...select,
    })
  },
})
