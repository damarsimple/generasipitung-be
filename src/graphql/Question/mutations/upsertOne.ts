import { mutationField, nonNull } from 'nexus'

export const QuestionUpsertOneMutation = mutationField('upsertOneQuestion', {
  type: nonNull('Question'),
  args: {
    where: nonNull('QuestionWhereUniqueInput'),
    create: nonNull('QuestionCreateInput'),
    update: nonNull('QuestionUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.question.upsert({
      ...args,
      ...select,
    })
  },
})
