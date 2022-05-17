import { mutationField, nonNull } from 'nexus'

export const SchoolStaffUpdateOneMutation = mutationField(
  'updateOneSchoolStaff',
  {
    type: nonNull('SchoolStaff'),
    args: {
      data: nonNull('SchoolStaffUpdateInput'),
      where: nonNull('SchoolStaffWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.schoolStaff.update({
        where,
        data,
        ...select,
      })
    },
  },
)
