import { mutationField, nonNull } from 'nexus'

export const PrivateChatDeleteManyMutation = mutationField(
  'deleteManyPrivateChat',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'PrivateChatWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.privateChat.deleteMany({ where } as any)
    },
  },
)
