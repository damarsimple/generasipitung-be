import { queryField, nonNull, list } from 'nexus'

export const PrivateChatFindManyQuery = queryField('findManyPrivateChat', {
  type: nonNull(list(nonNull('PrivateChat'))),
  args: {
    where: 'PrivateChatWhereInput',
    orderBy: list('PrivateChatOrderByWithRelationInput'),
    cursor: 'PrivateChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PrivateChatScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.privateChat.findMany({
      ...args,
      ...select,
    })
  },
})
