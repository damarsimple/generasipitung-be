import { mutationField, nonNull } from 'nexus'

export const ChatCreateOneMutation = mutationField('createOneChat', {
  type: nonNull('Chat'),
  args: {
    data: nonNull('ChatCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.chat.create({
      data,
      ...select,
    })
  },
})
