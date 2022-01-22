"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.getConfig = void 0;
let config = {
    iterations: 3,
    fastFail: true,
    selectUniqueValues: true,
    uniqueValueAttempts: 5,
    logger: undefined,
    customError: undefined,
};
const getConfig = () => config;
exports.getConfig = getConfig;
const setConfig = (newConfig) => {
    config = {
        ...config,
        ...newConfig,
    };
};
exports.setConfig = setConfig;
