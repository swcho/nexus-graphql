import { buildClientSchema, GraphQLNamedType } from 'graphql'
import { core } from 'nexus'
import { graphqlTypeToNexus } from './graphqlToNexus'
import { GraphqlSchemaConfig, InternalDatamodelInfo } from './types'

export class GraphqlSchemaBuilder extends core.SchemaBuilder {
  private datamodelInfo: InternalDatamodelInfo

  constructor(protected config: GraphqlSchemaConfig) {
    super(config)

    this.datamodelInfo = {
      ...this.config.wrapperOptions.datamodelInfo,
      schema: buildClientSchema(this.config.wrapperOptions.datamodelInfo.schema),
    }
  }

  protected missingType(typeName: string): GraphQLNamedType {
    const datamodelInfo = this.getDatamodelInfo()
    const type = datamodelInfo.schema.getType(typeName)

    if (type) {
      return graphqlTypeToNexus(
        this,
        type,
      )
    }

    return super.missingType(typeName)
  }

  public getConfig() {
    return this.config
  }

  public getDatamodelInfo() {
    return this.datamodelInfo
  }
}

export function isGraphqlSchemaBuilder(obj: any): obj is GraphqlSchemaBuilder {
  return obj && obj instanceof GraphqlSchemaBuilder
}
