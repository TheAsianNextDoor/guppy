"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const schemaParsingUtils_1 = require("./schemaParsingUtils");
const noOp = () => { };
describe('parseArray', () => {
    it('handles function', () => {
        const actual = (0, schemaParsingUtils_1.parseArray)([
            () => 'hello',
            () => 'world',
        ]);
        (0, assert_1.default)(actual, [
            'hello',
            'world',
        ]);
    });
    it('handles array', () => {
        const actual = (0, schemaParsingUtils_1.parseArray)([
            [() => 'hello'],
            [() => 'world'],
        ]);
        (0, assert_1.default)(actual, [
            ['hello'],
            ['world'],
        ]);
    });
    it('handles object', () => {
        const actual = (0, schemaParsingUtils_1.parseArray)([{ hello: 'world' }]);
        (0, assert_1.default)(actual, [{ hello: 'world' }]);
    });
    it('handles primitives', () => {
        const actual = (0, schemaParsingUtils_1.parseArray)([
            1,
            'boy',
            false,
        ]);
        (0, assert_1.default)(actual, [
            1,
            'boy',
            false,
        ]);
    });
});
describe('parseObject', () => {
    it('handles function', () => {
        const actual = (0, schemaParsingUtils_1.parseObject)({ hello: () => 'world' });
        assert_1.default.deepEqual(actual, { hello: 'world' });
    });
    it('handles array', () => {
        const actual = (0, schemaParsingUtils_1.parseObject)({ hello: ['world'] });
        assert_1.default.deepEqual(actual, { hello: ['world'] });
    });
    it('handles object', () => {
        const actual = (0, schemaParsingUtils_1.parseObject)({ hello: { there: 'jedi' } });
        assert_1.default.deepEqual(actual, { hello: { there: 'jedi' } });
    });
    it('handles primitive', () => {
        const actual = (0, schemaParsingUtils_1.parseObject)({ hello: 'world' });
        assert_1.default.deepEqual(actual, { hello: 'world' });
    });
});
describe('schemaParser', () => {
    it('handles function', () => {
        const actual = (0, schemaParsingUtils_1.schemaParser)(() => 'hello');
        assert_1.default.equal(actual, 'hello');
    });
    it('handles primitive', () => {
        const actual = (0, schemaParsingUtils_1.schemaParser)('world');
        assert_1.default.equal(actual, 'world');
    });
});
describe('parseArrayForFunction', () => {
    it('handles primitive', () => {
        const actualFalse = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            true,
        ]);
        assert_1.default.equal(actualFalse, false);
    });
    it('handles function', () => {
        const actualTrue = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            true,
            noOp,
        ]);
        assert_1.default.equal(actualTrue, true);
    });
    it('handles array', () => {
        const actualFalse = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            [
                true,
                '3',
            ],
        ]);
        assert_1.default.equal(actualFalse, false);
        const actualTrue = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            [
                true,
                noOp,
            ],
        ]);
        assert_1.default.equal(actualTrue, true);
    });
    it('handles object', () => {
        const actualFalse = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            {
                when: 'are',
                we: 3,
            },
        ]);
        assert_1.default.equal(actualFalse, false);
        const actualTrue = (0, schemaParsingUtils_1.parseArrayForFunction)([
            1,
            'hello',
            {
                when: 'are',
                we: noOp,
            },
        ]);
        assert_1.default.equal(actualTrue, true);
    });
});
describe('parseObjectForFunction', () => {
    it('handles primitive', () => {
        const actual = (0, schemaParsingUtils_1.parseObjectForFunction)({
            hello: 'world',
            city: 3,
            gender: true,
        });
        assert_1.default.equal(actual, false);
    });
    it('handles function', () => {
        const actual = (0, schemaParsingUtils_1.parseObjectForFunction)({
            hello: 'world',
            city: noOp,
            gender: true,
        });
        assert_1.default.equal(actual, true);
    });
    it('handles object', () => {
        const actualFalse = (0, schemaParsingUtils_1.parseObjectForFunction)({
            hello: 'world',
            city: { street: '123 sesame' },
            gender: true,
        });
        assert_1.default.equal(actualFalse, false);
        const actualTrue = (0, schemaParsingUtils_1.parseObjectForFunction)({
            hello: 'world',
            city: {
                street: '123 sesame',
                zip: noOp,
            },
            gender: true,
        });
        assert_1.default.equal(actualTrue, true);
    });
});
describe('parseSchemaForFunction', () => {
    it('handles function', () => {
        const actual = (0, schemaParsingUtils_1.parseSchemaForFunction)(() => 'hello');
        assert_1.default.equal(actual, true);
    });
    it('handles primitive', () => {
        const actual = (0, schemaParsingUtils_1.parseSchemaForFunction)('hello');
        assert_1.default.equal(actual, false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hUGFyc2luZ1V0aWxzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvc2NoZW1hUGFyc2luZ1V0aWxzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUE2RDtBQUM3RCxjQUFjOzs7OztBQUVkLG9EQUE0QjtBQUU1Qiw2REFPOEI7QUFFOUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBRXRCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBQSwrQkFBVSxFQUFDO1lBQ3RCLEdBQUcsRUFBRSxDQUFDLE9BQU87WUFDYixHQUFHLEVBQUUsQ0FBQyxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUEsZ0JBQU0sRUFDRixNQUFNLEVBQ047WUFDSSxPQUFPO1lBQ1AsT0FBTztTQUNWLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBQSwrQkFBVSxFQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2YsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBQSxnQkFBTSxFQUNGLE1BQU0sRUFDTjtZQUNJLENBQUMsT0FBTyxDQUFDO1lBQ1QsQ0FBQyxPQUFPLENBQUM7U0FDWixDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBQSwrQkFBVSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hE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