import { queryField, list } from 'nexus'

export const ExamAnswerFindFirstQuery = queryField('findFirstExamAnswer', {
  type: 'ExamAnswer',
  args: {
    where: 'ExamAnswerWhereInput',
    orderBy: list('ExamAnswerOrderByWithRelationInput'),
    cursor: 'ExamAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examAnswer.findFirst({
      ...args,
      ...select,
    })
  },
})
