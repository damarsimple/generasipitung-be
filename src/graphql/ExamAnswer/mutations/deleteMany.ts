import { mutationField, nonNull } from 'nexus'

export const ExamAnswerDeleteManyMutation = mutationField(
  'deleteManyExamAnswer',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ExamAnswerWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.examAnswer.deleteMany({ where } as any)
    },
  },
)
