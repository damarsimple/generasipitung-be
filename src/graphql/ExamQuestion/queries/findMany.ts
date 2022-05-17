import { queryField, nonNull, list } from 'nexus'

export const ExamQuestionFindManyQuery = queryField('findManyExamQuestion', {
  type: nonNull(list(nonNull('ExamQuestion'))),
  args: {
    where: 'ExamQuestionWhereInput',
    orderBy: list('ExamQuestionOrderByWithRelationInput'),
    cursor: 'ExamQuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamQuestionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examQuestion.findMany({
      ...args,
      ...select,
    })
  },
})
