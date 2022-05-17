import { mutationField, nonNull } from 'nexus'

export const ExamQuestionCreateOneMutation = mutationField(
  'createOneExamQuestion',
  {
    type: nonNull('ExamQuestion'),
    args: {
      data: nonNull('ExamQuestionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.examQuestion.create({
        data,
        ...select,
      })
    },
  },
)
