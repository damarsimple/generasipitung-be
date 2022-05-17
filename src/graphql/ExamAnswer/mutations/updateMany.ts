import { mutationField, nonNull } from 'nexus'

export const ExamAnswerUpdateManyMutation = mutationField(
  'updateManyExamAnswer',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ExamAnswerUpdateManyMutationInput'),
      where: 'ExamAnswerWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.examAnswer.updateMany(args as any)
    },
  },
)
