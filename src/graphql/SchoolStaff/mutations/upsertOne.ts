import { mutationField, nonNull } from 'nexus'

export const SchoolStaffUpsertOneMutation = mutationField(
  'upsertOneSchoolStaff',
  {
    type: nonNull('SchoolStaff'),
    args: {
      where: nonNull('SchoolStaffWhereUniqueInput'),
      create: nonNull('SchoolStaffCreateInput'),
      update: nonNull('SchoolStaffUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.schoolStaff.upsert({
        ...args,
        ...select,
      })
    },
  },
)
