import { getConfig } from '../config';
import { chance } from './../chanceWrapper/chance';
import {
    isArray,
    isBoolean,
    isFunction, 
} from './typeUtils';

export const selectOne = (arrayOfGenerators: Array<any>) => () => {
    if (!isArray(arrayOfGenerators) || !arrayOfGenerators?.length) {
        throw new Error('Must pass array of length > 0 to Guppy - selectOne');
    }

    let generatorOrValue;

    if (arrayOfGenerators.length === 1) {
        generatorOrValue = arrayOfGenerators[0];
    } else {
        const index = chance.integer({
            min: 0,
            max: arrayOfGenerators.length - 1, 
        });
        generatorOrValue = arrayOfGenerators[index];
    }

    if (isFunction(generatorOrValue)) {
        return generatorOrValue();
    }

    return generatorOrValue;
};

export const conditional = (expectation: Function, condition: boolean) => {
    if (!isBoolean(condition)) throw new Error('Must pass boolean to Guppy - conditional');
    if (condition) expectation();
};

export const generateValueBesides = (
    generatorFunction: Function, 
    arrayOfValuesToAvoid: any[],
    maxIterations: number,
) => () => {
    if (!isFunction(generatorFunction)) {
        throw new Error('Must pass generatorFunction a function to Guppy - generateValueBesides');
    }

    if (!isArray(arrayOfValuesToAvoid) || !arrayOfValuesToAvoid?.length) {
        throw new Error('Must pass arrayOfValuesToAvoid an array of length > 0 to Guppy - generateValueBesides');
    }

    let iteration = 0;
    const maxNumberOfAttempts = maxIterations || getConfig().uniqueValueAttempts;

    while (true) {
        const potentialValue = generatorFunction();
        const matchesValueToAvoid = arrayOfValuesToAvoid.includes(potentialValue);

        if (!matchesValueToAvoid) return potentialValue;
        
        iteration += 1;
        if (iteration >= maxNumberOfAttempts) {
            throw new Error('Unable to generate values not included in avoidance array');
        }
    }
};