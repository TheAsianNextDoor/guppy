import { typeCheck } from 'type-check';

export const isFunction = (variable: unknown): variable is Function => typeCheck('Function', variable);
export const isObject = (variable: unknown): variable is object => typeCheck('Object', variable);
export const isArray = (variable: unknown): variable is any[] => typeCheck('Array', variable);
export const isError = (variable: unknown): variable is Error => typeCheck('Error', variable);
export const isBoolean = (variable: unknown): variable is boolean => typeCheck('Boolean', variable);