#!/usr/bin/env node

import * as meow from 'meow'
import { generateFromSchema } from './schema';

const cli = meow(
  `
    nexus-graphql-generate schema-path output

    > Generate the building blocks for nexus-graphql

    -----
    
    Inputs should be relative to the root of your project

    --schema   (required): Path to graphql schema
    --typepath (required): Path to graphql types
    --output   (required): Path to directory where you want to output the typings (eg: ./generated/nexus-graphql)
`,
  {
    flags: {
      schema: {
        type: 'string',
      },
      typepath: {
        type: 'string',
      },
      output: {
        type: 'string',
      },
    },
  },
)

main(cli)

function main(cli: meow.Result) {
  const {
    schema,
    typepath,
    output,
  } = cli.flags

  if (!output) {
    console.log('ERROR: Missing argument --output')
    process.exit(1)
  }

  if (schema) {
    return generateFromSchema(schema, typepath, output);
  }
}
