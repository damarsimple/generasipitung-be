import { mutationField, nonNull } from 'nexus'

export const ChatSessionUpdateOneMutation = mutationField(
  'updateOneChatSession',
  {
    type: nonNull('ChatSession'),
    args: {
      data: nonNull('ChatSessionUpdateInput'),
      where: nonNull('ChatSessionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.chatSession.update({
        where,
        data,
        ...select,
      })
    },
  },
)
