"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const chance_1 = require("../src/chanceWrapper/chance");
const test_1 = require("../src/test");
// function being tested
const transformResponse = (response) => ({
    name: `${response.firstName} ${response.lastName}`,
    age: `${response.age} years old`,
    color: response.twoFavoriteColors[0],
    address: `${response.address.street} ${response.address.city},${response.address.state}`,
});
const goodConfig = {
    firstName: (0, chance_1.first)(),
    lastName: (0, chance_1.last)(),
    age: (0, chance_1.integer)({
        min: 1,
        max: 120,
    }),
    twoFavoriteColors: [
        1,
        2,
    ],
    address: {
        street: (0, chance_1.address)(),
        city: (0, chance_1.city)(),
        state: (0, chance_1.state)(),
    },
};
it('Happy Birthday Passing', () => {
    return (0, test_1.test)(goodConfig, (data) => {
        const expected = {
            name: `${data.firstName} ${data.lastName}`,
            age: `${data.age} years old`,
            color: data.twoFavoriteColors[0],
            address: `${data.address.street} ${data.address.city},${data.address.state}`,
        };
        const actual = transformResponse(data);
        assert_1.default.deepEqual(actual, expected);
    });
});
