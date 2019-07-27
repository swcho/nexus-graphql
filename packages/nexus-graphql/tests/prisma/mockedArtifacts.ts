import datamodelInfo from './nexus-prisma'
import { makeGraphqlSchema } from '../../src'
import { buildClientSchema } from 'graphql'
import { InternalDatamodelInfo } from '../../src/types'

export function mockSchema(types: any) {
  return makeGraphqlSchema({
    types,
    outputs: {
      schema: false,
      typegen: false,
    },
    wrapperOptions: {
      client: null,
      datamodelInfo,
    },
  })
}

export const mockedDatamodelInfo: InternalDatamodelInfo = {
  ...datamodelInfo,
  schema: buildClientSchema(datamodelInfo.schema as any),
}
