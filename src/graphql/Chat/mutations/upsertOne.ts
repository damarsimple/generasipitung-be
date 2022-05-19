import { mutationField, nonNull } from 'nexus'

export const ChatUpsertOneMutation = mutationField('upsertOneChat', {
  type: nonNull('Chat'),
  args: {
    where: nonNull('ChatWhereUniqueInput'),
    create: nonNull('ChatCreateInput'),
    update: nonNull('ChatUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.chat.upsert({
      ...args,
      ...select,
    })
  },
})
