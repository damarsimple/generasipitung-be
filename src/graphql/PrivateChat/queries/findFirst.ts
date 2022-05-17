import { queryField, list } from 'nexus'

export const PrivateChatFindFirstQuery = queryField('findFirstPrivateChat', {
  type: 'PrivateChat',
  args: {
    where: 'PrivateChatWhereInput',
    orderBy: list('PrivateChatOrderByWithRelationInput'),
    cursor: 'PrivateChatWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PrivateChatScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.privateChat.findFirst({
      ...args,
      ...select,
    })
  },
})
