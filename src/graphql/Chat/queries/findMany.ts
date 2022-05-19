import { queryField, nonNull, list } from 'nexus'

export const ChatFindManyQuery = queryField('findManyChat', {
  type: nonNull(list(nonNull('Chat'))),
  args: {
    where: 'ChatWhereInput',
    orderBy: list('ChatOrderByWithRelationInput'),
    cursor: 'ChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ChatScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chat.findMany({
      ...args,
      ...select,
    })
  },
})
