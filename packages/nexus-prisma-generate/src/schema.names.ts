import { GraphQLObjectType, GraphQLInputObjectType, GraphQLEnumType, GraphQLField, GraphQLInputField, isScalarType, isInputObjectType } from "graphql";
import { getFinalType, getTypeName, isList, isRequired } from "./graphql";


function upperFirst(s: string) {
  return s.replace(/^\w/, c => c.toUpperCase())
}

export function getObjectTypeFieldsName(type: GraphQLObjectType) {
  return `${type.name}Object`
}

export function getInputObjectTypeFieldsName(type: GraphQLInputObjectType) {
  return `${type.name}InputObject`
}

export function getObjectTypeFieldsDetailsName(type: GraphQLObjectType) {
  return `${type.name}FieldDetails`
}

export function getInputObjectTypeName(type: GraphQLInputObjectType) {
  return `${type.name}`
}

export function getEnumTypeName(enumType: GraphQLEnumType): string {
  return `${enumType.name}Values`
}

export function getExposableFieldsTypeName(type: GraphQLObjectType) {
  return `${type.name}Fields`
}

export function getTypeFieldArgName(
  type: GraphQLObjectType,
  field: GraphQLField<any, any>,
) {
  return `${type.name}${upperFirst(field.name)}Args`
}

export function getTSType(graphqlType: GraphQLField<any, any> | GraphQLInputField) {
  const graphqlToTypescript: Record<string, string> = {
    String: 'string',
    Boolean: 'boolean',
    ID: 'string',
    Int: 'number',
    Float: 'number',
    DateTime: 'string',
  }
  const finalType = getFinalType(graphqlType.type)

  let returnType = ''

  if (isScalarType(finalType)) {
    returnType = graphqlToTypescript[getTypeName(finalType)]
  } else if (isInputObjectType(finalType)) {
    returnType = getInputObjectTypeName(finalType)
  } else {
    returnType = `prisma.${getTypeName(finalType)}`
  }

  if (isList(graphqlType.type)) {
    returnType += '[]'
  }

  if (!isRequired(graphqlType.type)) {
    returnType += ' | null'
  }

  return returnType
}
