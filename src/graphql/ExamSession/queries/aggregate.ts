import { queryField, list } from 'nexus'

export const ExamSessionAggregateQuery = queryField('aggregateExamSession', {
  type: 'AggregateExamSession',
  args: {
    where: 'ExamSessionWhereInput',
    orderBy: list('ExamSessionOrderByWithRelationInput'),
    cursor: 'ExamSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examSession.aggregate({ ...args, ...select }) as any
  },
})
