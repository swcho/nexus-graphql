
import { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLEnumType, isObjectType, isEnumType, isInputObjectType } from 'graphql';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { findRootDirectory } from './config';
import { NEXUS_PRISMA_HEADER } from './header';
import { EOL } from 'os';
import { getObjectTypeFieldsName, getObjectTypeFieldsDetailsName, getInputObjectTypeName, getInputObjectTypeFieldsName, getEnumTypeName } from './schema.names';
import { renderObjectType } from './schema.renderobject';
import { renderInputType } from './schema.renderinput';
import { renderEnumType } from './schema.renderenum';

// https://github.com/graphql/graphql-js

function renderNexusPrismaTypes(
  schema: GraphQLSchema,
  prismaClientPath: string,
) {
  const types = Object.values(schema.getTypeMap())
  const objectTypes = types.filter(
    t => isObjectType(t) && !t.name.startsWith('__') && t.name !== 'Node',
  ) as GraphQLObjectType[]
  const inputTypes = types.filter(isInputObjectType)
  const enumTypes = types.filter(
    t => isEnumType(t) && !t.name.startsWith('__'),
  ) as GraphQLEnumType[]

  return `\
${NEXUS_PRISMA_HEADER}

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '${prismaClientPath}'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
${objectTypes
      .map(type => `      ${type.name}: ${getObjectTypeFieldsName(type)}`)
      .join(EOL)}
    }
    fieldsDetails: {
${objectTypes
      .map(type => `      ${type.name}: ${getObjectTypeFieldsDetailsName(type)}`)
      .join(EOL)}
    }
  }
  inputTypes: {
    fields: {
${inputTypes
      .map(
        type =>
          `      ${getInputObjectTypeName(type)}: ${getInputObjectTypeFieldsName(
            type,
          )}`,
      )
      .join(EOL)}
    }
  }
  enumTypes: {
${enumTypes
      .map(type => `    ${type.name}: ${getEnumTypeName(type)},`)
      .join(EOL)}
  }
}

${objectTypes.map(renderObjectType).join(EOL)}

${inputTypes.map(renderInputType).join(EOL)}

${enumTypes.map(renderEnumType).join(EOL)}
  `
}

export async function generateFromSchema(pathSchema: string, typePath: string, pathOutput: string) {
  // read schema and make GraphQLSchema
  const rootPath = findRootDirectory()
  const resolvedOutput = pathOutput.startsWith('/') ? pathOutput : join(rootPath, pathOutput)

  const source = readFileSync(pathSchema).toString();

  const schema = buildSchema(source);

  // 어디에서 사용하는지 현재로 알 수 없음.
  // const renderedDatamodel = renderDatamodelInfo(
  //   datamodel,
  //   schema,
  //   relative(rootPath, resolvedPrismaClientDir),
  //   jsMode ? 'module.exports =' : 'export default',
  // )

  //
  const nexusPrismaTypesPath = join(resolvedOutput, 'nexus-prisma.ts')
  const nexusPrismaTypes = renderNexusPrismaTypes(
    schema,
    typePath,
  )

  try {
    // Create the output directories if needed (mkdir -p)
    mkdirSync(resolvedOutput, { recursive: true })
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
  }

  writeFileSync(nexusPrismaTypesPath, nexusPrismaTypes)


  // Generate
}
