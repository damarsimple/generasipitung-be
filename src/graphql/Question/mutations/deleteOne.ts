import { mutationField, nonNull } from 'nexus'

export const QuestionDeleteOneMutation = mutationField('deleteOneQuestion', {
  type: 'Question',
  args: {
    where: nonNull('QuestionWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.question.delete({
      where,
      ...select,
    })
  },
})
