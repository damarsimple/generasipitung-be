import { queryField, list } from 'nexus'

export const SchoolStaffFindFirstQuery = queryField('findFirstSchoolStaff', {
  type: 'SchoolStaff',
  args: {
    where: 'SchoolStaffWhereInput',
    orderBy: list('SchoolStaffOrderByWithRelationInput'),
    cursor: 'SchoolStaffWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SchoolStaffScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schoolStaff.findFirst({
      ...args,
      ...select,
    })
  },
})
