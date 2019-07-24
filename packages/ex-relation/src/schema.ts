import * as path from 'path'
import * as allTypes from './resolvers'
import { makeSchema } from 'nexus';
import { makeGraphqlSchema } from 'nexus-graphql';

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export const schema = makeGraphqlSchema({
  types: allTypes,

  wrapperOptions: {
    datamodelInfo: {
      uniqueFieldsByModel: {
        User: ['id', 'email'],
        Pet: ['id'],
        GENDER: []
      },
      embeddedTypes: [],
      schema: require('./generated/types/graphql.schema.json'),
    },
    client: {} as any,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.nexus.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  nonNullDefaults: {
    input: true,
    output: true,
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './generated/types/types.ts'),
        alias: 'types',
      },
      {
        source: path.join(__dirname, './context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
}) as any
