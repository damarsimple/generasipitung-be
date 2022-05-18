import { queryField, list } from 'nexus'

export const PrivateChatSessionAggregateQuery = queryField(
  'aggregatePrivateChatSession',
  {
    type: 'AggregatePrivateChatSession',
    args: {
      where: 'PrivateChatSessionWhereInput',
      orderBy: list('PrivateChatSessionOrderByWithRelationInput'),
      cursor: 'PrivateChatSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.privateChatSession.aggregate({ ...args, ...select }) as any
    },
  },
)
