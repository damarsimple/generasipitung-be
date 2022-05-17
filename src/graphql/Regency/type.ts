import { objectType } from 'nexus'

export const Regency = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Regency',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('provinceId')
    t.field('province', {
      type: 'Province',
      resolve(root: any) {
        return root.province
      },
    })
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
      type: 'RegencyCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
