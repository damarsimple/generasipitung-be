import { queryField, nonNull, list } from 'nexus'

export const PrivateChatSessionFindManyQuery = queryField(
  'findManyPrivateChatSession',
  {
    type: nonNull(list(nonNull('PrivateChatSession'))),
    args: {
      where: 'PrivateChatSessionWhereInput',
      orderBy: list('PrivateChatSessionOrderByWithRelationInput'),
      cursor: 'PrivateChatSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('PrivateChatSessionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.privateChatSession.findMany({
        ...args,
        ...select,
      })
    },
  },
)
