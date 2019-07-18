import { GraphQLField, GraphQLObjectType } from 'graphql/type'
import { core } from 'nexus'
import { GraphqlSchemaBuilder } from '../builder'
import { getTypeName } from '../graphql'
import { graphqlArgsToNexusArgs, graphqlTypeToCommonNexus } from './common'
import { generateEmptyResolver } from '../resolver.empty';

export function objectTypeToNexus(
  builder: GraphqlSchemaBuilder,
  type: GraphQLObjectType<any, any>,
) {
  const nexusFieldsConfig = objectTypeFieldsToNexus(
    type,
  )

  return builder.buildObjectType({
    name: type.name,
    definition(t) {
      Object.entries(nexusFieldsConfig).forEach(([name, config]) => {
        t.field(name, config)
      })
      type.getInterfaces().forEach(interfaceType => {
        t.implements(interfaceType.name)
      })
    },
  })
}

function objectTypeFieldToNexus(
  typeName: string,
  field: GraphQLField<any, any>,
): core.NexusOutputFieldConfig<any, any> {
  return {
    ...graphqlTypeToCommonNexus(field),
    type: getTypeName(field.type),
    resolve: generateEmptyResolver(
      typeName,
      field,
    ),
    args: graphqlArgsToNexusArgs(field.args),
  }
}

export function objectTypeFieldsToNexus(
  type: GraphQLObjectType,
) {
  let fields = Object.values(type.getFields())

  // TODO: Remove that once `node` is removed from the Prisma API
  if (type.name === 'Query') {
    fields = fields.filter(f => f.name !== 'node')
  }

  return fields.reduce<Record<string, core.FieldOutConfig<string, string>>>(
    (acc, field) => {
      acc[field.name] = objectTypeFieldToNexus(
        getTypeName(type),
        field,
      )

      return acc
    },
    {},
  )
}
