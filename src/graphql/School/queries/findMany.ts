import { queryField, nonNull, list } from 'nexus'

export const SchoolFindManyQuery = queryField('findManySchool', {
  type: nonNull(list(nonNull('School'))),
  args: {
    where: 'SchoolWhereInput',
    orderBy: list('SchoolOrderByWithRelationInput'),
    cursor: 'SchoolWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SchoolScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.school.findMany({
      ...args,
      ...select,
    })
  },
})
