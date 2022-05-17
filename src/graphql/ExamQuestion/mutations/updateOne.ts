import { mutationField, nonNull } from 'nexus'

export const ExamQuestionUpdateOneMutation = mutationField(
  'updateOneExamQuestion',
  {
    type: nonNull('ExamQuestion'),
    args: {
      data: nonNull('ExamQuestionUpdateInput'),
      where: nonNull('ExamQuestionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.examQuestion.update({
        where,
        data,
        ...select,
      })
    },
  },
)
