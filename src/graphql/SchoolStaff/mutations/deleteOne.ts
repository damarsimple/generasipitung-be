import { mutationField, nonNull } from 'nexus'

export const SchoolStaffDeleteOneMutation = mutationField(
  'deleteOneSchoolStaff',
  {
    type: 'SchoolStaff',
    args: {
      where: nonNull('SchoolStaffWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.schoolStaff.delete({
        where,
        ...select,
      })
    },
  },
)
