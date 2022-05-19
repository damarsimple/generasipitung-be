import { queryField, nonNull } from 'nexus'

export const ChatFindUniqueQuery = queryField('findUniqueChat', {
  type: 'Chat',
  args: {
    where: nonNull('ChatWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.chat.findUnique({
      where,
      ...select,
    })
  },
})
