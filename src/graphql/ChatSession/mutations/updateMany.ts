import { mutationField, nonNull } from 'nexus'

export const ChatSessionUpdateManyMutation = mutationField(
  'updateManyChatSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ChatSessionUpdateManyMutationInput'),
      where: 'ChatSessionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.chatSession.updateMany(args as any)
    },
  },
)
