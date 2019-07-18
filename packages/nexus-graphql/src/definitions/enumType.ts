import { GraphQLEnumValue, GraphQLNamedType, isEnumType } from 'graphql'
import { core } from 'nexus'
import { isGraphqlSchemaBuilder, GraphqlSchemaBuilder } from '../builder'
import { GraphqlEnumTypeNames, GraphqlEnumTypeValues } from '../types'

interface GraphqlEnumTypeConfig<TypeName extends string>
  extends core.Omit<core.EnumTypeConfig<TypeName>, 'members'> {
  members: GraphqlEnumTypeValues<TypeName>[]
}

export function graphqlEnumType<TypeName extends GraphqlEnumTypeNames>(
  typeConfig: GraphqlEnumTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusEnumTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isGraphqlSchemaBuilder(builder)) {
      throw new Error('graphqlEnumType can only be used by `makeGraphqlSchema`')
    }

    return nexusEnumType(typeConfig, builder)
  })
}

function nexusEnumType<TypeName extends string>(
  typeConfig: GraphqlEnumTypeConfig<TypeName>,
  builder: GraphqlSchemaBuilder,
): core.NexusEnumTypeDef<TypeName> {
  const typeName = typeConfig.name
  const schema = builder.getDatamodelInfo().schema
  const graphqlType = schema.getType(typeName)
  const members = getEnumTypeMembers(typeName, typeConfig.members, graphqlType)
  const description = typeConfig.description
    ? typeConfig.description
    : graphqlType!.description

  return core.enumType({
    name: typeName,
    description,
    members,
  })
}

export function getEnumTypeMembers(
  typeName: string,
  members: string[],
  graphqlType: GraphQLNamedType | null | undefined,
): GraphQLEnumValue[] {
  if (!isEnumType(graphqlType)) {
    throw new Error(
      `Must select a GraphQLEnumType, saw ${typeName} which is ${graphqlType}`,
    )
  }

  return members.map(member => {
    const value = graphqlType.getValue(member)

    if (!value) {
      throw new Error(
        `Could not find ${graphqlType.name}.${member} in Graphql API`,
      )
    }

    return value
  })
}
