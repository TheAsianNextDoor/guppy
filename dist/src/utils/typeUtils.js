"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isError = exports.isArray = exports.isObject = exports.isFunction = void 0;
const type_check_1 = require("type-check");
const isFunction = (variable) => (0, type_check_1.typeCheck)('Function', variable);
exports.isFunction = isFunction;
const isObject = (variable) => (0, type_check_1.typeCheck)('Object', variable);
exports.isObject = isObject;
const isArray = (variable) => (0, type_check_1.typeCheck)('Array', variable);
exports.isArray = isArray;
const isError = (variable) => (0, type_check_1.typeCheck)('Error', variable);
exports.isError = isError;
const isBoolean = (variable) => (0, type_check_1.typeCheck)('Boolean', variable);
exports.isBoolean = isBoolean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3R5cGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBdUM7QUFFaEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFpQixFQUF3QixFQUFFLENBQUMsSUFBQSxzQkFBUyxFQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUExRixRQUFBLFVBQVUsY0FBZ0Y7QUFDaEcsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFpQixFQUFzQixFQUFFLENBQUMsSUFBQSxzQkFBUyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFwRixRQUFBLFFBQVEsWUFBNEU7QUFDMUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxRQUFpQixFQUFxQixFQUFFLENBQUMsSUFBQSxzQkFBUyxFQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFqRixRQUFBLE9BQU8sV0FBMEU7QUFDdkYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxRQUFpQixFQUFxQixFQUFFLENBQUMsSUFBQSxzQkFBUyxFQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFqRixRQUFBLE9BQU8sV0FBMEU7QUFDdkYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxRQUFpQixFQUF1QixFQUFFLENBQUMsSUFBQSxzQkFBUyxFQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUF2RixRQUFBLFNBQVMsYUFBOEUifQ==