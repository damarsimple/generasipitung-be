import { mutationField, nonNull } from 'nexus'

export const PrivateChatSessionCreateOneMutation = mutationField(
  'createOnePrivateChatSession',
  {
    type: nonNull('PrivateChatSession'),
    args: {
      data: nonNull('PrivateChatSessionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.privateChatSession.create({
        data,
        ...select,
      })
    },
  },
)
