import { mutationField, nonNull } from 'nexus'

export const ChatDeleteManyMutation = mutationField('deleteManyChat', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ChatWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.chat.deleteMany({ where } as any)
  },
})
