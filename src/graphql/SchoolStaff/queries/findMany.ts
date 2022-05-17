import { queryField, nonNull, list } from 'nexus'

export const SchoolStaffFindManyQuery = queryField('findManySchoolStaff', {
  type: nonNull(list(nonNull('SchoolStaff'))),
  args: {
    where: 'SchoolStaffWhereInput',
    orderBy: list('SchoolStaffOrderByWithRelationInput'),
    cursor: 'SchoolStaffWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SchoolStaffScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schoolStaff.findMany({
      ...args,
      ...select,
    })
  },
})
