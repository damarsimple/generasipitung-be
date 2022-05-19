import { queryField, list } from 'nexus'

export const ChatSessionFindFirstQuery = queryField('findFirstChatSession', {
  type: 'ChatSession',
  args: {
    where: 'ChatSessionWhereInput',
    orderBy: list('ChatSessionOrderByWithRelationInput'),
    cursor: 'ChatSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ChatSessionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chatSession.findFirst({
      ...args,
      ...select,
    })
  },
})
