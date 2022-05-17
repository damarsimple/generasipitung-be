import { mutationField, nonNull } from 'nexus'

export const PrivateChatCreateOneMutation = mutationField(
  'createOnePrivateChat',
  {
    type: nonNull('PrivateChat'),
    args: {
      data: nonNull('PrivateChatCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.privateChat.create({
        data,
        ...select,
      })
    },
  },
)
