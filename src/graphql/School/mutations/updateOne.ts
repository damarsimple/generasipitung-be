import { mutationField, nonNull } from 'nexus'

export const SchoolUpdateOneMutation = mutationField('updateOneSchool', {
  type: nonNull('School'),
  args: {
    data: nonNull('SchoolUpdateInput'),
    where: nonNull('SchoolWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.school.update({
      where,
      data,
      ...select,
    })
  },
})
