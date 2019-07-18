import { core, extendType } from 'nexus'
import {
  GraphqlExtendTypeBlock,
  graphqlExtendTypeBlock,
  graphqlTypeExtend,
} from '../blocks/extendType'
import { isGraphqlSchemaBuilder, GraphqlSchemaBuilder } from '../builder'
import { GraphqlObjectTypeNames } from '../types'

export interface GraphqlExtendTypeConfig<TypeName extends string>
  extends core.Omit<core.NexusExtendTypeConfig<TypeName>, 'definition'> {
  definition: (t: GraphqlExtendTypeBlock<TypeName>) => void
}

/**
 * Extend a previously defined object type. Mainly meant to split the Query/Mutation types in several files if needed.
 */
export function graphqlExtendType<TypeName extends GraphqlObjectTypeNames>(
  typeConfig: GraphqlExtendTypeConfig<TypeName>,
  // @ts-ignore
): core.NexusWrappedType<core.NexusExtendTypeDef<TypeName>> {
  // @ts-ignore
  return core.nexusWrappedType(typeConfig.type, builder => {
    if (!isGraphqlSchemaBuilder(builder)) {
      throw new Error('prismaExtendType can only be used by `makePrismaSchema`')
    }

    return nexusExtendType(typeConfig, builder)
  })
}

function nexusExtendType<TypeName extends string>(
  typeConfig: GraphqlExtendTypeConfig<TypeName>,
  builder: GraphqlSchemaBuilder,
): core.NexusExtendTypeDef<TypeName> {
  let { definition, ...rest } = typeConfig
  const datamodelInfo = builder.getDatamodelInfo()
  const prismaType = graphqlTypeExtend(
    datamodelInfo,
    typeConfig,
    builder.getConfig(),
  )
  const prismaSchema = datamodelInfo.schema

  return extendType({
    ...rest,
    definition(block) {
      const prismaBlock = graphqlExtendTypeBlock(
        typeConfig.type,
        block,
        prismaType,
        prismaSchema,
      )

      definition(prismaBlock)
    },
  })
}
