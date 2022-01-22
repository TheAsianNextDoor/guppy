"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const config_1 = require("./config");
const schemaParsingUtils_1 = require("./utils/schemaParsingUtils");
const uniqueUtils_1 = require("./utils/uniqueUtils");
const handleAggregatedErrors = (errorArray, logger, customError) => {
    if (logger) {
        errorArray.forEach((error) => logger(error));
    }
    if (customError) {
        customError(errorArray);
    }
    const constructMessage = `\n\t${errorArray.map((error) => error.message).join(',\n\t')}`;
    throw new Error(constructMessage);
};
const test = async (generatorSchema, testFunction, options) => {
    const { iterations, fastFail, selectUniqueValues, uniqueValueAttempts, logger, customError, } = {
        ...(0, config_1.getConfig)(),
        ...options,
    };
    let iterationCount = 0;
    let errorCount = 0;
    const errorArray = [];
    const previouslyChosenValues = [];
    const hasGeneratorFunctionInSchema = (0, schemaParsingUtils_1.parseSchemaForFunction)(generatorSchema);
    let depletedUniqueValues = false;
    const notifyDepletedUniques = () => { depletedUniqueValues = true; };
    while (iterationCount < iterations) {
        try {
            let generatedValue;
            const shouldGenerateUnique = selectUniqueValues && hasGeneratorFunctionInSchema && !depletedUniqueValues;
            if (shouldGenerateUnique) {
                generatedValue = (0, uniqueUtils_1.getUniqueValue)(generatorSchema, previouslyChosenValues, notifyDepletedUniques, uniqueValueAttempts);
            }
            else {
                generatedValue = (0, schemaParsingUtils_1.schemaParser)(generatorSchema);
            }
            await testFunction(generatedValue);
        }
        catch (error) {
            errorCount = errorCount += 1;
            if (fastFail) {
                throw error;
            }
            else {
                errorArray.push(error);
            }
        }
        iterationCount = iterationCount += 1;
    }
    if (errorCount) {
        handleAggregatedErrors(errorArray, logger, customError);
    }
};
exports.test = test;
