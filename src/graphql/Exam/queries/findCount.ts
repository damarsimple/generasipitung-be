import { queryField, nonNull, list } from 'nexus'

export const ExamFindCountQuery = queryField('findManyExamCount', {
  type: nonNull('Int'),
  args: {
    where: 'ExamWhereInput',
    orderBy: list('ExamOrderByWithRelationInput'),
    cursor: 'ExamWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.exam.count(args as any)
  },
})
