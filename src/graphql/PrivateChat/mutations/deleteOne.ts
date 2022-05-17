import { mutationField, nonNull } from 'nexus'

export const PrivateChatDeleteOneMutation = mutationField(
  'deleteOnePrivateChat',
  {
    type: 'PrivateChat',
    args: {
      where: nonNull('PrivateChatWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.privateChat.delete({
        where,
        ...select,
      })
    },
  },
)
