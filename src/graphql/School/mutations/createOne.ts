import { mutationField, nonNull } from 'nexus'

export const SchoolCreateOneMutation = mutationField('createOneSchool', {
  type: nonNull('School'),
  args: {
    data: nonNull('SchoolCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.school.create({
      data,
      ...select,
    })
  },
})
