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
const specialStringFromNumber = (number) => {
    if (number === 0) {
        return `${number} is special`;
    }
    if (number === 100) {
        return `${number} is very special`;
    }
    return `${number} is not special`;
};
const defaultConfig = (0, helperFunctions_1.generateValueBesides)((0, chance_1.integer)({
    min: -120,
    max: 120,
}), [
    0,
    100,
]);
const specialConfig = (0, helperFunctions_1.selectOne)([
    0,
    100,
]);
it('Default Case', () => {
    return (0, test_1.test)(defaultConfig, (data) => {
        const expected = `${data} is not special`;
        const actual = specialStringFromNumber(data);
        assert_1.default.equal(actual, expected);
    });
});
it('Special Case', () => {
    return (0, test_1.test)(specialConfig, (data) => {
        const actual = specialStringFromNumber(data);
        (0, helperFunctions_1.conditional)(() => assert_1.default.equal(actual, `${data} is special`), data === 0);
        (0, helperFunctions_1.conditional)(() => assert_1.default.equal(actual, `${data} is very special`), data === 100);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uYWxFeGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZXhhbXBsZXMvY29uZGl0aW9uYWxFeGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLHdEQUFzRDtBQUN0RCxzQ0FBbUM7QUFDbkMsa0VBSXNDO0FBR3RDLHdCQUF3QjtBQUN4QixNQUFNLHVCQUF1QixHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDL0MsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0tBQ2pDO0lBRUQsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxNQUFNLGtCQUFrQixDQUFDO0tBQ3RDO0lBRUQsT0FBTyxHQUFHLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsSUFBQSxzQ0FBb0IsRUFDdEMsSUFBQSxnQkFBTyxFQUFDO0lBQ0osR0FBRyxFQUFFLENBQUMsR0FBRztJQUNULEdBQUcsRUFBRSxHQUFHO0NBQ1gsQ0FBQyxFQUNGO0lBQ0ksQ0FBQztJQUNELEdBQUc7Q0FDTixDQUNKLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFTLEVBQUM7SUFDNUIsQ0FBQztJQUNELEdBQUc7Q0FDTixDQUFDLENBQUM7QUFFSCxFQUFFLENBQUMsY0FBYyxFQUFHLEdBQUcsRUFBRTtJQUNyQixPQUFPLElBQUEsV0FBSSxFQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztRQUUxQyxNQUFNLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQyxjQUFjLEVBQUcsR0FBRyxFQUFFO0lBQ3JCLE9BQU8sSUFBQSxXQUFJLEVBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDaEMsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBQSw2QkFBVyxFQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUEsNkJBQVcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==