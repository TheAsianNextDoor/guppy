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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyRnVuY3Rpb25zLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaGVscGVyRnVuY3Rpb25zLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUE2RDtBQUM3RCxjQUFjOzs7OztBQUVkLG9EQUE0QjtBQUU1QixvREFBa0Q7QUFDbEQsdURBSTJCO0FBRTNCLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUV0QixRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtJQUV2QixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQVMsRUFBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUEsMkJBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVoQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO1FB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