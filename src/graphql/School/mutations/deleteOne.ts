import { mutationField, nonNull } from 'nexus'

export const SchoolDeleteOneMutation = mutationField('deleteOneSchool', {
  type: 'School',
  args: {
    where: nonNull('SchoolWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.school.delete({
      where,
      ...select,
    })
  },
})
