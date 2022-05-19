import { mutationField, nonNull } from 'nexus'

export const ChatUpdateOneMutation = mutationField('updateOneChat', {
  type: nonNull('Chat'),
  args: {
    data: nonNull('ChatUpdateInput'),
    where: nonNull('ChatWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.chat.update({
      where,
      data,
      ...select,
    })
  },
})
