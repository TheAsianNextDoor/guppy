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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvdW5pcXVlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLDZEQUFvRDtBQUVwRCxNQUFNLGlCQUFpQixHQUFHLENBQ3RCLHNCQUEyQixFQUMzQixrQkFBcUIsRUFDZCxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUU7SUFDL0MsSUFBSTtRQUNBLGdCQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFQSxNQUFNLGNBQWMsR0FBRyxDQUMxQixlQUF3QixFQUN4QixzQkFBaUMsRUFDakMscUJBQStCLEVBQy9CLGFBQXFCLEVBQ3ZCLEVBQUU7SUFDQSxJQUFJLGNBQXVCLENBQUM7SUFDNUIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7UUFDaEMsY0FBYyxHQUFHLElBQUEsaUNBQVksRUFBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUMsT0FBTyxjQUFjLENBQUM7S0FDekI7SUFFRCxPQUFPLElBQUksRUFBRTtRQUNULGNBQWMsR0FBRyxJQUFBLGlDQUFZLEVBQUMsZUFBZSxDQUFDLENBQUM7UUFFL0MsSUFBSSxVQUFVLEdBQUcsYUFBYSxFQUFFO1lBQzVCLHFCQUFxQixFQUFFLENBQUM7WUFDeEIsT0FBTyxjQUFjLENBQUM7U0FDekI7UUFFRCxNQUFNLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNyQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsT0FBTyxjQUFjLENBQUM7U0FDekI7UUFDRCxVQUFVLElBQUksQ0FBQyxDQUFDO0tBQ25CO0FBQ0wsQ0FBQyxDQUFDO0FBaENXLFFBQUEsY0FBYyxrQkFnQ3pCIn0=