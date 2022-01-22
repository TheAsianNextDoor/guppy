"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const chance_1 = require("../src/chanceWrapper/chance");
const test_1 = require("../src/test");
const helperFunctions_1 = require("../src/utils/helperFunctions");
// function being tested
const specialStringFromNumber = (number) => {
    if (number === 0) {
        return `${number} is special`;
    }
    if (number === 100) {
        return `${number} is very special`;
    }
    return `${number} is not special`;
};
const defaultConfig = (0, helperFunctions_1.generateValueBesides)((0, chance_1.integer)({
    min: -120,
    max: 120,
}), [
    0,
    100,
]);
const specialConfig = (0, helperFunctions_1.selectOne)([
    0,
    100,
]);
it('Default Case', () => {
    return (0, test_1.test)(defaultConfig, (data) => {
        const expected = `${data} is not special`;
        const actual = specialStringFromNumber(data);
        assert_1.default.equal(actual, expected);
    });
});
it('Special Case', () => {
    return (0, test_1.test)(specialConfig, (data) => {
        const actual = specialStringFromNumber(data);
        (0, helperFunctions_1.conditional)(() => assert_1.default.equal(actual, `${data} is special`), data === 0);
        (0, helperFunctions_1.conditional)(() => assert_1.default.equal(actual, `${data} is very special`), data === 100);
    });
});
