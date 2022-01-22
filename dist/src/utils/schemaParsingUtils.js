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
