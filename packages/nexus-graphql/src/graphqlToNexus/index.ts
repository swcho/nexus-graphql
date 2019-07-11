import { GraphQLNamedType, isInputObjectType, isObjectType } from 'graphql/type'
import { PrismaSchemaBuilder } from '../builder'
import { inputObjectTypeToNexus } from './inputObjectType'
import { objectTypeToNexus } from './objectType'

export function graphqlTypeToNexus(
  builder: PrismaSchemaBuilder,
  type: GraphQLNamedType,
): GraphQLNamedType {
  if (isObjectType(type)) {
    return objectTypeToNexus(builder, type);
  }

  if (isInputObjectType(type)) {
    return inputObjectTypeToNexus(builder, type)
  }

  return type
}
