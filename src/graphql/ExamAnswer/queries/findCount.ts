import { queryField, nonNull, list } from 'nexus'

export const ExamAnswerFindCountQuery = queryField('findManyExamAnswerCount', {
  type: nonNull('Int'),
  args: {
    where: 'ExamAnswerWhereInput',
    orderBy: list('ExamAnswerOrderByWithRelationInput'),
    cursor: 'ExamAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.examAnswer.count(args as any)
  },
})
