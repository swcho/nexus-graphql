import { GraphQLEnumValue, GraphQLNamedType, isEnumType } from 'graphql'
import { core } from 'nexus'
import { isGraphqlSchemaBuilder, GraphqlSchemaBuilder } from '../builder'
import { GraphqlEnumTypeNames, GraphqlEnumTypeValues } from '../types'

interface PrismaEnumTypeConfig<TypeName extends string>
  extends core.Omit<core.EnumTypeConfig<TypeName>, 'members'> {
  members: GraphqlEnumTypeValues<TypeName>[]
}

export function graphqlEnumType<TypeName extends GraphqlEnumTypeNames>(
  typeConfig: PrismaEnumTypeConfig<TypeName>,
): core.NexusWrappedType<core.NexusEnumTypeDef<TypeName>> {
  return core.nexusWrappedType(typeConfig.name, builder => {
    if (!isGraphqlSchemaBuilder(builder)) {
      throw new Error('prismaEnumType can only be used by `makePrismaSchema`')
    }

    return nexusEnumType(typeConfig, builder)
  })
}

function nexusEnumType<TypeName extends string>(
  typeConfig: PrismaEnumTypeConfig<TypeName>,
  builder: GraphqlSchemaBuilder,
): core.NexusEnumTypeDef<TypeName> {
  const typeName = typeConfig.name
  const prismaSchema = builder.getDatamodelInfo().schema
  const graphqlType = prismaSchema.getType(typeName)
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
        `Could not find ${graphqlType.name}.${member} in Prisma API`,
      )
    }

    return value
  })
}
