"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const sinon_1 = require("sinon");
const chance_1 = require("../chanceWrapper/chance");
const uniqueUtils_1 = require("./uniqueUtils");
const noOp = () => { };
describe('getUniqueValue', () => {
    it('handle previously chosen values length zero', () => {
        const previouslyChosenValues = [];
        const functionSpy = (0, sinon_1.spy)();
        const actual = (0, uniqueUtils_1.getUniqueValue)(1, previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(actual, 1);
        assert_1.default.deepEqual(previouslyChosenValues, [1]);
        assert_1.default.equal(functionSpy.notCalled, true);
    });
    it('handle previously chosen values length not zero', () => {
        const previouslyChosenValues = [
            0,
            1,
        ];
        const functionSpy = (0, sinon_1.spy)();
        const actual = (0, uniqueUtils_1.getUniqueValue)((0, chance_1.integer)({
            min: 0,
            max: 2,
        }), previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(actual, 2);
        assert_1.default.deepEqual(previouslyChosenValues, [
            0,
            1,
            2,
        ]);
        assert_1.default.equal(functionSpy.notCalled, true);
    });
    it('reached max iterations', () => {
        const previouslyChosenValues = [
            0,
            1,
            2,
        ];
        const functionSpy = (0, sinon_1.spy)();
        (0, uniqueUtils_1.getUniqueValue)((0, chance_1.integer)({
            min: 0,
            max: 2,
        }), previouslyChosenValues, functionSpy, 10);
        assert_1.default.equal(functionSpy.calledOnce, true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlVXRpbHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy91bmlxdWVVdGlscy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2REFBNkQ7QUFDN0QsY0FBYzs7Ozs7QUFFZCxvREFBNEI7QUFDNUIsaUNBQTRCO0FBRTVCLG9EQUFrRDtBQUNsRCwrQ0FBK0M7QUFFL0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBRXRCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFdBQVcsR0FBRyxJQUFBLFdBQUcsR0FBRSxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUEsNEJBQWMsRUFBQyxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLEVBQUU7UUFDdkQsTUFBTSxzQkFBc0IsR0FBRztZQUMzQixDQUFDO1lBQ0QsQ0FBQztTQUNKLENBQUM7UUFDRixNQUFNLFdBQVcsR0FBRyxJQUFBLFdBQUcsR0FBRSxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUEsNEJBQWMsRUFDekIsSUFBQSxnQkFBTyxFQUFDO1lBQ0osR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUMsRUFDRixzQkFBc0IsRUFDdEIsV0FBVyxFQUNYLEVBQUUsQ0FDTCxDQUFDO1FBQ0YsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFNLENBQUMsU0FBUyxDQUNaLHNCQUFzQixFQUN0QjtZQUNJLENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztTQUNKLENBQ0osQ0FBQztRQUNGLGdCQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO1FBQzlCLE1BQU0sc0JBQXNCLEdBQUc7WUFDM0IsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1NBQ0osQ0FBQztRQUNGLE1BQU0sV0FBVyxHQUFHLElBQUEsV0FBRyxHQUFFLENBQUM7UUFDMUIsSUFBQSw0QkFBYyxFQUNWLElBQUEsZ0JBQU8sRUFBQztZQUNKLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDLEVBQ0Ysc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxFQUFFLENBQ0wsQ0FBQztRQUVGLGdCQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9