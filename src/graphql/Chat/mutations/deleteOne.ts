import { mutationField, nonNull } from 'nexus'

export const ChatDeleteOneMutation = mutationField('deleteOneChat', {
  type: 'Chat',
  args: {
    where: nonNull('ChatWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.chat.delete({
      where,
      ...select,
    })
  },
})
