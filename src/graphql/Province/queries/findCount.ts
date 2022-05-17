import { queryField, nonNull, list } from 'nexus'

export const ProvinceFindCountQuery = queryField('findManyProvinceCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProvinceWhereInput',
    orderBy: list('ProvinceOrderByWithRelationInput'),
    cursor: 'ProvinceWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProvinceScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.province.count(args as any)
  },
})
