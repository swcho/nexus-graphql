import { NexusGenObjectNames, NexusGenFieldTypes } from "./generated/nexus";
import { ResultValue, GetGen2, GetGen3 } from "nexus/dist/core";

type keys = keyof NexusGen;

type FieldFinalType = NexusGen['fieldFinalTypes'];

type Q = GetGen3<'fieldFinalTypes', 'Query', 'orders'>

type FinalResultValue<
  TypeName extends string,
  FieldName extends string
> = GetGen3<"fieldFinalTypes", TypeName, FieldName>;

type FinalResultValueNonArray<
  TypeName extends string,
  FieldName extends string
> = FinalResultValue<TypeName, FieldName> extends infer A
  ? A extends (infer B)[]
    ? B
    : A
  : never;

type finaleResultValue = FinalResultValueNonArray<'Query', 'orders'>;

type keyOfFinalResultValue = keyof finaleResultValue;

type selectables = keyOfFinalResultValue[];

const selectablesTest: selectables = ['customer', 'date'];

type subSelectables<T extends keyOfFinalResultValue> = {
  name: T;
  select: (keyof finaleResultValue[T])[];
} 

const subSelectablesTest: subSelectables<'customer'> = {
  name: 'customer',
  select: ['age'],
}

function subSelect<T, K extends keyof T>(selected: K[]) {

}

type subSelectables2<T, K extends keyof T> = {
  name: K;
  select: (keyof T[K])[];
} 

type SelectMap<T> = {
  [K in keyof T]?: null | SelectMap<T[K]>;
}

function select<T = finaleResultValue>(selected: SelectMap<T>) {
  return selected;
}

// type test = Pick

const ret = select<finaleResultValue>({
  'date': null,
  'customer': {
    'age': null,
  },
})
