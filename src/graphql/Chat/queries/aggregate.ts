import { queryField, list } from 'nexus'

export const ChatAggregateQuery = queryField('aggregateChat', {
  type: 'AggregateChat',
  args: {
    where: 'ChatWhereInput',
    orderBy: list('ChatOrderByWithRelationInput'),
    cursor: 'ChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chat.aggregate({ ...args, ...select }) as any
  },
})
