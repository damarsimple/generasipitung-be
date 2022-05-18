import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionDeleteOneMutation = mutationField(
  'deleteOnePrivateChatSession',
  {
    type: 'PrivateChatSession',
    args: {
      where: nonNull('PrivateChatSessionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.privateChatSession.delete({
        where,
        ...select,
      })
    },
  },
)
