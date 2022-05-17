import { mutationField, nonNull } from 'nexus'

export const ExamQuestionDeleteOneMutation = mutationField(
  'deleteOneExamQuestion',
  {
    type: 'ExamQuestion',
    args: {
      where: nonNull('ExamQuestionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.examQuestion.delete({
        where,
        ...select,
      })
    },
  },
)
