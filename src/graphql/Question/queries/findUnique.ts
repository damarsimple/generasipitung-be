import { queryField, nonNull } from 'nexus'

export const QuestionFindUniqueQuery = queryField('findUniqueQuestion', {
  type: 'Question',
  args: {
    where: nonNull('QuestionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.question.findUnique({
      where,
      ...select,
    })
  },
})
