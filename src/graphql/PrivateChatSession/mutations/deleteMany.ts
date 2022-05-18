import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionDeleteManyMutation = mutationField(
  'deleteManyPrivateChatSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'PrivateChatSessionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.privateChatSession.deleteMany({ where } as any)
    },
  },
)
