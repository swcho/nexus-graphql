import { GraphQLObjectType, GraphQLField, isScalarType } from "graphql";
import { getObjectTypeFieldsName, getExposableFieldsTypeName, getTypeFieldArgName, getObjectTypeFieldsDetailsName, getTSType } from "./schema.names";
import { EOL } from "os";
import { getTypeName, isList, isRequired, getFinalType } from "./graphql";


function renderFields(
  type: GraphQLObjectType,
  fields: GraphQLField<any, any>[],
) {
  return `\
type ${getObjectTypeFieldsName(type)} =
  | ${getExposableFieldsTypeName(type)}
${fields
  .map(
    f =>
      `  | { name: '${f.name}', args?: ${
        f.args.length > 0
          ? `${getTypeFieldArgName(type, f)}[] | false`
          : '[] | false'
      }, alias?: string  } `,
  )
  .join(EOL)}

type ${getExposableFieldsTypeName(type)} =
${fields.map(f => `  | '${f.name}'`).join(EOL)}
`
}

function renderFieldArg(
  type: GraphQLObjectType,
  field: GraphQLField<any, any>,
) {
  return `\
type ${getTypeFieldArgName(type, field)} =
${field.args.map(arg => `  | '${arg.name}'`).join(EOL)}`
}

function renderFieldsArgs(
  type: GraphQLObjectType,
  fields: GraphQLField<any, any>[],
) {
  return `\
${fields
  .filter(field => field.args.length > 0)
  .map(field => renderFieldArg(type, field))
  .join(EOL)}
  `
}

function renderResolverArgs(field: GraphQLField<any, any>) {
  return `{\
 ${field.args
   .map(
     arg => `${arg.name}${isRequired(arg.type) ? '' : '?'}: ${getTSType(arg)}`,
   )
   .join(', ')} }\
  `
}

function renderResolverReturnType(field: GraphQLField<any, any>) {
  const returnType = getTSType(field)

  return `Promise<${returnType}> | ${returnType}`
}

function renderTypeFieldDetails(
  type: GraphQLObjectType,
  fields: GraphQLField<any, any>[],
) {
  return `\
export interface ${getObjectTypeFieldsDetailsName(type)} {
${fields
  .map(
    field => `\
  ${field.name}: {
    type: '${getTypeName(field.type)}'
    args: ${
      field.args.length > 0
        ? `Record<${getTypeFieldArgName(
            type,
            field,
          )}, core.NexusArgDef<string>>`
        : '{}'
    }
    description: string
    list: ${isList(field.type) ? true : undefined}
    nullable: ${!isRequired(field.type)}
    resolve: ${
      isScalarType(getFinalType(field.type))
        ? undefined
        : `(
      root: core.RootValue<"${type.name}">,
      args: ${renderResolverArgs(field)},
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => ${renderResolverReturnType(field)}`
    }
  }`,
  )
  .join(EOL)}
}
  `
}

function removeQueryNodeField(
  type: GraphQLObjectType,
  fields: GraphQLField<any, any>[],
) {
  if (type.name === 'Query') {
    fields = fields.filter(field => field.name !== 'node')
  }

  return fields
}

export function renderObjectType(type: GraphQLObjectType) {
  const fields = Object.values(type.getFields())
  const fieldsWithoutQueryNode = removeQueryNodeField(type, fields)

  return `\
// Types for ${type.name}

${renderFields(type, fieldsWithoutQueryNode)}

${renderFieldsArgs(type, fieldsWithoutQueryNode)}

${renderTypeFieldDetails(type, fieldsWithoutQueryNode)}
`
}
