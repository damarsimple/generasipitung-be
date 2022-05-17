import { mutationField, nonNull } from 'nexus'

export const IdentityFileUpdateOneMutation = mutationField(
  'updateOneIdentityFile',
  {
    type: nonNull('IdentityFile'),
    args: {
      data: nonNull('IdentityFileUpdateInput'),
      where: nonNull('IdentityFileWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.identityFile.update({
        where,
        data,
        ...select,
      })
    },
  },
)
