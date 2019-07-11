import { GraphQLEnumType } from "graphql";
import { getEnumTypeName } from "./schema.names";
import { EOL } from "os";

export function renderEnumType(enumType: GraphQLEnumType): string {
  return `\
export type ${getEnumTypeName(enumType)} =
${enumType
  .getValues()
  .map(value => `  | '${value.name}'`)
  .join(EOL)}
  `
}
