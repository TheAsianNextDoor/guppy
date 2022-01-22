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
