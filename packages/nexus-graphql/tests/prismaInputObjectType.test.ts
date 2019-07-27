import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql'
import { graphqlInputObjectType } from '../src'
import { mockSchema } from './prisma/mockedArtifacts'

describe('prismaInputObjectType', () => {
  it('exposes all fields of PostWhereInput', () => {
    const PostWhereInput = graphqlInputObjectType({
      name: 'PostWhereInput',
      definition(t) {
        t.useOriginalFields(['*'])
      },
    })

    const schema = mockSchema([PostWhereInput])

    const queryFields = Object.keys(
      (schema.getType('Query') as GraphQLObjectType).getFields(),
    )
    const postWhereInputFields = Object.keys(
      (schema.getType('PostWhereInput') as GraphQLInputObjectType).getFields(),
    )

    expect(queryFields).toEqual(
      expect.arrayContaining([
        'post',
        'posts',
        'postsConnection',
        'user',
        'users',
        'usersConnection',
      ]),
    )
    expect(postWhereInputFields).toEqual(
      expect.arrayContaining([
        'id',
        'id_not',
        'id_in',
        'id_not_in',
        'id_lt',
        'id_lte',
        'id_gt',
        'id_gte',
        'id_contains',
        'id_not_contains',
        'id_starts_with',
        'id_not_starts_with',
        'id_ends_with',
        'id_not_ends_with',
        'createdAt',
        'createdAt_not',
        'createdAt_in',
        'createdAt_not_in',
        'createdAt_lt',
        'createdAt_lte',
        'createdAt_gt',
        'createdAt_gte',
        'updatedAt',
        'updatedAt_not',
        'updatedAt_in',
        'updatedAt_not_in',
        'updatedAt_lt',
        'updatedAt_lte',
        'updatedAt_gt',
        'updatedAt_gte',
        'published',
        'published_not',
        'title',
        'title_not',
        'title_in',
        'title_not_in',
        'title_lt',
        'title_lte',
        'title_gt',
        'title_gte',
        'title_contains',
        'title_not_contains',
        'title_starts_with',
        'title_not_starts_with',
        'title_ends_with',
        'title_not_ends_with',
        'content',
        'content_not',
        'content_in',
        'content_not_in',
        'content_lt',
        'content_lte',
        'content_gt',
        'content_gte',
        'content_contains',
        'content_not_contains',
        'content_starts_with',
        'content_not_starts_with',
        'content_ends_with',
        'content_not_ends_with',
        'author',
        'AND',
        'OR',
        'NOT',
      ]),
    )

    expect(Object.keys(schema.getTypeMap())).toEqual(
      expect.arrayContaining([
        'Query',
        'UserWhereUniqueInput',
        'ID',
        'String',
        'User',
        'PostWhereInput',
        'DateTime',
        'Boolean',
        'UserWhereInput',
        'PostOrderByInput',
        'Int',
        'Post',
        'UserOrderByInput',
        'UserConnection',
        'PageInfo',
        'UserEdge',
        'AggregateUser',
        'PostWhereUniqueInput',
        'PostConnection',
        'PostEdge',
        'AggregatePost',
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

  it('exposes only the `PostWhereInput.title` and `PostWhereInput.content` fields', () => {
    const PostWhereInput = graphqlInputObjectType({
      name: 'PostWhereInput',
      definition(t) {
        t.useOriginalFields(['title', 'content'])
      },
    })

    const schema = mockSchema([PostWhereInput])

    const postWhereInputFields = Object.keys(
      (schema.getType('PostWhereInput') as GraphQLObjectType).getFields(),
    )

    expect(postWhereInputFields).toEqual(
      expect.arrayContaining(['title', 'content']),
    )
  })
})
