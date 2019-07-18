declare global {
  interface NexusWrapperGen {}
}

export type GraphqlShapeKeys = 'objectTypes' | 'inputTypes' | 'enumTypes'

export interface GraphqlGenTypesShape {
  objectTypes: {
    fields: Record<string, any>
    fieldsDetails: Record<string, any>
  }
  inputTypes: {
    fields: Record<string, any>
  }
  enumTypes: Record<string, any>
}

export type GetGen<
  K extends GraphqlShapeKeys,
  Fallback = any
> = NexusWrapperGen extends infer GenTypes
  ? GenTypes extends GraphqlGenTypesShape
    ? GenTypes[K]
    : Fallback
  : Fallback

export type GetGen2<
  K extends GraphqlShapeKeys,
  K2 extends keyof GraphqlGenTypesShape[K]
> = NexusWrapperGen extends infer GenTypes
  ? GenTypes extends GraphqlGenTypesShape
    ? K extends keyof GenTypes
      ? K2 extends keyof GenTypes[K]
        ? GenTypes[K][K2]
        : any
      : any
    : any
  : any

export type GetGen3<
  K extends GraphqlShapeKeys,
  K2 extends Extract<keyof GraphqlGenTypesShape[K], string>,
  K3 extends Extract<keyof GraphqlGenTypesShape[K][K2], string>
> = NexusWrapperGen extends infer GenTypes
  ? GenTypes extends GraphqlGenTypesShape
    ? K extends keyof GenTypes
      ? K2 extends keyof GenTypes[K]
        ? K3 extends keyof GenTypes[K][K2]
          ? GenTypes[K][K2][K3]
          : any
        : any
      : any
    : any
  : any
