import { GraphQLSchema, isInputObjectType } from 'graphql'
import { core } from 'nexus'
import { GraphqlInputObjectTypeConfig } from '../definitions/inputObjectType'
import { findGraphQLTypeField, getTypeName } from '../graphql'
import { inputObjectTypeFieldsToNexus } from '../graphqlToNexus/inputObjectType'
import {
  AddFieldInput,
  FilterInputField,
  InputFieldsWithStar,
  PickInputField,
} from '../types'
import { getFields } from '../utils'

export interface GraphqlInputDefinitionBlock<TypeName extends string>
  extends core.InputDefinitionBlock<TypeName> {
  useOriginalFields(inputFields: InputFieldsWithStar<'inputTypes', TypeName>[]): void
  useOriginalFields(pickFields: PickInputField<'inputTypes', TypeName>): void
  useOriginalFields(filterFields: FilterInputField<'inputTypes', TypeName>): void
  /**
   * Pick, filter or customize the fields of the underlying input object type
   * @param inputFields The fields you want to pick/filter or customize
   *
   * @example Exposes all fields
   *
   * t.useOriginalFields(['*'])
   *
   * @example Exposes only the `first` and `last` field
   *
   * t.useOriginalFields(['first', 'last'])
   *
   * @example Exposes only the `first` and `last` field (idem-potent with above example)
   *
   * t.useOriginalFields({ pick: ['first', 'last'] })
   *
   * @example Exposes all fields but the `first` and `last`
   *
   * t.useOriginalFields({ filter: ['first', 'last'] })
   *
   */
  useOriginalFields(inputFields: AddFieldInput<'inputTypes', TypeName>): void
}

export function graphqlInputDefinitionBlock<TypeName extends string>(
  typeName: string,
  t: core.InputDefinitionBlock<TypeName> | core.OutputDefinitionBlock<TypeName>,
  originalType: Record<string, core.NexusInputFieldConfig<string, string>>,
  schema: GraphQLSchema,
): GraphqlInputDefinitionBlock<TypeName> {
  const definitionBlock = t as GraphqlInputDefinitionBlock<TypeName>

  definitionBlock.useOriginalFields = (inputFields: any) => {
    const fields = getFields(inputFields, typeName, schema)

    fields.forEach(field => {
      const aliasName = field.alias ? field.alias : field.name
      const fieldType = findGraphQLTypeField(typeName, field.name, schema)
      const { list, ...rest } = originalType[field.name]

      definitionBlock.field(aliasName, {
        ...rest,
        type: getTypeName(fieldType.type),
        list: list ? true : undefined,
      })
    })
  }

  return definitionBlock
}

export function graphqlTypeInputObject(
  schema: GraphQLSchema,
  inputObjectConfig: GraphqlInputObjectTypeConfig<any>,
) {
  const typeName = inputObjectConfig.name
  const graphqlType = schema.getType(typeName)

  if (!isInputObjectType(graphqlType)) {
    throw new Error(
      `\
Must select a GraphQLInputObjectType, saw ${typeName} which is ${graphqlType}.
Are you trying to create a new type? Use \`inputObjectType\` instead of \`graphqlInputObjectType\`
`,
    )
  }

  return inputObjectTypeFieldsToNexus(graphqlType)
}
