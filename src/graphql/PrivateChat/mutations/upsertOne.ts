import { mutationField, nonNull } from 'nexus'

export const PrivateChatUpsertOneMutation = mutationField(
  'upsertOnePrivateChat',
  {
    type: nonNull('PrivateChat'),
    args: {
      where: nonNull('PrivateChatWhereUniqueInput'),
      create: nonNull('PrivateChatCreateInput'),
      update: nonNull('PrivateChatUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.privateChat.upsert({
        ...args,
        ...select,
      })
    },
  },
)
