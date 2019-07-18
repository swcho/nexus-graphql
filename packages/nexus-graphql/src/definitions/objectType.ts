import { core, objectType } from 'nexus'
import {
  GraphqlObjectDefinitionBlock,
  graphqlObjectDefinitionBlock,
  graphqlTypeObject,
} from '../blocks/objectType'
import { isGraphqlSchemaBuilder, GraphqlSchemaBuilder } from '../builder'
import { GraphqlObjectTypeNames } from '../types'

export interface GraphqlObjectTypeConfig<TypeName extends string>
  extends core.Omit<core.NexusObjectTypeConfig<TypeName>, 'definition'> {
  definition: (t: GraphqlObjectDefinitionBlock<TypeName>) => void
}

/**
 * Exposes an object type based on the datamodel
 */
export function graphqlObjectType<TypeName extends GraphqlObjectTypeNames>(
  typeConfig: GraphqlObjectTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusObjectTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isGraphqlSchemaBuilder(builder)) {
      throw new Error('graphqlObjectType can only be used by `makeGraphqlSchema`')
    }

    return nexusObjectType(typeConfig, builder)
  })
}

function nexusObjectType<TypeName extends string>(
  typeConfig: GraphqlObjectTypeConfig<TypeName>,
  builder: GraphqlSchemaBuilder,
): core.NexusObjectTypeDef<TypeName> {
  let { definition, ...rest } = typeConfig
  const datamodelInfo = builder.getDatamodelInfo()
  const originalType = graphqlTypeObject(
    datamodelInfo,
    typeConfig,
    builder.getConfig(),
  )
  const schema = datamodelInfo.schema

  return objectType({
    ...rest,
    definition(block) {
      const definitionBlock = graphqlObjectDefinitionBlock(
        typeConfig.name,
        block as GraphqlObjectDefinitionBlock<TypeName>,
        originalType,
        schema,
      )

      definition(definitionBlock)
    },
  })
}
