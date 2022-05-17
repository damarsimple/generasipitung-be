import { queryField, list } from 'nexus'

export const ExamAggregateQuery = queryField('aggregateExam', {
  type: 'AggregateExam',
  args: {
    where: 'ExamWhereInput',
    orderBy: list('ExamOrderByWithRelationInput'),
    cursor: 'ExamWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exam.aggregate({ ...args, ...select }) as any
  },
})
