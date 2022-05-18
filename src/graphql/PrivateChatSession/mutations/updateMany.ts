import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionUpdateManyMutation = mutationField(
  'updateManyPrivateChatSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('PrivateChatSessionUpdateManyMutationInput'),
      where: 'PrivateChatSessionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.privateChatSession.updateMany(args as any)
    },
  },
)
