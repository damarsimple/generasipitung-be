import { mutationField, nonNull } from 'nexus'

export const ChatSessionCreateOneMutation = mutationField(
  'createOneChatSession',
  {
    type: nonNull('ChatSession'),
    args: {
      data: nonNull('ChatSessionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.chatSession.create({
        data,
        ...select,
      })
    },
  },
)
