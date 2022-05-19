import { queryField, nonNull, list } from 'nexus'

export const ChatFindCountQuery = queryField('findManyChatCount', {
  type: nonNull('Int'),
  args: {
    where: 'ChatWhereInput',
    orderBy: list('ChatOrderByWithRelationInput'),
    cursor: 'ChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ChatScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.chat.count(args as any)
  },
})
