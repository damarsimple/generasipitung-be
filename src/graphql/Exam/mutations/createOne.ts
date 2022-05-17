import { mutationField, nonNull } from 'nexus'

export const ExamCreateOneMutation = mutationField('createOneExam', {
  type: nonNull('Exam'),
  args: {
    data: nonNull('ExamCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.exam.create({
      data,
      ...select,
    })
  },
})
