import { mutationField, nonNull } from 'nexus'

export const ChatSessionDeleteOneMutation = mutationField(
  'deleteOneChatSession',
  {
    type: 'ChatSession',
    args: {
      where: nonNull('ChatSessionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.chatSession.delete({
        where,
        ...select,
      })
    },
  },
)
