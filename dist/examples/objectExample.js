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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0RXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGVzL29iamVjdEV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsd0RBT3FDO0FBQ3JDLHNDQUFtQztBQUVuQyx3QkFBd0I7QUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7SUFDbEQsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsWUFBWTtJQUNoQyxLQUFLLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtDQUMzRixDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRztJQUNmLFNBQVMsRUFBRSxJQUFBLGNBQUssR0FBRTtJQUNsQixRQUFRLEVBQUUsSUFBQSxhQUFJLEdBQUU7SUFDaEIsR0FBRyxFQUFFLElBQUEsZ0JBQU8sRUFBQztRQUNULEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7S0FDWCxDQUFDO0lBQ0YsaUJBQWlCLEVBQUU7UUFDZixDQUFDO1FBQ0QsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUEsZ0JBQU8sR0FBRTtRQUNqQixJQUFJLEVBQUUsSUFBQSxhQUFJLEdBQUU7UUFDWixLQUFLLEVBQUUsSUFBQSxjQUFLLEdBQUU7S0FDakI7Q0FDSixDQUFDO0FBRUYsRUFBRSxDQUFDLHdCQUF3QixFQUFHLEdBQUcsRUFBRTtJQUMvQixPQUFPLElBQUEsV0FBSSxFQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzdCLE1BQU0sUUFBUSxHQUFHO1lBQ2IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVk7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7U0FDL0UsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLGdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=