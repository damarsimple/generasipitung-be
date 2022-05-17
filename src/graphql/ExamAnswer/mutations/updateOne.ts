import { mutationField, nonNull } from 'nexus'

export const ExamAnswerUpdateOneMutation = mutationField(
  'updateOneExamAnswer',
  {
    type: nonNull('ExamAnswer'),
    args: {
      data: nonNull('ExamAnswerUpdateInput'),
      where: nonNull('ExamAnswerWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.examAnswer.update({
        where,
        data,
        ...select,
      })
    },
  },
)
