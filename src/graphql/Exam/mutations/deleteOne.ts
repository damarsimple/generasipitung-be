import { mutationField, nonNull } from 'nexus'

export const ExamDeleteOneMutation = mutationField('deleteOneExam', {
  type: 'Exam',
  args: {
    where: nonNull('ExamWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.exam.delete({
      where,
      ...select,
    })
  },
})
