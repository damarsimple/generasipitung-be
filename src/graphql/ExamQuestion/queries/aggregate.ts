import { queryField, list } from 'nexus'

export const ExamQuestionAggregateQuery = queryField('aggregateExamQuestion', {
  type: 'AggregateExamQuestion',
  args: {
    where: 'ExamQuestionWhereInput',
    orderBy: list('ExamQuestionOrderByWithRelationInput'),
    cursor: 'ExamQuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examQuestion.aggregate({ ...args, ...select }) as any
  },
})
