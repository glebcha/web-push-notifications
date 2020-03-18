import { Primitive } from '../types';

type DefaultValue = Primitive | Function | Record<string, string>;

/**
 * Get option from local storage by defined key
 *
 * @category Utility
 */
export function getLocalStorageParam(key: string, defaultValue?: DefaultValue): string | null {
    try {
        let param = localStorage.getItem(key);

        if (!param && defaultValue) {
            const value = defaultValue instanceof Function ? defaultValue() : defaultValue;
            param = JSON.stringify(value);
            localStorage.setItem(key, param);
        }

        return JSON.parse(param as string); // avoid casting possible null to string
    } catch (error) {
        return null;
    }
}

/**
 * Get options from local storage by defined keys
 *
 * @category Utility
 */
export function localStorageParamsMapper(params: Array<Array<DefaultValue>>): Array<string | null> {
    return params.map(([key, defaultValue]) => getLocalStorageParam(String(key), defaultValue));
}
