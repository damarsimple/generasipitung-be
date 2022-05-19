import { mutationField, nonNull } from 'nexus'

export const ChatSessionUpsertOneMutation = mutationField(
  'upsertOneChatSession',
  {
    type: nonNull('ChatSession'),
    args: {
      where: nonNull('ChatSessionWhereUniqueInput'),
      create: nonNull('ChatSessionCreateInput'),
      update: nonNull('ChatSessionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.chatSession.upsert({
        ...args,
        ...select,
      })
    },
  },
)
