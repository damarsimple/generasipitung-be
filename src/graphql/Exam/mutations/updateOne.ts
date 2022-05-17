import { mutationField, nonNull } from 'nexus'

export const ExamUpdateOneMutation = mutationField('updateOneExam', {
  type: nonNull('Exam'),
  args: {
    data: nonNull('ExamUpdateInput'),
    where: nonNull('ExamWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.exam.update({
      where,
      data,
      ...select,
    })
  },
})
