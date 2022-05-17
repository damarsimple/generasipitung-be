import { queryField, nonNull, list } from 'nexus'

export const ExamAnswerFindManyQuery = queryField('findManyExamAnswer', {
  type: nonNull(list(nonNull('ExamAnswer'))),
  args: {
    where: 'ExamAnswerWhereInput',
    orderBy: list('ExamAnswerOrderByWithRelationInput'),
    cursor: 'ExamAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examAnswer.findMany({
      ...args,
      ...select,
    })
  },
})
