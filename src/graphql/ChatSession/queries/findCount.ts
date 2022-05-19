import { queryField, nonNull, list } from 'nexus'

export const ChatSessionFindCountQuery = queryField(
  'findManyChatSessionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ChatSessionWhereInput',
      orderBy: list('ChatSessionOrderByWithRelationInput'),
      cursor: 'ChatSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ChatSessionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.chatSession.count(args as any)
    },
  },
)
