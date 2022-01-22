"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSchemaForFunction = exports.parseObjectForFunction = exports.parseArrayForFunction = exports.schemaParser = exports.parseObject = exports.parseArray = void 0;
const typeUtils_1 = require("./typeUtils");
const parseArray = (arr) => arr.map((item) => {
    if ((0, typeUtils_1.isFunction)(item))
        return item();
    if ((0, typeUtils_1.isArray)(item))
        return (0, exports.parseArray)(item);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if ((0, typeUtils_1.isObject)(item))
        return (0, exports.parseObject)(item);
    // primitive type
    return item;
});
exports.parseArray = parseArray;
const parseObject = (schemaObject) => {
    return Object.entries(schemaObject).reduce((prevObj, [key, value,]) => {
        if ((0, typeUtils_1.isFunction)(value))
            return {
                ...prevObj,
                [key]: value(),
            };
        if ((0, typeUtils_1.isArray)(value))
            return {
                ...prevObj,
                [key]: (0, exports.parseArray)(value),
            };
        if ((0, typeUtils_1.isObject)(value))
            return {
                ...prevObj,
                [key]: (0, exports.parseObject)(value),
            };
        // primitive type
        return {
            ...prevObj,
            ...{ [key]: value },
        };
    }, {});
};
exports.parseObject = parseObject;
const schemaParser = (schema) => {
    if ((0, typeUtils_1.isFunction)(schema))
        return schema();
    if ((0, typeUtils_1.isArray)(schema))
        return (0, exports.parseArray)(schema);
    if ((0, typeUtils_1.isObject)(schema))
        return (0, exports.parseObject)(schema);
    // primitive type
    return schema;
};
exports.schemaParser = schemaParser;
const parseArrayForFunction = (arr) => {
    const entityResultList = arr.map((item) => {
        if ((0, typeUtils_1.isFunction)(item))
            return true;
        if ((0, typeUtils_1.isArray)(item))
            return (0, exports.parseArrayForFunction)(item);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if ((0, typeUtils_1.isObject)(item))
            return (0, exports.parseObjectForFunction)(item);
        // primitive type
        return false;
    });
    return entityResultList.includes(true);
};
exports.parseArrayForFunction = parseArrayForFunction;
const parseObjectForFunction = (schemaObject) => {
    const entityResultList = Object.values(schemaObject).map((value) => {
        if ((0, typeUtils_1.isFunction)(value))
            return true;
        if ((0, typeUtils_1.isArray)(value))
            return (0, exports.parseArrayForFunction)(value);
        if ((0, typeUtils_1.isObject)(value))
            return (0, exports.parseObjectForFunction)(value);
        // primitive type
        return false;
    });
    return entityResultList.includes(true);
};
exports.parseObjectForFunction = parseObjectForFunction;
const parseSchemaForFunction = (schema) => {
    if ((0, typeUtils_1.isFunction)(schema))
        return true;
    if ((0, typeUtils_1.isArray)(schema))
        return (0, exports.parseArrayForFunction)(schema);
    if ((0, typeUtils_1.isObject)(schema))
        return (0, exports.parseObjectForFunction)(schema);
    // primitive type
    return false;
};
exports.parseSchemaForFunction = parseSchemaForFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hUGFyc2luZ1V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3NjaGVtYVBhcnNpbmdVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FJcUI7QUFFZCxNQUFNLFVBQVUsR0FBRyxDQUFJLEdBQVEsRUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQU8sRUFBRSxFQUFFO0lBQ2hFLElBQUksSUFBQSxzQkFBVSxFQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBSSxJQUFBLG1CQUFPLEVBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFBLGtCQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsbUVBQW1FO0lBQ25FLElBQUksSUFBQSxvQkFBUSxFQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBQSxtQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdDLGlCQUFpQjtJQUNqQixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQVJVLFFBQUEsVUFBVSxjQVFwQjtBQUVJLE1BQU0sV0FBVyxHQUFHLENBQUMsWUFBb0IsRUFBVSxFQUFFO0lBQ3hELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQ3RDLENBQ0ksT0FBZSxFQUNmLENBQ0ksR0FBRyxFQUNILEtBQUssRUFDUixFQUNILEVBQUU7UUFDQSxJQUFJLElBQUEsc0JBQVUsRUFBQyxLQUFLLENBQUM7WUFBRSxPQUFPO2dCQUMxQixHQUFHLE9BQU87Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUU7YUFDakIsQ0FBQztRQUNGLElBQUksSUFBQSxtQkFBTyxFQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87Z0JBQ3ZCLEdBQUcsT0FBTztnQkFDVixDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUEsa0JB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