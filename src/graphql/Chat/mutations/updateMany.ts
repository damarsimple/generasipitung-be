import { mutationField, nonNull } from 'nexus'

export const ChatUpdateManyMutation = mutationField('updateManyChat', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ChatUpdateManyMutationInput'),
    where: 'ChatWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.chat.updateMany(args as any)
  },
})
