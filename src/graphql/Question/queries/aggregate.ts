import { queryField, list } from 'nexus'

export const QuestionAggregateQuery = queryField('aggregateQuestion', {
  type: 'AggregateQuestion',
  args: {
    where: 'QuestionWhereInput',
    orderBy: list('QuestionOrderByWithRelationInput'),
    cursor: 'QuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.question.aggregate({ ...args, ...select }) as any
  },
})
