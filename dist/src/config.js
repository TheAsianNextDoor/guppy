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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFrQkEsSUFBSSxNQUFNLEdBQWU7SUFDckIsVUFBVSxFQUFFLENBQUM7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixNQUFNLEVBQUUsU0FBUztJQUNqQixXQUFXLEVBQUUsU0FBUztDQUN6QixDQUFDO0FBRUssTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQXpCLFFBQUEsU0FBUyxhQUFnQjtBQUUvQixNQUFNLFNBQVMsR0FBRyxDQUFDLFNBQTJCLEVBQUUsRUFBRTtJQUNyRCxNQUFNLEdBQUc7UUFDTCxHQUFHLE1BQU07UUFDVCxHQUFHLFNBQVM7S0FDZixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBTFcsUUFBQSxTQUFTLGFBS3BCIn0=