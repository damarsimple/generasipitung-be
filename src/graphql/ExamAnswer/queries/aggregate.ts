import { queryField, list } from 'nexus'

export const ExamAnswerAggregateQuery = queryField('aggregateExamAnswer', {
  type: 'AggregateExamAnswer',
  args: {
    where: 'ExamAnswerWhereInput',
    orderBy: list('ExamAnswerOrderByWithRelationInput'),
    cursor: 'ExamAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examAnswer.aggregate({ ...args, ...select }) as any
  },
})
