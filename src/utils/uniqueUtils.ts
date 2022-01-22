import assert from 'assert';

import { schemaParser } from './schemaParsingUtils';

const determineIfUnique = <T, V>(
    previouslyChosenValues: T[], 
    potentialSelection: V,
): boolean => previouslyChosenValues.some((value: T) => {
        try {
            assert.deepEqual(potentialSelection, value);
            return true;
        } catch (e) {
            return false;
        }
    });

export const getUniqueValue = (
    generatorSchema: unknown, 
    previouslyChosenValues: unknown[], 
    notifyDepletedUniques: Function,
    maxIterations: number,
) => {
    let generatedValue: unknown;
    let iterations = 0;

    if (!previouslyChosenValues.length) {
        generatedValue = schemaParser(generatorSchema);
        previouslyChosenValues.push(generatedValue);

        return generatedValue;
    }

    while (true) {
        generatedValue = schemaParser(generatorSchema);
        
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