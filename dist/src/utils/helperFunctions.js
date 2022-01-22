"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateValueBesides = exports.conditional = exports.selectOne = void 0;
const config_1 = require("../config");
const chance_1 = require("./../chanceWrapper/chance");
const typeUtils_1 = require("./typeUtils");
const selectOne = (arrayOfGenerators) => {
    if (!(0, typeUtils_1.isArray)(arrayOfGenerators) || !arrayOfGenerators?.length) {
        throw new Error('Must pass array of length > 0 to Guppy - selectOne');
    }
    let generatorOrValue;
    if (arrayOfGenerators.length === 1) {
        generatorOrValue = arrayOfGenerators[0];
    }
    else {
        const index = chance_1.chance.integer({
            min: 0,
            max: arrayOfGenerators.length - 1,
        });
        generatorOrValue = arrayOfGenerators[index];
    }
    if ((0, typeUtils_1.isFunction)(generatorOrValue)) {
        return generatorOrValue();
    }
    return generatorOrValue;
};
exports.selectOne = selectOne;
const conditional = (expectation, condition) => {
    if (!(0, typeUtils_1.isBoolean)(condition))
        throw new Error('Must pass boolean to Guppy - conditional');
    if (condition)
        expectation();
};
exports.conditional = conditional;
const generateValueBesides = (generatorFunction, arrayOfValuesToAvoid, maxIterations = 5) => () => {
    if (!(0, typeUtils_1.isFunction)(generatorFunction)) {
        throw new Error('Must pass generatorFunction a function to Guppy - generateValueBesides');
    }
    if (!(0, typeUtils_1.isArray)(arrayOfValuesToAvoid) || !arrayOfValuesToAvoid?.length) {
        throw new Error('Must pass arrayOfValuesToAvoid an array of length > 0 to Guppy - generateValueBesides');
    }
    let iteration = 0;
    const maxNumberOfAttempts = maxIterations || (0, config_1.getConfig)().uniqueValueAttempts;
    while (true) {
        const potentialValue = generatorFunction();
        const matchesValueToAvoid = arrayOfValuesToAvoid.includes(potentialValue);
        if (!matchesValueToAvoid)
            return potentialValue;
        iteration += 1;
        if (iteration >= maxNumberOfAttempts) {
            throw new Error('Unable to generate values not included in avoidance array');
        }
    }
};
exports.generateValueBesides = generateValueBesides;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2hlbHBlckZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMsc0RBQW1EO0FBQ25ELDJDQUlxQjtBQUVkLE1BQU0sU0FBUyxHQUFHLENBQUksaUJBQXNCLEVBQUssRUFBRTtJQUN0RCxJQUFJLENBQUMsSUFBQSxtQkFBTyxFQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUU7UUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0tBQ3pFO0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQztJQUVyQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7U0FBTTtRQUNILE1BQU0sS0FBSyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUM7WUFDekIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFJLElBQUEsc0JBQVUsRUFBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQzlCLE9BQU8sZ0JBQWdCLEVBQUUsQ0FBQztLQUM3QjtJQUVELE9BQU8sZ0JBQWdCLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsU0FBUyxhQXNCcEI7QUFFSyxNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQXFCLEVBQUUsU0FBa0IsRUFBRSxFQUFFO0lBQ3JFLElBQUksQ0FBQyxJQUFBLHFCQUFTLEVBQUMsU0FBUyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3ZGLElBQUksU0FBUztRQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUhXLFFBQUEsV0FBVyxlQUd0QjtBQUVLLE1BQU0sb0JBQW9CLEdBQUcsQ0FDaEMsaUJBQTJCLEVBQzNCLG9CQUF5QixFQUN6QixhQUFhLEdBQUcsQ0FBQyxFQUNuQixFQUFFLENBQUMsR0FBTSxFQUFFO0lBQ0wsSUFBSSxDQUFDLElBQUEsc0JBQVUsRUFBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUM3RjtJQUVELElBQUksQ0FBQyxJQUFBLG1CQUFPLEVBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRTtRQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7S0FDNUc7SUFFRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsTUFBTSxtQkFBbUIsR0FBRyxhQUFhLElBQUksSUFBQSxrQkFBUyxHQUFFLENBQUMsbUJBQW1CLENBQUM7SUFFN0UsT0FBTyxJQUFJLEVBQUU7UUFDVCxNQUFNLGNBQWMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNDLE1BQU0sbUJBQW1CLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxtQkFBbUI7WUFBRSxPQUFPLGNBQWMsQ0FBQztRQUVoRCxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ2YsSUFBSSxTQUFTLElBQUksbUJBQW1CLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1NBQ2hGO0tBQ0o7QUFDTCxDQUFDLENBQUM7QUEzQk8sUUFBQSxvQkFBb0Isd0JBMkIzQiJ9