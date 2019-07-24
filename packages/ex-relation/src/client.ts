import { NexusGenObjectNames, NexusGenFieldTypes } from "./generated/nexus";
import { ResultValue, GetGen2 } from "nexus/dist/core";

declare global {
  interface NexusGen {}
}

// export interface NexusGenTypesShape {
//   objectNames: string;
// }

// type NexusShapeKeys = keyof NexusGenTypesShape;

// export type GetGen<
//   K extends NexusShapeKeys,
//   Fallback = any
// > = NexusWrapperGen extends infer GenTypes
//   ? GenTypes extends NexusGenTypesShape
//     ? GenTypes[K]
//     : Fallback
//   : Fallback

// export type GetGen2<
//   K extends NexusShapeKeys,
//   K2 extends keyof NexusGenTypesShape[K]
// > = NexusWrapperGen extends infer GenTypes
//   ? GenTypes extends NexusGenTypesShape
//     ? K extends keyof GenTypes
//       ? K2 extends keyof GenTypes[K]
//         ? GenTypes[K][K2]
//         : any
//       : any
//     : any
//   : any

// export type GetGen3<
//   K extends NexusShapeKeys,
//   K2 extends Extract<keyof NexusGenTypesShape[K], string>,
//   K3 extends Extract<keyof NexusGenTypesShape[K][K2], string>
// > = NexusWrapperGen extends infer GenTypes
//   ? GenTypes extends NexusGenTypesShape
//     ? K extends keyof GenTypes
//       ? K2 extends keyof GenTypes[K]
//         ? K3 extends keyof GenTypes[K][K2]
//           ? GenTypes[K][K2][K3]
//           : any
//         : any
//       : any
//     : any
//   : any

type QueryFields = keyof NexusGenFieldTypes['Query'];

type QueryFieldReturn<Q extends QueryFields> = NexusGenFieldTypes['Query'][Q];

type QueryParams<Q extends QueryFields> = {
  name: Q;
  select: (t: ResultValueNonArray<'Query', Q>) => void;
}

// type test = ResultValue<'Query', 'customers'>;

// export declare type ResultValue<
//   TypeName extends string,
//   FieldName extends string
// > = GetGen3<"fieldTypes", TypeName, FieldName>;

export declare type ReturnValue<
  TypeName extends string,
> = GetGen2<"fieldTypes", TypeName>;


type ReturnValueNonArray<
  TypeName extends string,
  FieldName extends string
> = ResultValue<TypeName, FieldName> extends infer A
  ? A extends (infer B)[]
    ? B
    : A
  : never;

type ResultValueNonArray<
  TypeName extends string,
  FieldName extends string
> = ResultValue<TypeName, FieldName> extends infer A
  ? A extends (infer B)[]
    ? B
    : A
  : never;

type test2 = ResultValueNonArray<'Query', 'orders'>;
export const query = <Q extends QueryFields>(params: QueryParams<Q>) => {

}

type CustomerReturn = QueryFieldReturn<'customers'>

query({
  name: 'orders',
  select: (t) => {
    t.customerId
    // return t({
    //   'xxx': {},
    //   'yyy': {
    //     'zzz'
    //   }
    // });
  }
})