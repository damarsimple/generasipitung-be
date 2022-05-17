import { mutationField, nonNull } from 'nexus'

export const ExamSessionCreateOneMutation = mutationField(
  'createOneExamSession',
  {
    type: nonNull('ExamSession'),
    args: {
      data: nonNull('ExamSessionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.examSession.create({
        data,
        ...select,
      })
    },
  },
)
