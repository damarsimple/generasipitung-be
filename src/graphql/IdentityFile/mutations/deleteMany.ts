import { mutationField, nonNull } from 'nexus'

export const IdentityFileDeleteManyMutation = mutationField(
  'deleteManyIdentityFile',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'IdentityFileWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.identityFile.deleteMany({ where } as any)
    },
  },
)
