import { mutationField, nonNull } from 'nexus'

export const IdentityFileUpdateManyMutation = mutationField(
  'updateManyIdentityFile',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('IdentityFileUpdateManyMutationInput'),
      where: 'IdentityFileWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.identityFile.updateMany(args as any)
    },
  },
)
