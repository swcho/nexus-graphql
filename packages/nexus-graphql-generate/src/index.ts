#!/usr/bin/env node

import * as meow from 'meow'
import { generateFromSchema } from './schema';

const cli = meow(
  `
    nexus-graphql-generate schema-path output

    > Generate the building blocks for nexus-graphql

    -----
    
    Inputs should be relative to the root of your project

    --output  (required): Path to directory where you want to output the typings (eg: ./generated/nexus-graphql)
    --schema  (optional): Path to graphql schema
`,
  {
    flags: {
      output: {
        type: 'string',
      },
      schema: {
        type: 'string',
      },
    },
  },
)

main(cli)

function main(cli: meow.Result) {
  const {
    output,
    schema,
  } = cli.flags

  if (!output) {
    console.log('ERROR: Missing argument --output')
    process.exit(1)
  }

  if (schema) {
    return generateFromSchema(schema, output);
  }
}
