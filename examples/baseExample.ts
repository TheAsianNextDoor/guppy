import assert from 'assert';

import { integer } from '../src/chanceWrapper/chance';
import { test } from '../src/test';
import { selectOne } from '../src/utils/helperFunctions';

// function being tested
const happyBirthday =  (num: number) => {
    if (num < 1 || num > 120) {
        throw new Error('Not a valid birthday');
    }
   
    return num + 1;
};

// config that produces non-failing results
const goodConfig = () => Math.floor(Math.random() * 120) + 1;


// config that produces failing results
const badConfig = selectOne([
    integer({ max: 0 }),
    integer({ min: 121 }),
]);


it('Happy Birthday Passing',  () => {
    return test(goodConfig, (data) => {
        const expected = data + 1;
        const actual = happyBirthday(data);

        assert.equal(actual, expected);
    });
});

it('Happy Birthday failing',  () => {
    return test(badConfig, (data) => {
        assert.throws(() => happyBirthday(data));
    });
});