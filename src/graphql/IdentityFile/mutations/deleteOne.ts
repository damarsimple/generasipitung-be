import { mutationField, nonNull } from 'nexus'

export const IdentityFileDeleteOneMutation = mutationField(
  'deleteOneIdentityFile',
  {
    type: 'IdentityFile',
    args: {
      where: nonNull('IdentityFileWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.identityFile.delete({
        where,
        ...select,
      })
    },
  },
)
