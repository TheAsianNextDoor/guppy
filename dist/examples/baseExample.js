"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const chance_1 = require("../src/chanceWrapper/chance");
const test_1 = require("../src/test");
const helperFunctions_1 = require("../src/utils/helperFunctions");
// function being tested
const happyBirthday = (num) => {
    if (num < 1 || num > 120) {
        throw new Error('Not a valid birthday');
    }
    return num + 1;
};
// config that produces non-failing results
const goodConfig = () => Math.floor(Math.random() * 120) + 1;
// config that produces failing results
const badConfig = (0, helperFunctions_1.selectOne)([
    (0, chance_1.integer)({ max: 0 }),
    (0, chance_1.integer)({ min: 121 }),
]);
it('Happy Birthday Passing', () => {
    return (0, test_1.test)(goodConfig, (data) => {
        const expected = data + 1;
        const actual = happyBirthday(data);
        assert_1.default.equal(actual, expected);
    });
});
it('Happy Birthday failing', () => {
    return (0, test_1.test)(badConfig, (data) => {
        assert_1.default.throws(() => happyBirthday(data));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9leGFtcGxlcy9iYXNlRXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1Qix3REFBc0Q7QUFDdEQsc0NBQW1DO0FBQ25DLGtFQUF5RDtBQUV6RCx3QkFBd0I7QUFDeEIsTUFBTSxhQUFhLEdBQUksQ0FBQyxHQUFXLEVBQUUsRUFBRTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDM0M7SUFFRCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUYsMkNBQTJDO0FBQzNDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUc3RCx1Q0FBdUM7QUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBUyxFQUFDO0lBQ3hCLElBQUEsZ0JBQU8sRUFBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNuQixJQUFBLGdCQUFPLEVBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FDeEIsQ0FBQyxDQUFDO0FBR0gsRUFBRSxDQUFDLHdCQUF3QixFQUFHLEdBQUcsRUFBRTtJQUMvQixPQUFPLElBQUEsV0FBSSxFQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFHLEdBQUcsRUFBRTtJQUMvQixPQUFPLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzVCLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==