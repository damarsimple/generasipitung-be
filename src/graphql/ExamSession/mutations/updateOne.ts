import { mutationField, nonNull } from 'nexus'

export const ExamSessionUpdateOneMutation = mutationField(
  'updateOneExamSession',
  {
    type: nonNull('ExamSession'),
    args: {
      data: nonNull('ExamSessionUpdateInput'),
      where: nonNull('ExamSessionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.examSession.update({
        where,
        data,
        ...select,
      })
    },
  },
)
