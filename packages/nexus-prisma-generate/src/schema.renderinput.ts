import { GraphQLInputObjectType } from "graphql";
import { getInputObjectTypeName, getTSType, getInputObjectTypeFieldsName } from "./schema.names";
import { isRequired } from "./graphql";
import { EOL } from "os";

export function renderInputType(input: GraphQLInputObjectType) {
    const fields = Object.values(input.getFields())
    return `\
  export interface ${getInputObjectTypeName(input)} {
  ${fields
    .map(
      field =>
        `  ${field.name}${isRequired(input) ? '' : '?'}: ${getTSType(field)}`,
    )
    .join(EOL)}
  }
  export type ${getInputObjectTypeFieldsName(input)} =
    | Extract<keyof ${getInputObjectTypeName(input)}, string>
  ${fields.map(f => `  | { name: '${f.name}', alias?: string  } `).join(EOL)}
    `
  }