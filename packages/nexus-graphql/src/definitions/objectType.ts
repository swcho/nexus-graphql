import { core, objectType } from 'nexus'
import {
  GraphqlObjectDefinitionBlock,
  graphqlObjectDefinitionBlock,
  prismaTypeObject,
} from '../blocks/objectType'
import { isPrismaSchemaBuilder, PrismaSchemaBuilder } from '../builder'
import { PrismaObjectTypeNames } from '../types'

export interface PrismaObjectTypeConfig<TypeName extends string>
  extends core.Omit<core.NexusObjectTypeConfig<TypeName>, 'definition'> {
  definition: (t: GraphqlObjectDefinitionBlock<TypeName>) => void
}

/**
 * Exposes an object type based on the datamodel
 */
export function graphqlObjectType<TypeName extends PrismaObjectTypeNames>(
  typeConfig: PrismaObjectTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusObjectTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isPrismaSchemaBuilder(builder)) {
      throw new Error('prismaObjectType can only be used by `makePrismaSchema`')
    }

    return nexusObjectType(typeConfig, builder)
  })
}

function nexusObjectType<TypeName extends string>(
  typeConfig: PrismaObjectTypeConfig<TypeName>,
  builder: PrismaSchemaBuilder,
): core.NexusObjectTypeDef<TypeName> {
  let { definition, ...rest } = typeConfig
  const datamodelInfo = builder.getDatamodelInfo()
  const prismaType = prismaTypeObject(
    datamodelInfo,
    typeConfig,
    builder.getConfig(),
  )
  const prismaSchema = datamodelInfo.schema

  return objectType({
    ...rest,
    definition(block) {
      const prismaBlock = graphqlObjectDefinitionBlock(
        typeConfig.name,
        block as GraphqlObjectDefinitionBlock<TypeName>,
        prismaType,
        prismaSchema,
      )

      definition(prismaBlock)
    },
  })
}
