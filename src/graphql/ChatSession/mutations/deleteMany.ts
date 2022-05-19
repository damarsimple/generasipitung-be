import { mutationField, nonNull } from 'nexus'

export const ChatSessionDeleteManyMutation = mutationField(
  'deleteManyChatSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ChatSessionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.chatSession.deleteMany({ where } as any)
    },
  },
)
