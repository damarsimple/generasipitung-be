import { mutationField, nonNull } from 'nexus'

export const ExamQuestionUpdateManyMutation = mutationField(
  'updateManyExamQuestion',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ExamQuestionUpdateManyMutationInput'),
      where: 'ExamQuestionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.examQuestion.updateMany(args as any)
    },
  },
)
