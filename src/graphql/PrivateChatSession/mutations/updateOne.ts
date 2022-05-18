import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionUpdateOneMutation = mutationField(
  'updateOnePrivateChatSession',
  {
    type: nonNull('PrivateChatSession'),
    args: {
      data: nonNull('PrivateChatSessionUpdateInput'),
      where: nonNull('PrivateChatSessionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.privateChatSession.update({
        where,
        data,
        ...select,
      })
    },
  },
)
