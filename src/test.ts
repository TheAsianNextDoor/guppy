import {
    getConfig,
    SetConfigArgType, 
} from './config';
import {
    parseSchemaForFunction,
    schemaParser, 
} from './utils/schemaParsingUtils';
import { getUniqueValue } from './utils/uniqueUtils';

type FunctionType = (...args: any) => any;
type ParsedObject<T> = { 
    [K in keyof T]: T[K] extends FunctionType 
        ? ReturnType<T[K]> 
        : T[K] extends Object 
            ? ParsedObject<T[K]> 
            : T[K] 
};
type ParsedSchema<T extends | Object | FunctionType | Array<T> | any> = T extends FunctionType 
    ? ReturnType<T>
    : T extends Array<T> 
        ? T[] 
        : T extends Object 
            ? ParsedObject<T> 
            : T;

const handleAggregatedErrors = (
    errorArray: Error[], 
    logger?: Function, 
    customError?: Function,
) => {
    if (logger) {
        errorArray.forEach((error) => logger(error));
    }

    if (customError) {
        customError(errorArray);
    }

    const constructMessage = `\n\t${errorArray.map((error) => error.message).join(',\n\t')}`;
    throw new Error(constructMessage);
};

export const test = async <T>(
    generatorSchema: T, 
    testFunction: (randomValue: ParsedSchema<T>) => Promise<void> | void,
    options?: SetConfigArgType,
) => {
    const {
        iterations,
        fastFail,
        selectUniqueValues,
        uniqueValueAttempts,
        logger,
        customError,
    } = {
        ...getConfig(),
        ...options, 
    };
    let iterationCount = 0;
    let errorCount = 0;
    const errorArray: Error[] = [];
    const previouslyChosenValues: any[] = [];
    const hasGeneratorFunctionInSchema = parseSchemaForFunction(generatorSchema);

    let depletedUniqueValues = false;
    const notifyDepletedUniques = () => {depletedUniqueValues = true;};
    
    while (iterationCount < iterations) {   
        try { 
            let generatedValue: ParsedSchema<T>;
            const shouldGenerateUnique = selectUniqueValues && hasGeneratorFunctionInSchema && !depletedUniqueValues;

            if (shouldGenerateUnique) {
                generatedValue = getUniqueValue(
                    generatorSchema, 
                    previouslyChosenValues, 
                    notifyDepletedUniques, 
                    uniqueValueAttempts,
                ) as ParsedSchema<T>;
            } else {
                generatedValue = schemaParser(generatorSchema) as ParsedSchema<T>;
            }

            await testFunction(generatedValue);
        } catch (error) {
            errorCount = errorCount += 1;

            if (fastFail) {
                throw error;
            } else {
                errorArray.push(error as Error);
            }
        }

        iterationCount = iterationCount += 1;
    }

    if (errorCount) {
        handleAggregatedErrors(errorArray, logger, customError);
    }
};
