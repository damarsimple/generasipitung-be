import { queryField, nonNull } from 'nexus'

export const ExamQuestionFindUniqueQuery = queryField(
  'findUniqueExamQuestion',
  {
    type: 'ExamQuestion',
    args: {
      where: nonNull('ExamQuestionWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.examQuestion.findUnique({
        where,
        ...select,
      })
    },
  },
)
