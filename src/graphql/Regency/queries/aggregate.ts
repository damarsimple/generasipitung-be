import { queryField, list } from 'nexus'

export const RegencyAggregateQuery = queryField('aggregateRegency', {
  type: 'AggregateRegency',
  args: {
    where: 'RegencyWhereInput',
    orderBy: list('RegencyOrderByWithRelationInput'),
    cursor: 'RegencyWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.regency.aggregate({ ...args, ...select }) as any
  },
})
