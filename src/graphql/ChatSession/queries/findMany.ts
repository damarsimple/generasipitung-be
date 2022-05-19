import { queryField, nonNull, list } from 'nexus'

export const ChatSessionFindManyQuery = queryField('findManyChatSession', {
  type: nonNull(list(nonNull('ChatSession'))),
  args: {
    where: 'ChatSessionWhereInput',
    orderBy: list('ChatSessionOrderByWithRelationInput'),
    cursor: 'ChatSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ChatSessionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chatSession.findMany({
      ...args,
      ...select,
    })
  },
})
