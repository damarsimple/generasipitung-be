import { mutationField, nonNull } from 'nexus'

export const QuestionDeleteManyMutation = mutationField('deleteManyQuestion', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'QuestionWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.question.deleteMany({ where } as any)
  },
})
