import { mutationField, nonNull } from 'nexus'

export const ExamSessionDeleteOneMutation = mutationField(
  'deleteOneExamSession',
  {
    type: 'ExamSession',
    args: {
      where: nonNull('ExamSessionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.examSession.delete({
        where,
        ...select,
      })
    },
  },
)
