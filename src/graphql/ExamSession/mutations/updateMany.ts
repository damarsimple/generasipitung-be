import { mutationField, nonNull } from 'nexus'

export const ExamSessionUpdateManyMutation = mutationField(
  'updateManyExamSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ExamSessionUpdateManyMutationInput'),
      where: 'ExamSessionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.examSession.updateMany(args as any)
    },
  },
)
