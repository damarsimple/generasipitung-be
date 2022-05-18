import { queryField, nonNull, list } from 'nexus'

export const PrivateChatSessionFindCountQuery = queryField(
  'findManyPrivateChatSessionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'PrivateChatSessionWhereInput',
      orderBy: list('PrivateChatSessionOrderByWithRelationInput'),
      cursor: 'PrivateChatSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('PrivateChatSessionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.privateChatSession.count(args as any)
    },
  },
)
