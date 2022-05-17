import { mutationField, nonNull } from 'nexus'

export const PrivateChatUpdateOneMutation = mutationField(
  'updateOnePrivateChat',
  {
    type: nonNull('PrivateChat'),
    args: {
      data: nonNull('PrivateChatUpdateInput'),
      where: nonNull('PrivateChatWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.privateChat.update({
        where,
        data,
        ...select,
      })
    },
  },
)
