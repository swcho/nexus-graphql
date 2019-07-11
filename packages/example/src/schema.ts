import * as path from 'path'
import * as allTypes from './resolvers'
import { makeSchema } from 'nexus';
import { makePrismaSchema } from 'nexus-graphql';

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export const schema = makePrismaSchema({
  types: allTypes,

  prisma: {
    datamodelInfo: {
      uniqueFieldsByModel: {},
      embeddedTypes: [],
      clientPath: 'src/generated/prisma-client',
      schema: require('./generated/graphql.schema.json'),
    },
    client: {} as any,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.out.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  nonNullDefaults: {
    input: true,
    output: true,
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
}) as any
