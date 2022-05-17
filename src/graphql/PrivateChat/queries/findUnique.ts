import { queryField, nonNull } from 'nexus'

export const PrivateChatFindUniqueQuery = queryField('findUniquePrivateChat', {
  type: 'PrivateChat',
  args: {
    where: nonNull('PrivateChatWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.privateChat.findUnique({
      where,
      ...select,
    })
  },
})
