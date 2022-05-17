import { queryField, list } from 'nexus'

export const SchoolAggregateQuery = queryField('aggregateSchool', {
  type: 'AggregateSchool',
  args: {
    where: 'SchoolWhereInput',
    orderBy: list('SchoolOrderByWithRelationInput'),
    cursor: 'SchoolWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.school.aggregate({ ...args, ...select }) as any
  },
})
