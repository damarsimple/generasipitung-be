import { mutationField, nonNull } from 'nexus'

export const ExamDeleteManyMutation = mutationField('deleteManyExam', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ExamWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.exam.deleteMany({ where } as any)
  },
})
