import { mutationField, nonNull } from 'nexus'

export const SchoolUpsertOneMutation = mutationField('upsertOneSchool', {
  type: nonNull('School'),
  args: {
    where: nonNull('SchoolWhereUniqueInput'),
    create: nonNull('SchoolCreateInput'),
    update: nonNull('SchoolUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.school.upsert({
      ...args,
      ...select,
    })
  },
})
