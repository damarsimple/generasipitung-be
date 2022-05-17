import { queryField, nonNull } from 'nexus'

export const ExamAnswerFindUniqueQuery = queryField('findUniqueExamAnswer', {
  type: 'ExamAnswer',
  args: {
    where: nonNull('ExamAnswerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.examAnswer.findUnique({
      where,
      ...select,
    })
  },
})
