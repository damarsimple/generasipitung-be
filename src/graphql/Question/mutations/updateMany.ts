import { mutationField, nonNull } from 'nexus'

export const QuestionUpdateManyMutation = mutationField('updateManyQuestion', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('QuestionUpdateManyMutationInput'),
    where: 'QuestionWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.question.updateMany(args as any)
  },
})
