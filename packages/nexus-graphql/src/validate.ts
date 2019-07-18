import { DatamodelInfo, GraphqlSchemaConfig, PrismaClientInput } from './types'


function validateDatamodelInfo(datamodelInfo: DatamodelInfo) {
  if (
    !datamodelInfo.uniqueFieldsByModel ||
    !datamodelInfo.clientPath ||
    !datamodelInfo.schema ||
    !datamodelInfo.embeddedTypes
  ) {
    throw new Error(
      `\
Invalid \`prisma.datamodelInfo\` property. This should be imported from the \`nexus-prisma-generate\` output directory.
If you just updated nexus-prisma, try re-running \`nexus-prisma-generate\`.
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
Invalid \`prisma.client\` property in \`makePrismaSchema({ prisma: { client: ... } })\`.
This should either be an instance of the generated prisma-client, or a function that returns the prisma-client instance from your GraphQL server context
`,
    )
  }
}

export function validateOptions(options: GraphqlSchemaConfig): void {
  if (!options.wrapperOptions) {
    throw new Error(
      'Missing `prisma` property in `makePrismaSchema({ prisma: { ... } })`',
    )
  }

  if (!options.wrapperOptions.datamodelInfo) {
    throw new Error(
      'Missing `prisma.datamodelInfo` property in `makePrismaSchema({ prisma: { datamodelInfo: ... } })`',
    )
  }

  // Do not pass the object as is to enforce a type error if one of the properties aren't checked
  // /!\ Passing a new property doesn't guaranty that it is checked within the function
  validateDatamodelInfo({
    clientPath: options.wrapperOptions.datamodelInfo.clientPath,
    embeddedTypes: options.wrapperOptions.datamodelInfo.embeddedTypes,
    schema: options.wrapperOptions.datamodelInfo.schema,
    uniqueFieldsByModel: options.wrapperOptions.datamodelInfo.uniqueFieldsByModel,
  })

  if (!options.wrapperOptions.client) {
    throw new Error(
      'Missing `prisma.client` property in `makePrismaSchema({ prisma: { client: ... } })`',
    )
  }

  validateClient(options.wrapperOptions.client)
}
