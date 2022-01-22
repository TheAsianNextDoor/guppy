import {
    getConfig,
    SetConfigArgType, 
} from './config';
import {
    parseSchemaForFunction,
    schemaParser, 
} from './utils/schemaParsingUtils';
import { getUniqueValue } from './utils/uniqueUtils';

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

export const test = async (
    generatorSchema: unknown, 
    testFunction: (randomValue: any) => Promise<void> | void,
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
            let generatedValue;
            const shouldGenerateUnique = selectUniqueValues && hasGeneratorFunctionInSchema && !depletedUniqueValues;

            if (shouldGenerateUnique) {
                generatedValue = getUniqueValue(
                    generatorSchema, 
                    previouslyChosenValues, 
                    notifyDepletedUniques, 
                    uniqueValueAttempts,
                );
            } else {
                generatedValue = schemaParser(generatorSchema);
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
