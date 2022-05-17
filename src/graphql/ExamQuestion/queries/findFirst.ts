import { queryField, list } from 'nexus'

export const ExamQuestionFindFirstQuery = queryField('findFirstExamQuestion', {
  type: 'ExamQuestion',
  args: {
    where: 'ExamQuestionWhereInput',
    orderBy: list('ExamQuestionOrderByWithRelationInput'),
    cursor: 'ExamQuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamQuestionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examQuestion.findFirst({
      ...args,
      ...select,
    })
  },
})
