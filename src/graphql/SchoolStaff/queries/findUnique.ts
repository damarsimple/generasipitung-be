import { queryField, nonNull } from 'nexus'

export const SchoolStaffFindUniqueQuery = queryField('findUniqueSchoolStaff', {
  type: 'SchoolStaff',
  args: {
    where: nonNull('SchoolStaffWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.schoolStaff.findUnique({
      where,
      ...select,
    })
  },
})
