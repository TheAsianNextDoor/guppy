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
const happyBirthday = (num) => {
    if (num < 1 || num > 120) {
        throw new Error('Not a valid birthday');
    }
    return num + 1;
};
// config that produces non-failing results
const goodConfig = () => Math.floor(Math.random() * 120) + 1;
// config that produces failing results
const badConfig = (0, helperFunctions_1.selectOne)([
    (0, chance_1.integer)({ max: 0 }),
    (0, chance_1.integer)({ min: 121 }),
]);
it('Happy Birthday Passing', () => {
    return (0, test_1.test)(goodConfig, (data) => {
        const expected = data + 1;
        const actual = happyBirthday(data);
        assert_1.default.equal(actual, expected);
    });
});
it('Happy Birthday failing', () => {
    return (0, test_1.test)(badConfig, (data) => {
        assert_1.default.throws(() => happyBirthday(data));
    });
});
