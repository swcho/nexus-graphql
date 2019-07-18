import { DatamodelInfo, GraphqlSchemaConfig, PrismaClientInput } from './types'


function validateDatamodelInfo(datamodelInfo: DatamodelInfo) {
  if (
    !datamodelInfo.uniqueFieldsByModel ||
    !datamodelInfo.schema ||
    !datamodelInfo.embeddedTypes
  ) {
    throw new Error(
      `\
Invalid \`wrapperOptions.datamodelInfo\` property. This should be imported from the \`nexus-graphql-generate\` output directory.
If you just updated nexus-graphql, try re-running \`nexus-graphql-generate\`.
      `,
    )
  }
}

function validateClient(client: PrismaClientInput) {
  if (
    typeof client !== 'function' &&
    (!client.$exists || !client.$graphql)
  ) {
    throw new Error(
      `\
Invalid \`wrapperOptions.client\` property in \`makeGraphqlSchema({ wrapperOptions: { client: ... } })\`.
This should either be an instance of the generated prisma-client, or a function that returns the prisma-client instance from your GraphQL server context
`,
    )
  }
}

export function validateOptions(options: GraphqlSchemaConfig): void {
  if (!options.wrapperOptions) {
    throw new Error(
      'Missing `wrapperOptions` property in `makeGraphqlSchema({ wrapperOptions: { ... } })`',
    )
  }

  if (!options.wrapperOptions.datamodelInfo) {
    throw new Error(
      'Missing `wrapperOptions.datamodelInfo` property in `makeGraphqlSchema({ wrapperOptions: { datamodelInfo: ... } })`',
    )
  }

  // Do not pass the object as is to enforce a type error if one of the properties aren't checked
  // /!\ Passing a new property doesn't guaranty that it is checked within the function
  validateDatamodelInfo({
    embeddedTypes: options.wrapperOptions.datamodelInfo.embeddedTypes,
    schema: options.wrapperOptions.datamodelInfo.schema,
    uniqueFieldsByModel: options.wrapperOptions.datamodelInfo.uniqueFieldsByModel,
  })

  if (!options.wrapperOptions.client) {
    throw new Error(
      'Missing `wrapperOptions.client` property in `makeGraphqlSchema({ wrapperOptions: { client: ... } })`',
    )
  }

  validateClient(options.wrapperOptions.client)
}
