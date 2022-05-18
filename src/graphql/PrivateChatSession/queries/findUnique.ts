import { queryField, nonNull } from 'nexus'

export const PrivateChatSessionFindUniqueQuery = queryField(
  'findUniquePrivateChatSession',
  {
    type: 'PrivateChatSession',
    args: {
      where: nonNull('PrivateChatSessionWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.privateChatSession.findUnique({
        where,
        ...select,
      })
    },
  },
)
