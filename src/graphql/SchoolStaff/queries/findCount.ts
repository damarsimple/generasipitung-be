import { queryField, nonNull, list } from 'nexus'

export const SchoolStaffFindCountQuery = queryField(
  'findManySchoolStaffCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'SchoolStaffWhereInput',
      orderBy: list('SchoolStaffOrderByWithRelationInput'),
      cursor: 'SchoolStaffWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SchoolStaffScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.schoolStaff.count(args as any)
    },
  },
)
