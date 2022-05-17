import { queryField, nonNull, list } from 'nexus'

export const PrivateChatFindCountQuery = queryField(
  'findManyPrivateChatCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'PrivateChatWhereInput',
      orderBy: list('PrivateChatOrderByWithRelationInput'),
      cursor: 'PrivateChatWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('PrivateChatScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.privateChat.count(args as any)
    },
  },
)
