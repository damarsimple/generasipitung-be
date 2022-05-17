import { mutationField, nonNull } from 'nexus'

export const SchoolStaffCreateOneMutation = mutationField(
  'createOneSchoolStaff',
  {
    type: nonNull('SchoolStaff'),
    args: {
      data: nonNull('SchoolStaffCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.schoolStaff.create({
        data,
        ...select,
      })
    },
  },
)
