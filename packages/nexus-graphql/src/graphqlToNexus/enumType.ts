import { GraphQLEnumType, GraphQLEnumValue } from 'graphql/type'
import { core } from 'nexus'
import { GraphqlSchemaBuilder } from '../builder'

export function enumTypeToNexus(
  builder: GraphqlSchemaBuilder,
  type: GraphQLEnumType,
) {
  const nexusEnumTypeMembers = enumTypeMembersToNexus(type)

  return builder.buildEnumType({
    name: type.name,
    description: type.description,
    members: nexusEnumTypeMembers,
  })
}

export function enumTypeMembersToNexus(
  type: GraphQLEnumType,
): core.EnumMemberInfo[] {
  return type.getValues().map(member => enumTypeMemberToNexus(member))
}

function enumTypeMemberToNexus(member: GraphQLEnumValue): core.EnumMemberInfo {
  return {
    name: member.name,
    description: member.description,
    value: member.value,
  }
}
