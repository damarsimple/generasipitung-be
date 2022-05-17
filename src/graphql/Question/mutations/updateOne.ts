import { mutationField, nonNull } from 'nexus'

export const QuestionUpdateOneMutation = mutationField('updateOneQuestion', {
  type: nonNull('Question'),
  args: {
    data: nonNull('QuestionUpdateInput'),
    where: nonNull('QuestionWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.question.update({
      where,
      data,
      ...select,
    })
  },
})
