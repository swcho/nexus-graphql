import { GraphQLSchema } from 'graphql'
import { core, inputObjectType } from 'nexus'
import {
  GraphqlInputDefinitionBlock,
  graphqlInputDefinitionBlock,
  graphqlTypeInputObject,
} from '../blocks/inputObjectType'
import { isGraphqlSchemaBuilder } from '../builder'
import { GraphqlInputObjectTypeNames } from '../types'

export interface GraphqlInputObjectTypeConfig<TypeName extends string>
  extends core.Omit<core.NexusInputObjectTypeConfig<TypeName>, 'definition'> {
  definition: (t: GraphqlInputDefinitionBlock<TypeName>) => void
}

/**
 * Exposes an input object type based on the datamodel
 */
export function graphqlInputObjectType<
  TypeName extends GraphqlInputObjectTypeNames
>(
  typeConfig: GraphqlInputObjectTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusInputObjectTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isGraphqlSchemaBuilder(builder)) {
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
  const prismaType = graphqlTypeInputObject(prismaSchema, typeConfig)

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
