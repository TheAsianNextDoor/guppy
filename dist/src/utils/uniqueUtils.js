"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueValue = void 0;
const assert_1 = __importDefault(require("assert"));
const schemaParsingUtils_1 = require("./schemaParsingUtils");
const determineIfUnique = (previouslyChosenValues, potentialSelection) => previouslyChosenValues.some((value) => {
    try {
        assert_1.default.deepEqual(potentialSelection, value);
        return true;
    }
    catch (e) {
        return false;
    }
});
const getUniqueValue = (generatorSchema, previouslyChosenValues, notifyDepletedUniques, maxIterations) => {
    let generatedValue;
    let iterations = 0;
    if (!previouslyChosenValues.length) {
        generatedValue = (0, schemaParsingUtils_1.schemaParser)(generatorSchema);
        previouslyChosenValues.push(generatedValue);
        return generatedValue;
    }
    while (true) {
        generatedValue = (0, schemaParsingUtils_1.schemaParser)(generatorSchema);
        if (iterations > maxIterations) {
            notifyDepletedUniques();
            return generatedValue;
        }
        const isAlreadyUsedValue = determineIfUnique(previouslyChosenValues, generatedValue);
        if (!isAlreadyUsedValue) {
            previouslyChosenValues.push(generatedValue);
            return generatedValue;
        }
        iterations += 1;
    }
};
exports.getUniqueValue = getUniqueValue;
