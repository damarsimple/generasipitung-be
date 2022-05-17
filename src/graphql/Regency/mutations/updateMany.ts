import { mutationField, nonNull } from 'nexus'

export const RegencyUpdateManyMutation = mutationField('updateManyRegency', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('RegencyUpdateManyMutationInput'),
    where: 'RegencyWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.regency.updateMany(args as any)
  },
})
