import { queryField, list } from 'nexus'

export const ChatSessionAggregateQuery = queryField('aggregateChatSession', {
  type: 'AggregateChatSession',
  args: {
    where: 'ChatSessionWhereInput',
    orderBy: list('ChatSessionOrderByWithRelationInput'),
    cursor: 'ChatSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chatSession.aggregate({ ...args, ...select }) as any
  },
})
