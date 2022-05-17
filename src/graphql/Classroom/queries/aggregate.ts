import { queryField, list } from 'nexus'

export const ClassroomAggregateQuery = queryField('aggregateClassroom', {
  type: 'AggregateClassroom',
  args: {
    where: 'ClassroomWhereInput',
    orderBy: list('ClassroomOrderByWithRelationInput'),
    cursor: 'ClassroomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.classroom.aggregate({ ...args, ...select }) as any
  },
})
