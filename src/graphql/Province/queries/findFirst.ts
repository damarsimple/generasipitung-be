import { queryField, list } from 'nexus'

export const ProvinceFindFirstQuery = queryField('findFirstProvince', {
  type: 'Province',
  args: {
    where: 'ProvinceWhereInput',
    orderBy: list('ProvinceOrderByWithRelationInput'),
    cursor: 'ProvinceWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProvinceScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.province.findFirst({
      ...args,
      ...select,
    })
  },
})
