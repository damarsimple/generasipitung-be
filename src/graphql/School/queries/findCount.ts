import { queryField, nonNull, list } from 'nexus'

export const SchoolFindCountQuery = queryField('findManySchoolCount', {
  type: nonNull('Int'),
  args: {
    where: 'SchoolWhereInput',
    orderBy: list('SchoolOrderByWithRelationInput'),
    cursor: 'SchoolWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SchoolScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.school.count(args as any)
  },
})
