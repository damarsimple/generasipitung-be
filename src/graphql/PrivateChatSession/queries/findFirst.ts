import { queryField, list } from 'nexus'

export const PrivateChatSessionFindFirstQuery = queryField(
  'findFirstPrivateChatSession',
  {
    type: 'PrivateChatSession',
    args: {
      where: 'PrivateChatSessionWhereInput',
      orderBy: list('PrivateChatSessionOrderByWithRelationInput'),
      cursor: 'PrivateChatSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('PrivateChatSessionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.privateChatSession.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
