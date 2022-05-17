import { queryField, nonNull, list } from 'nexus'

export const ExamQuestionFindCountQuery = queryField(
  'findManyExamQuestionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ExamQuestionWhereInput',
      orderBy: list('ExamQuestionOrderByWithRelationInput'),
      cursor: 'ExamQuestionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ExamQuestionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.examQuestion.count(args as any)
    },
  },
)
