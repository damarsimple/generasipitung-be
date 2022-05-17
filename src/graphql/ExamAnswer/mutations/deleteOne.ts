import { mutationField, nonNull } from 'nexus'

export const ExamAnswerDeleteOneMutation = mutationField(
  'deleteOneExamAnswer',
  {
    type: 'ExamAnswer',
    args: {
      where: nonNull('ExamAnswerWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.examAnswer.delete({
        where,
        ...select,
      })
    },
  },
)
