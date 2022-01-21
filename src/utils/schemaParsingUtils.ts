import {
    isArray,
    isFunction,
    isObject, 
} from './typeUtils';

export const parseArray = (arr: any[]): any[] => arr.map((item: any) => {
    if (isFunction(item)) return item();
    if (isArray(item)) return parseArray(item);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (isObject(item)) return parseObject(item);

    // primitive type
    return item;
});

export const parseObject = (schemaObject: object):any => {
    return Object.entries(schemaObject).reduce(
        (prevObj: object, [
            key,
            value,
        ]) => {
            if (isFunction(value)) return {
                ...prevObj,
                [key]: value(), 
            };
            if (isArray(value)) return {
                ...prevObj,
                [key]: parseArray(value), 
            };
            if (isObject(value)) return {
                ...prevObj,
                [key]: parseObject(value), 
            };
            
            // primitive type
            return {
                ...prevObj,
                ...{ [key]: value }, 
            };
        },
        {},
    );
};

export const schemaParser = (schema: any): any => {
    if (isFunction(schema)) return schema();
    if (isArray(schema)) return parseArray(schema);
    if (isObject(schema)) return parseObject(schema);

    // primitive type
    return schema;
};

export const parseArrayForFunction = (arr: any[]): boolean => {
    const entityResultList = arr.map((item: any) => {
        if (isFunction(item)) return true;
        if (isArray(item)) return parseArrayForFunction(item);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (isObject(item)) return parseObjectForFunction(item);

        // primitive type
        return false;
    });

    return entityResultList.includes(true);
};

export const parseObjectForFunction = (schemaObject: object): boolean => {
    const entityResultList = Object.values(schemaObject).map(
        (value) => {
            if (isFunction(value)) return true;
            if (isArray(value)) return parseArrayForFunction(value);
            if (isObject(value)) return parseObjectForFunction(value);
            
            // primitive type
            return false;
        },
    );

    return entityResultList.includes(true);
};

export const parseSchemaForFunction = (schema: any): any => {
    if (isFunction(schema)) return true;
    if (isArray(schema)) return parseArrayForFunction(schema);
    if (isObject(schema)) return parseObjectForFunction(schema);

    // primitive type
    return false;
};
