"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const chance_1 = require("../chanceWrapper/chance");
const helperFunctions_1 = require("./helperFunctions");
const noOp = () => { };
describe('selectOne', () => {
    it('error handling', () => {
        assert_1.default.throws((0, helperFunctions_1.selectOne)(2));
        assert_1.default.throws((0, helperFunctions_1.selectOne)('hello'));
        assert_1.default.throws((0, helperFunctions_1.selectOne)(false));
        assert_1.default.throws((0, helperFunctions_1.selectOne)([]));
        assert_1.default.throws((0, helperFunctions_1.selectOne)({ a: 'b' }));
    });
    it('array of length 1', () => {
        const actual = (0, helperFunctions_1.selectOne)([1])();
        assert_1.default.equal(actual, 1);
    });
    it('array of length 1 primitive', () => {
        const actual = (0, helperFunctions_1.selectOne)([1])();
        assert_1.default.equal(actual, 1);
    });
    it('array of length greater than 1 primitive', () => {
        const actual = (0, helperFunctions_1.selectOne)([
            1,
            2,
        ])();
        const isOneOrTwo = (num) => num === 1 || num === 2;
        assert_1.default.equal(true, isOneOrTwo(actual));
    });
    it('array of length 1 function', () => {
        const actual = (0, helperFunctions_1.selectOne)([(0, chance_1.integer)({
                min: 1,
                max: 1,
            })])();
        assert_1.default.equal(actual, 1);
    });
    it('array of length greater than 1 function', () => {
        const actual = (0, helperFunctions_1.selectOne)([
            (0, chance_1.integer)({
                min: 1,
                max: 1,
            }),
            (0, chance_1.integer)({
                min: 1,
                max: 1,
            }),
        ])();
        const isOneOrTwo = (num) => num === 1 || num === 2;
        assert_1.default.equal(true, isOneOrTwo(actual));
    });
    it('array of functions/primitives', () => {
        const actual = (0, helperFunctions_1.selectOne)([
            (0, chance_1.integer)({
                min: 1,
                max: 1,
            }),
            1,
        ])();
        const isOneOrTwo = (num) => num === 1 || num === 2;
        assert_1.default.equal(true, isOneOrTwo(actual));
    });
});
describe('conditional', () => {
    it('error handling', () => {
        assert_1.default.throws(() => (0, helperFunctions_1.conditional)(noOp, 2));
        assert_1.default.throws(() => (0, helperFunctions_1.conditional)(noOp, 'hello'));
        assert_1.default.throws(() => (0, helperFunctions_1.conditional)(noOp, []));
        assert_1.default.throws(() => (0, helperFunctions_1.conditional)(noOp, { a: 'b' }));
    });
    it('true case', () => {
        let functionCalledFlag = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const funcToCall = () => { functionCalledFlag = true; };
        (0, helperFunctions_1.conditional)(funcToCall, true);
        assert_1.default.equal(true, functionCalledFlag);
    });
    it('false case', () => {
        let functionCalledFlag = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const funcNotToCall = () => { functionCalledFlag = true; };
        (0, helperFunctions_1.conditional)(funcNotToCall, false);
        assert_1.default.equal(false, functionCalledFlag);
    });
});
describe('generateValueBesides', () => {
    it('error handling first arg', () => {
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(2));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)('hello'));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(false));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)([]));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)({ a: 'b' }));
    });
    it('error handling second arg', () => {
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(noOp, 2));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(noOp, 'hello'));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(noOp, false));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(noOp, []));
        assert_1.default.throws((0, helperFunctions_1.generateValueBesides)(noOp, { a: 'b' }));
    });
    it('error when max iterations', () => {
        const generatorFunc = (0, helperFunctions_1.generateValueBesides)((0, chance_1.integer)({
            min: 0,
            max: 1,
        }), [
            0,
            1,
        ], { uniqueValueAttempts: 20 });
        assert_1.default.throws(generatorFunc);
    });
    it('returns value besides 1', () => {
        const actual = (0, helperFunctions_1.generateValueBesides)((0, chance_1.integer)({
            min: 0,
            max: 1,
        }), [0], { uniqueValueAttempts: 20 })();
        assert_1.default.equal(actual, 1);
    });
});
