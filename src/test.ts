import {
    getConfig,
    SetConfigArgType, 
} from './config';
import {
    parseSchemaForFunction,
    schemaParser, 
} from './utils/schemaParsingUtils';
import { getUniqueValue } from './utils/uniqueUtils';

type TestType = (
    generatorSchema: any, 
    testFunction: TestFunctionType, 
    options?: SetConfigArgType
) => void;

type TestFunctionType = (randomValues: any) => Promise<void> | void;

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

export const test: TestType = async (
    generatorSchema, 
    testFunction,
    options,
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
    const errorArray = [];
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
        } catch (error: any) {
            errorCount = errorCount += 1;

            if (fastFail) {
                throw error;
            } else {
                errorArray.push(error);
            }
        }

        iterationCount = iterationCount += 1;
    }

    if (errorCount) {
        handleAggregatedErrors(errorArray, logger, customError);
    }
};
