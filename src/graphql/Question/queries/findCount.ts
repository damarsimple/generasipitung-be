import { queryField, nonNull, list } from 'nexus'

export const QuestionFindCountQuery = queryField('findManyQuestionCount', {
  type: nonNull('Int'),
  args: {
    where: 'QuestionWhereInput',
    orderBy: list('QuestionOrderByWithRelationInput'),
    cursor: 'QuestionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('QuestionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.question.count(args as any)
  },
})
