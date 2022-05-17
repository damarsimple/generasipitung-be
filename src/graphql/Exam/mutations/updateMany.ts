import { mutationField, nonNull } from 'nexus'

export const ExamUpdateManyMutation = mutationField('updateManyExam', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ExamUpdateManyMutationInput'),
    where: 'ExamWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.exam.updateMany(args as any)
  },
})
