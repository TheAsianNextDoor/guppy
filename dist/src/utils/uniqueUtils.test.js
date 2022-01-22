"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const sinon_1 = require("sinon");
const chance_1 = require("../chanceWrapper/chance");
const uniqueUtils_1 = require("./uniqueUtils");
const noOp = () => { };
describe('getUniqueValue', () => {
    it('handle previously chosen values length zero', () => {
        const previouslyChosenValues = [];
        const functionSpy = (0, sinon_1.spy)();
        const actual = (0, uniqueUtils_1.getUniqueValue)(1, previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(actual, 1);
        assert_1.default.deepEqual(previouslyChosenValues, [1]);
        assert_1.default.equal(functionSpy.notCalled, true);
    });
    it('handle previously chosen values length not zero', () => {
        const previouslyChosenValues = [
            0,
            1,
        ];
        const functionSpy = (0, sinon_1.spy)();
        const actual = (0, uniqueUtils_1.getUniqueValue)((0, chance_1.integer)({
            min: 0,
            max: 2,
        }), previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(actual, 2);
        assert_1.default.deepEqual(previouslyChosenValues, [
            0,
            1,
            2,
        ]);
        assert_1.default.equal(functionSpy.notCalled, true);
    });
    it('reached max iterations', () => {
        const previouslyChosenValues = [
            0,
            1,
            2,
        ];
        const functionSpy = (0, sinon_1.spy)();
        (0, uniqueUtils_1.getUniqueValue)((0, chance_1.integer)({
            min: 0,
            max: 2,
        }), previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(functionSpy.calledOnce, true);
    });
});
