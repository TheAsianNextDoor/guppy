// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import assert from 'assert';
import { spy } from 'sinon';

import { integer } from '../chanceWrapper/chance';
import { getUniqueValue } from './uniqueUtils';

const noOp = () => {};

describe('getUniqueValue', () => {
    it('handle previously chosen values length zero', () => {
        const previouslyChosenValues = [];
        const functionSpy = spy();
        const actual = getUniqueValue(1, previouslyChosenValues, functionSpy, 10);

        assert.equal(actual, 1);
        assert.deepEqual(previouslyChosenValues, [1]);
        assert.equal(functionSpy.notCalled, true);
    });

    it('handle previously chosen values length not zero', () => {
        const previouslyChosenValues = [
            0,
            1,
        ];
        const functionSpy = spy();
        const actual = getUniqueValue(
            integer({
                min: 0,
                max: 2,
            }), 
            previouslyChosenValues, 
            functionSpy, 
            10,
        );
        assert.equal(actual, 2);
        assert.deepEqual(
            previouslyChosenValues, 
            [
                0,
                1,
                2,
            ],
        );
        assert.equal(functionSpy.notCalled, true);
    });

    it('reached max iterations', () => {
        const previouslyChosenValues = [
            0,
            1,
            2,
        ];
        const functionSpy = spy();
        getUniqueValue(
            integer({
                min: 0,
                max: 2,
            }), 
            previouslyChosenValues, 
            functionSpy, 
            10,
        );

        assert.equal(functionSpy.calledOnce, true);
    });
});