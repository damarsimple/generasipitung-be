import { mutationField, nonNull } from 'nexus'

export const ExamUpsertOneMutation = mutationField('upsertOneExam', {
  type: nonNull('Exam'),
  args: {
    where: nonNull('ExamWhereUniqueInput'),
    create: nonNull('ExamCreateInput'),
    update: nonNull('ExamUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exam.upsert({
      ...args,
      ...select,
    })
  },
})
