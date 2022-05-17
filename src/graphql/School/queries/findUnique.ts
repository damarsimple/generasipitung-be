import { queryField, nonNull } from 'nexus'

export const SchoolFindUniqueQuery = queryField('findUniqueSchool', {
  type: 'School',
  args: {
    where: nonNull('SchoolWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.school.findUnique({
      where,
      ...select,
    })
  },
})
