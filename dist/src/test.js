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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUdrQjtBQUNsQixtRUFHb0M7QUFDcEMscURBQXFEO0FBa0JyRCxNQUFNLHNCQUFzQixHQUFHLENBQzNCLFVBQW1CLEVBQ25CLE1BQWlCLEVBQ2pCLFdBQXNCLEVBQ3hCLEVBQUU7SUFDQSxJQUFJLE1BQU0sRUFBRTtRQUNSLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsSUFBSSxXQUFXLEVBQUU7UUFDYixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDM0I7SUFFRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3pGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFSyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3JCLGVBQWtCLEVBQ2xCLFlBQW9FLEVBQ3BFLE9BQTBCLEVBQzVCLEVBQUU7SUFDQSxNQUFNLEVBQ0YsVUFBVSxFQUNWLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLE1BQU0sRUFDTixXQUFXLEdBQ2QsR0FBRztRQUNBLEdBQUcsSUFBQSxrQkFBUyxHQUFFO1FBQ2QsR0FBRyxPQUFPO0tBQ2IsQ0FBQztJQUNGLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkIsTUFBTSxVQUFVLEdBQVksRUFBRSxDQUFDO0lBQy9CLE1BQU0sc0JBQXNCLEdBQVUsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sNEJBQTRCLEdBQUcsSUFBQSwyQ0FBc0IsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUU3RSxJQUFJLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNqQyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRSxHQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVuRSxPQUFPLGNBQWMsR0FBRyxVQUFVLEVBQUU7UUFDaEMsSUFBSTtZQUNBLElBQUksY0FBK0IsQ0FBQztZQUNwQyxNQUFNLG9CQUFvQixHQUFHLGtCQUFrQixJQUFJLDRCQUE0QixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFFekcsSUFBSSxvQkFBb0IsRUFBRTtnQkFDdEIsY0FBYyxHQUFHLElBQUEsNEJBQWMsRUFDM0IsZUFBZSxFQUNmLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsbUJBQW1CLENBQ0gsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxjQUFjLEdBQUcsSUFBQSxpQ0FBWSxFQUFDLGVBQWUsQ0FBb0IsQ0FBQzthQUNyRTtZQUVELE1BQU0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUU3QixJQUFJLFFBQVEsRUFBRTtnQkFDVixNQUFNLEtBQUssQ0FBQzthQUNmO2lCQUFNO2dCQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBYyxDQUFDLENBQUM7YUFDbkM7U0FDSjtRQUVELGNBQWMsR0FBRyxjQUFjLElBQUksQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxVQUFVLEVBQUU7UUFDWixzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQzNEO0FBQ0wsQ0FBQyxDQUFDO0FBMURXLFFBQUEsSUFBSSxRQTBEZiJ9