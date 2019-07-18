import { GraphQLSchema, isObjectType } from 'graphql'
import { core } from 'nexus'
import { GraphqlExtendTypeConfig } from '../definitions/extendType'
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

export interface GraphqlExtendTypeBlock<TypeName extends string>
  extends core.OutputDefinitionBlock<TypeName> {
  /**
   * Contains all the options to use native `nexus` methods with `nexus-graphql` generated schema
   *
   * @example Pass in all the options as-is
   * ```
   * graphqlExtendType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field(
   *       'users',
   *       t.originalType.users
   *     )
   *   }
   * })
   * ```
   * @example Use all the options, but overide the resolver
   *
   * ```
   * graphqlExtendType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field('users', {
   *       ...t.originalType.users,
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
   * graphqlExtendType({
   *   name: 'Query',
   *   definition(t) {
   *     t.field('users', {
   *       ...t.originalType.users,
   *       args: {
   *         ...t.originalType.users.args,
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
  originalType: ObjectTypeDetails<TypeName>
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

export function graphqlExtendTypeBlock<TypeName extends string>(
  typeName: string,
  t: core.OutputDefinitionBlock<TypeName>,
  originalType: Record<string, core.NexusOutputFieldConfig<string, string>>,
  schema: GraphQLSchema,
): GraphqlExtendTypeBlock<TypeName> {
  const extendBlock = t as GraphqlExtendTypeBlock<TypeName>

  extendBlock.originalType = originalType
  extendBlock.useOriginalFields = (inputFields: any) => {
    const fields = getFields(inputFields, typeName, schema)

    fields.forEach(field => {
      const aliasName = field.alias ? field.alias : field.name
      const fieldType = findGraphQLTypeField(typeName, field.name, schema)
      const { list, ...rest } = originalType[fieldType.name]
      const args = whitelistArgs(rest.args!, field.args)
      extendBlock.field(aliasName, {
        ...rest,
        type: getTypeName(fieldType.type),
        list: list ? true : undefined,
        args,
      })
    })
  }

  return extendBlock
}

export function graphqlTypeExtend(
  datamodelInfo: InternalDatamodelInfo,
  objectConfig: GraphqlExtendTypeConfig<any>,
  builderConfig: GraphqlSchemaConfig,
) {
  const typeName = objectConfig.type
  const graphqlType = datamodelInfo.schema.getType(typeName)

  if (!isObjectType(graphqlType)) {
    throw new Error(
      `Must select a GraphQLObjectType, saw ${typeName} which is ${graphqlType}`,
    )
  }

  return objectTypeFieldsToNexus(
    graphqlType,
  )
}
