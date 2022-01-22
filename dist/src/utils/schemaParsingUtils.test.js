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
