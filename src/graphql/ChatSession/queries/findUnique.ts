import { queryField, nonNull } from 'nexus'

export const ChatSessionFindUniqueQuery = queryField('findUniqueChatSession', {
  type: 'ChatSession',
  args: {
    where: nonNull('ChatSessionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.chatSession.findUnique({
      where,
      ...select,
    })
  },
})
