import { mutationField, nonNull } from 'nexus'

export const ExamSessionDeleteManyMutation = mutationField(
  'deleteManyExamSession',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ExamSessionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.examSession.deleteMany({ where } as any)
    },
  },
)
