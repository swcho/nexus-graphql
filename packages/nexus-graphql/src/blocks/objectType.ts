import { GraphQLObjectType, GraphQLSchema, isObjectType } from 'graphql'
import { core } from 'nexus'
import { PrismaObjectTypeConfig } from '../definitions/objectType'
import { findGraphQLTypeField, getTypeName } from '../graphql'
import { objectTypeFieldsToNexus } from '../graphqlToNexus/objectType'
import {
  AddFieldInput,
  FilterInputField,
  InputFieldsWithStar,
  ObjectTypeDetails,
  PickInputField,
  GraphqlSchemaConfig,
  InternalDatamodelInfo,
} from '../types'
import { getFields, whitelistArgs } from '../utils'

export interface GraphqlObjectDefinitionBlock<TypeName extends string>
  extends core.ObjectDefinitionBlock<TypeName> {
  /**
   * Contains all the options to use native `nexus` methods with `nexus-graphql` generated schema
   *
   * @example Pass in all the options as-is
   * ```
   * graphqlObjectType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field(
   *       'users',
   *       t.prismaType.users
   *     )
   *   }
   * })
   * ```
   * @example Use all the options, but overide the resolver
   *
   * ```
   * graphqlObjectType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field('users', {
   *       ...t.prismaType.users,
   *       resolve(root, args, ctx) {
   *         // Custom implementation
   *       }
   *     })
   *   }
   * })
   * ```
   * @example Use all the options, add more arguments with a custom resolver
   *
   * ```
   * graphqlObjectType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field('users', {
   *       ...t.prismaType.users,
   *       args: {
   *         ...t.prismaType.users.args,
   *         newArg: stringArg()
   *       },
   *       resolve(root, args, ctx) {
   *         // Custom implementation
   *       }
   *     })
   *   }
   * })
   * ```
   */
  orignalType: ObjectTypeDetails<TypeName>
  useOriginalFields(
    inputFields: InputFieldsWithStar<'objectTypes', TypeName>[],
  ): void
  useOriginalFields(pickFields: PickInputField<'objectTypes', TypeName>): void
  useOriginalFields(filterFields: FilterInputField<'objectTypes', TypeName>): void
  /**
   * Pick, filter or customize the fields of the underlying object type
   * @param inputFields The fields you want to pick/filter/customize
   *
   * @example Exposes all fields
   *
   * t.useOriginalFields(['*'])
   *
   * @example Exposes only the `id` and `name` field
   *
   * t.useOriginalFields(['id', 'name'])
   *
   * @example Exposes only the `id` and `name` field (idem-potent with above example)
   *
   * t.useOriginalFields({ pick: ['id', 'name'] })
   *
   * @example Exposes all fields but the `id` and `name`
   *
   * t.useOriginalFields({ filter: ['id', 'name'] })
   *
   * @example Exposes the only the `users` field, and alias it to `customers`
   *
   * t.useOriginalFields([{ name: 'users', alias: 'customers' }])
   *
   * @example Exposes only the `users` field, and only the `first` and `last` args
   *
   * t.useOriginalFields([{ name: 'users', args: ['first', 'last'] }])
   *
   */
  useOriginalFields(inputFields: AddFieldInput<'objectTypes', TypeName>): void
}

export function graphqlObjectDefinitionBlock<TypeName extends string>(
  typeName: string,
  t: core.ObjectDefinitionBlock<TypeName>,
  originalType: Record<string, core.NexusOutputFieldConfig<string, string>>,
  schema: GraphQLSchema,
): GraphqlObjectDefinitionBlock<TypeName> {
  const definitionBlock = t as GraphqlObjectDefinitionBlock<TypeName>

  definitionBlock.orignalType = originalType
  definitionBlock.useOriginalFields = (inputFields: any) => {
    const graphqlType = schema.getType(typeName) as GraphQLObjectType
    const fields = getFields(inputFields, typeName, schema)

    graphqlType.getInterfaces().forEach(interfaceType => {
      definitionBlock.implements(interfaceType.name)
    })
    fields.forEach(field => {
      const aliasName = field.alias ? field.alias : field.name
      const fieldType = findGraphQLTypeField(typeName, field.name, schema)
      const { list, ...rest } = originalType[fieldType.name]
      const args = whitelistArgs(rest.args!, field.args)
      definitionBlock.field(aliasName, {
        ...rest,
        type: getTypeName(fieldType.type),
        list: list ? true : undefined,
        args,
      })
    })
  }

  return definitionBlock
}

export function prismaTypeObject(
  datamodelInfo: InternalDatamodelInfo,
  objectConfig: PrismaObjectTypeConfig<any>,
  builderConfig: GraphqlSchemaConfig,
) {
  const typeName = objectConfig.name
  const graphqlType = datamodelInfo.schema.getType(typeName)

  if (!isObjectType(graphqlType)) {
    throw new Error(
      `\
Must select a GraphQLObjectType, saw ${typeName} which is ${graphqlType}.
Are you trying to create a new type? Use \`objectType\` instead of \`prismaObjectType\`
`,
    )
  }

  return objectTypeFieldsToNexus(
    graphqlType,
  )
}
