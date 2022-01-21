// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import assert from 'assert';

import { integer } from '../src/chanceWrapper/chance';
import { test } from '../src/test';
import {
    conditional,
    generateValueBesides,
    selectOne, 
} from '../src/utils/helperFunctions';


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

const defaultConfig = generateValueBesides(
    integer({
        min: -120,
        max: 120, 
    }), 
    [
        0,
        100,
    ],
);

const specialConfig = selectOne([
    0,
    100,
]);

it('Default Case',  () => {
    return test(defaultConfig, (data) => {
        const expected = `${data} is not special`;

        const actual = specialStringFromNumber(data);

        assert.equal(actual, expected);
    });
});

it('Special Case',  () => {
    return test(specialConfig, (data) => {
        const actual = specialStringFromNumber(data);

        conditional(() => assert.equal(actual, `${data} is special`), data === 0);
        conditional(() => assert.equal(actual, `${data} is very special`), data === 100);
    });
});

