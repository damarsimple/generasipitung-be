import { queryField, list } from 'nexus'

export const SchoolStaffAggregateQuery = queryField('aggregateSchoolStaff', {
  type: 'AggregateSchoolStaff',
  args: {
    where: 'SchoolStaffWhereInput',
    orderBy: list('SchoolStaffOrderByWithRelationInput'),
    cursor: 'SchoolStaffWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schoolStaff.aggregate({ ...args, ...select }) as any
  },
})
