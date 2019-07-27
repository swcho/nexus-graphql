import { GraphQLObjectType } from 'graphql'
import { graphqlExtendType, graphqlObjectType } from '../src'
import { mockSchema } from './prisma/mockedArtifacts'

describe('prismaExtendType', () => {
  it('extends the `Query` types with `Query.user` and `Query.users` queries', () => {
    const Query = graphqlObjectType({
      name: 'Query',
      definition(t) {
        t.useOriginalFields([])

        t.string('hello')
      },
    })
    const UserExtendedQuery = graphqlExtendType({
      type: 'Query',
      definition(t) {
        t.useOriginalFields(['user', 'users'])
      },
    })
    const schema = mockSchema([Query, UserExtendedQuery])

    const queryFields = Object.keys(
      (schema.getType('Query') as GraphQLObjectType).getFields(),
    )

    expect(queryFields).toEqual(
      expect.arrayContaining(['user', 'users', 'hello']),
    )

    expect(Object.keys(schema.getTypeMap())).toEqual(
      expect.arrayContaining([
        'Query',
        'String',
        'UserWhereUniqueInput',
        'ID',
        'User',
        'PostWhereInput',
        'DateTime',
        'Boolean',
        'UserWhereInput',
        'PostOrderByInput',
        'Int',
        'Post',
        'UserOrderByInput',
        '__Schema',
        '__Type',
        '__TypeKind',
        '__Field',
        '__InputValue',
        '__EnumValue',
        '__Directive',
        '__DirectiveLocation',
      ]),
    )
  })
})
