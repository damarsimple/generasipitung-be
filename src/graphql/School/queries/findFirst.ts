import { queryField, list } from 'nexus'

export const SchoolFindFirstQuery = queryField('findFirstSchool', {
  type: 'School',
  args: {
    where: 'SchoolWhereInput',
    orderBy: list('SchoolOrderByWithRelationInput'),
    cursor: 'SchoolWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SchoolScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.school.findFirst({
      ...args,
      ...select,
    })
  },
})
