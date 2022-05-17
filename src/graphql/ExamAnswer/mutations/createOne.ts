import { mutationField, nonNull } from 'nexus'

export const ExamAnswerCreateOneMutation = mutationField(
  'createOneExamAnswer',
  {
    type: nonNull('ExamAnswer'),
    args: {
      data: nonNull('ExamAnswerCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.examAnswer.create({
        data,
        ...select,
      })
    },
  },
)
