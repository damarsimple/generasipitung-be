import { queryField, list } from 'nexus'

export const ProvinceAggregateQuery = queryField('aggregateProvince', {
  type: 'AggregateProvince',
  args: {
    where: 'ProvinceWhereInput',
    orderBy: list('ProvinceOrderByWithRelationInput'),
    cursor: 'ProvinceWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.province.aggregate({ ...args, ...select }) as any
  },
})
