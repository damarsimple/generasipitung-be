import { queryField, list } from 'nexus'

export const QuestionFindFirstQuery = queryField('findFirstQuestion', {
  type: 'Question',
  args: {
    where: 'QuestionWhereInput',
    orderBy: list('QuestionOrderByWithRelationInput'),
    cursor: 'QuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('QuestionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.question.findFirst({
      ...args,
      ...select,
    })
  },
})
