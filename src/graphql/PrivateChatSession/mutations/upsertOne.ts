import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionUpsertOneMutation = mutationField(
  'upsertOnePrivateChatSession',
  {
    type: nonNull('PrivateChatSession'),
    args: {
      where: nonNull('PrivateChatSessionWhereUniqueInput'),
      create: nonNull('PrivateChatSessionCreateInput'),
      update: nonNull('PrivateChatSessionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.privateChatSession.upsert({
        ...args,
        ...select,
      })
    },
  },
)
