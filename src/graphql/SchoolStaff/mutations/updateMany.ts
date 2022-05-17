import { mutationField, nonNull } from 'nexus'

export const SchoolStaffUpdateManyMutation = mutationField(
  'updateManySchoolStaff',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('SchoolStaffUpdateManyMutationInput'),
      where: 'SchoolStaffWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.schoolStaff.updateMany(args as any)
    },
  },
)
