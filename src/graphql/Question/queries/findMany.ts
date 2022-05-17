import { queryField, nonNull, list } from 'nexus'

export const QuestionFindManyQuery = queryField('findManyQuestion', {
  type: nonNull(list(nonNull('Question'))),
  args: {
    where: 'QuestionWhereInput',
    orderBy: list('QuestionOrderByWithRelationInput'),
    cursor: 'QuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('QuestionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.question.findMany({
      ...args,
      ...select,
    })
  },
})
