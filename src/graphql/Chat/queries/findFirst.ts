import { queryField, list } from 'nexus'

export const ChatFindFirstQuery = queryField('findFirstChat', {
  type: 'Chat',
  args: {
    where: 'ChatWhereInput',
    orderBy: list('ChatOrderByWithRelationInput'),
    cursor: 'ChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ChatScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chat.findFirst({
      ...args,
      ...select,
    })
  },
})
