// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import assert from 'assert';

import { integer } from '../chanceWrapper/chance';
import {
    conditional,
    generateValueBesides,
    selectOne, 
} from './helperFunctions';

const noOp = () => {};

describe('selectOne', () => {

    it('error handling', () => {
        assert.throws(selectOne(2));
        assert.throws(selectOne('hello'));
        assert.throws(selectOne(false));
        assert.throws(selectOne([]));
        assert.throws(selectOne({ a: 'b' }));
    });

    it('array of length 1', () => {
        const actual = selectOne([1])();

        assert.equal(actual, 1);
    });

    it('array of length 1 primitive', () => {
        const actual = selectOne([1])();

        assert.equal(actual, 1);
    });

    it('array of length greater than 1 primitive', () => {
        const actual = selectOne([
            1,
            2,
        ])();

        const isOneOrTwo = (num) => num === 1 || num === 2;

        assert.equal(true, isOneOrTwo(actual));
    });

    it('array of length 1 function', () => {
        const actual = selectOne([integer({
            min: 1,
            max: 1,
        })])();

        assert.equal(actual, 1);
    });

    it('array of length greater than 1 function', () => {
        const actual = selectOne([
            integer({
                min: 1,
                max: 1,
            }),
            integer({
                min: 1,
                max: 1,
            }),
        ])();

        const isOneOrTwo = (num) => num === 1 || num === 2;

        assert.equal(true, isOneOrTwo(actual));
    });

    it('array of functions/primitives', () => {
        const actual = selectOne([
            integer({
                min: 1,
                max: 1,
            }),
            1,
        ])();

        const isOneOrTwo = (num) => num === 1 || num === 2;

        assert.equal(true, isOneOrTwo(actual));
    });
});

describe('conditional', () => {
    it('error handling', () => {
        assert.throws(() => conditional(noOp, 2));
        assert.throws(() => conditional(noOp, 'hello'));
        assert.throws(() => conditional(noOp, []));
        assert.throws(() => conditional(noOp, { a: 'b' }));
    });

    it('true case', () => {
        let functionCalledFlag = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const funcToCall = () => {functionCalledFlag = true;};
        conditional(funcToCall, true);

        assert.equal(true, functionCalledFlag);
    });

    it('false case', () => {
        let functionCalledFlag = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const funcNotToCall = () => {functionCalledFlag = true;};
        conditional(funcNotToCall, false);

        assert.equal(false, functionCalledFlag);
    });
});

describe('generateValueBesides', () => {
    it('error handling first arg', () => {
        assert.throws(generateValueBesides(2));
        assert.throws(generateValueBesides('hello'));
        assert.throws(generateValueBesides(false));
        assert.throws(generateValueBesides([]));
        assert.throws(generateValueBesides({ a: 'b' }));
    });

    it('error handling second arg', () => {
        assert.throws(generateValueBesides(noOp, 2));
        assert.throws(generateValueBesides(noOp, 'hello'));
        assert.throws(generateValueBesides(noOp, false));
        assert.throws(generateValueBesides(noOp, []));
        assert.throws(generateValueBesides(noOp, { a: 'b' }));
    });

    it('error when max iterations', () => {
        const generatorFunc = generateValueBesides(
            integer({
                min: 0,
                max: 1,
            }),
            [
                0,
                1,
            ],
            { uniqueValueAttempts: 20 },
        );

        assert.throws(generatorFunc);
    });

    it('returns value besides 1', () => {
        const actual = generateValueBesides(
            integer({
                min: 0,
                max: 1,
            }),
            [0],
            { uniqueValueAttempts: 20 },
        )();

        assert.equal(actual, 1);
    });
});
