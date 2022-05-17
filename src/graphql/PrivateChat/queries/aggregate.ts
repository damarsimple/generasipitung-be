import { queryField, list } from 'nexus'

export const PrivateChatAggregateQuery = queryField('aggregatePrivateChat', {
  type: 'AggregatePrivateChat',
  args: {
    where: 'PrivateChatWhereInput',
    orderBy: list('PrivateChatOrderByWithRelationInput'),
    cursor: 'PrivateChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.privateChat.aggregate({ ...args, ...select }) as any
  },
})
