import { GraphQLSchema } from 'graphql'
import { core, inputObjectType } from 'nexus'
import {
  GraphqlInputDefinitionBlock,
  graphqlInputDefinitionBlock,
  prismaTypeInputObject,
} from '../blocks/inputObjectType'
import { isPrismaSchemaBuilder } from '../builder'
import { PrismaInputObjectTypeNames } from '../types'

export interface GraphqlInputObjectTypeConfig<TypeName extends string>
  extends core.Omit<core.NexusInputObjectTypeConfig<TypeName>, 'definition'> {
  definition: (t: GraphqlInputDefinitionBlock<TypeName>) => void
}

/**
 * Exposes an input object type based on the datamodel
 */
export function graphqlInputObjectType<
  TypeName extends PrismaInputObjectTypeNames
>(
  typeConfig: GraphqlInputObjectTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusInputObjectTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isPrismaSchemaBuilder(builder)) {
      throw new Error(
        'prismaInputObjectType can only be used by `makePrismaSchema`',
      )
    }
    const prismaSchema = builder.getDatamodelInfo().schema

    return nexusInputObjectType(typeConfig, prismaSchema)
  })
}

function nexusInputObjectType<TypeName extends string>(
  typeConfig: GraphqlInputObjectTypeConfig<TypeName>,
  prismaSchema: GraphQLSchema,
): core.NexusInputObjectTypeDef<TypeName> {
  let { definition, ...rest } = typeConfig
  const prismaType = prismaTypeInputObject(prismaSchema, typeConfig)

  return inputObjectType({
    ...rest,
    definition(block) {
      const prismaBlock = graphqlInputDefinitionBlock(
        typeConfig.name,
        block,
        prismaType,
        prismaSchema,
      )
      definition(prismaBlock)
    },
  })
}
