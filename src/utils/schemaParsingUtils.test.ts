// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import assert from 'assert';

import {
    parseArray,
    parseArrayForFunction,
    parseObject,
    parseObjectForFunction,
    parseSchemaForFunction,
    schemaParser, 
} from './schemaParsingUtils';

const noOp = () => {};

describe('parseArray', () => {
    it('handles function', () => {
        const actual = parseArray([
            () => 'hello',
            () => 'world',
        ]);
        assert(
            actual, 
            [
                'hello',
                'world',
            ]);
    });

    it('handles array', () => {
        const actual = parseArray([
            [() => 'hello'],
            [() => 'world'],
        ]);
        assert(
            actual, 
            [
                ['hello'],
                ['world'],
            ]);
    });

    it('handles object', () => {
        const actual = parseArray([{ hello: 'world' }]);
        assert(
            actual, 
            [{ hello:'world' }]);
    });

    it('handles primitives', () => {
        const actual = parseArray([
            1,
            'boy',
            false,
        ]);
        assert(
            actual, 
            [
                1,
                'boy',
                false,
            ]);
    });
});

describe('parseObject', () => {
    it('handles function', () => {
        const actual = parseObject({ hello: () => 'world' });
        assert.deepEqual(actual, { hello: 'world' });
    });

    
    it('handles array', () => {
        const actual = parseObject({ hello: ['world'] });
        assert.deepEqual(actual, { hello: ['world'] });
    });

    it('handles object', () => {
        const actual = parseObject({ hello: { there: 'jedi' } });
        assert.deepEqual(actual, { hello: { there: 'jedi' } });
    });

    it('handles primitive', () => {
        const actual = parseObject({ hello: 'world' });
        assert.deepEqual(actual, { hello: 'world' });
    });
});

describe('schemaParser', () => {
    it('handles function', () => {
        const actual = schemaParser(() => 'hello');
        assert.equal(actual, 'hello');
    });

    it('handles primitive', () => {
        const actual = schemaParser('world');
        assert.equal(actual, 'world');
    });
});

describe('parseArrayForFunction', () => {
    it('handles primitive', () => {
        const actualFalse = parseArrayForFunction([
            1,
            'hello',
            true,
        ]);
        assert.equal(actualFalse, false);
    });
    it('handles function', () => {
        const actualTrue = parseArrayForFunction([
            1,
            'hello',
            true,
            noOp,
        ]);
        assert.equal(actualTrue, true);
    }); 
    it('handles array', () => {
        const actualFalse = parseArrayForFunction([
            1,
            'hello',
            [
                true,
                '3',
            ],
        ]);
        assert.equal(actualFalse, false);

        const actualTrue = parseArrayForFunction([
            1,
            'hello',
            [
                true,
                noOp,
            ],
        ]);
        assert.equal(actualTrue, true);
    }); 

    it('handles object', () => {
        const actualFalse = parseArrayForFunction([
            1,
            'hello',
            {
                when: 'are',
                we: 3,
            },
        ]);
        assert.equal(actualFalse, false);

        const actualTrue = parseArrayForFunction([
            1,
            'hello',
            {
                when: 'are',
                we: noOp,
            },
        ]);
        assert.equal(actualTrue, true);
    }); 
});

describe('parseObjectForFunction', () => {
    it('handles primitive', () => {
        const actual = parseObjectForFunction({
            hello: 'world',
            city: 3,
            gender: true,
        });
        assert.equal(actual, false);
    });

    it('handles function', () => {
        const actual = parseObjectForFunction({
            hello: 'world',
            city: noOp,
            gender: true,
        });
        assert.equal(actual, true);
    });
    
    it('handles object', () => {
        const actualFalse = parseObjectForFunction({
            hello: 'world',
            city: { street: '123 sesame' },
            gender: true,
        });
        assert.equal(actualFalse, false);

        const actualTrue = parseObjectForFunction({
            hello: 'world',
            city: {
                street: '123 sesame',
                zip: noOp, 
            },
            gender: true,
        });
        assert.equal(actualTrue, true);
    });
});


describe('parseSchemaForFunction', () => {
    it('handles function', () => {
        const actual = parseSchemaForFunction(() => 'hello');
        assert.equal(actual, true);
    });

    it('handles primitive', () => {
        const actual = parseSchemaForFunction( 'hello');
        assert.equal(actual, false);
    });
});