import { mutationField, nonNull } from 'nexus'

export const SchoolStaffDeleteManyMutation = mutationField(
  'deleteManySchoolStaff',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SchoolStaffWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.schoolStaff.deleteMany({ where } as any)
    },
  },
)
