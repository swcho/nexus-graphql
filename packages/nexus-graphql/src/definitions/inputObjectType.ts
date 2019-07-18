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
        'graphqlInputObjectType can only be used by `makeGraphqlSchema`',
      )
    }
    const schema = builder.getDatamodelInfo().schema

    return nexusInputObjectType(typeConfig, schema)
  })
}

function nexusInputObjectType<TypeName extends string>(
  typeConfig: GraphqlInputObjectTypeConfig<TypeName>,
  schema: GraphQLSchema,
): core.NexusInputObjectTypeDef<TypeName> {
  let { definition, ...rest } = typeConfig
  const originalType = graphqlTypeInputObject(schema, typeConfig)

  return inputObjectType({
    ...rest,
    definition(block) {
      const definitionBlock = graphqlInputDefinitionBlock(
        typeConfig.name,
        block,
        originalType,
        schema,
      )
      definition(definitionBlock)
    },
  })
}
