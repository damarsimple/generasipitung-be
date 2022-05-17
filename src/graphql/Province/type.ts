import { objectType } from 'nexus'

export const Province = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Province',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('regencies', {
      type: 'Regency',
      args: {
        where: 'RegencyWhereInput',
        orderBy: 'RegencyOrderByWithRelationInput',
        cursor: 'RegencyWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RegencyScalarFieldEnum',
      },
      resolve(root: any) {
        return root.regencies
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('users', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByWithRelationInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.users
      },
    })
    t.list.field('School', {
      type: 'School',
      args: {
        where: 'SchoolWhereInput',
        orderBy: 'SchoolOrderByWithRelationInput',
        cursor: 'SchoolWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SchoolScalarFieldEnum',
      },
      resolve(root: any) {
        return root.School
      },
    })
    t.field('_count', {
      type: 'ProvinceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
