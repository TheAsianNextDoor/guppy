import assert from 'assert';

import {
    address,
    city,
    first,
    integer,
    last,
    state, 
} from '../src/chanceWrapper/chance'; 
import { test } from '../src/test';

// function being tested
const transformResponse = (response: any) => ({ 
    name: `${response.firstName} ${response.lastName}`,
    age: `${response.age} years old`,
    color: response.twoFavoriteColors[0], 
    address: `${response.address.street} ${response.address.city},${response.address.state}`,
});

const goodConfig = {
    firstName: first(),
    lastName: last(),
    age: integer({
        min: 1,
        max: 120, 
    }),
    twoFavoriteColors: [
        1,
        2,
    ],
    address: {
        street: address(),
        city: city(),
        state: state(),
    },
};

it('Happy Birthday Passing',  () => {
    return test(goodConfig, (data) => {
        const expected = {
            name: `${data.firstName} ${data.lastName}`,
            age: `${data.age} years old`,
            color: data.twoFavoriteColors[0], 
            address: `${data.address.street} ${data.address.city},${data.address.state}`,
        };

        const actual = transformResponse(data);

        assert.deepEqual(actual, expected);
    });
});
