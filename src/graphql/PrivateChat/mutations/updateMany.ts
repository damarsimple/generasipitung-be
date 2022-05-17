import { mutationField, nonNull } from 'nexus'

export const PrivateChatUpdateManyMutation = mutationField(
  'updateManyPrivateChat',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('PrivateChatUpdateManyMutationInput'),
      where: 'PrivateChatWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.privateChat.updateMany(args as any)
    },
  },
)
