type ConfigType = {
  iterations: number,
  fastFail: boolean,
  selectUniqueValues: boolean,
  uniqueValueAttempts: number,
  logger: Function | undefined,
  customError: Function | undefined,
};

export type SetConfigArgType = {
  iterations?: number,
  fastFail?: boolean,
  selectUniqueValues?: boolean,
  uniqueValueAttempts?: number,
  logger?: Function,
  customError?: Function, 
};

let config: ConfigType = {
    iterations: 3, 
    fastFail: true,
    selectUniqueValues: true,
    uniqueValueAttempts: 5,
    logger: undefined,
    customError: undefined,
};

export const getConfig = () => config;

export const setConfig = (newConfig: SetConfigArgType) => {
    config = {
        ...config,
        ...newConfig, 
    };
};