import { mutationField, nonNull } from 'nexus'

export const QuestionCreateOneMutation = mutationField('createOneQuestion', {
  type: nonNull('Question'),
  args: {
    data: nonNull('QuestionCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.question.create({
      data,
      ...select,
    })
  },
})
