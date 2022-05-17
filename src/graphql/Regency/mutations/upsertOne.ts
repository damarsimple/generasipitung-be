import { mutationField, nonNull } from 'nexus'

export const RegencyUpsertOneMutation = mutationField('upsertOneRegency', {
  type: nonNull('Regency'),
  args: {
    where: nonNull('RegencyWhereUniqueInput'),
    create: nonNull('RegencyCreateInput'),
    update: nonNull('RegencyUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.regency.upsert({
      ...args,
      ...select,
    })
  },
})
