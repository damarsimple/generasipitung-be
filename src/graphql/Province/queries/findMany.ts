import { queryField, nonNull, list } from 'nexus'

export const ProvinceFindManyQuery = queryField('findManyProvince', {
  type: nonNull(list(nonNull('Province'))),
  args: {
    where: 'ProvinceWhereInput',
    orderBy: list('ProvinceOrderByWithRelationInput'),
    cursor: 'ProvinceWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProvinceScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.province.findMany({
      ...args,
      ...select,
    })
  },
})
