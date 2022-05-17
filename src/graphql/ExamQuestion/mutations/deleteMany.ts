import { mutationField, nonNull } from 'nexus'

export const ExamQuestionDeleteManyMutation = mutationField(
  'deleteManyExamQuestion',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ExamQuestionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.examQuestion.deleteMany({ where } as any)
    },
  },
)
