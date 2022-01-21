import { typeCheck } from 'type-check';

export const isFunction = (variable: any) => typeCheck('Function', variable);
export const isObject = (variable: any) => typeCheck('Object', variable);
export const isArray = (variable: any) => typeCheck('Array', variable);
export const isError = (variable: any) => typeCheck('Error', variable);
export const isBoolean = (variable: any) => typeCheck('Boolean', variable);