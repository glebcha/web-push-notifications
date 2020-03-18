import nanoid from 'nanoid';
import * as api from '../constants/api';
import { localStorageParamsMapper } from '../utils/getLocalStorageParam';
import { AppName, DeviceType } from '../types';

type RegisterConfig = {
    appId: string | null,
    deviceToken: string | null,
    userId: string | null,
    createAt: string | null,
    updateAt: string | null,
    appName: AppName,
    deviceType: DeviceType,
    appVersion: string | null,
    timezone: number,
}

type UnregisterConfig = {
  appId: string | null,
  appName: AppName,
  deviceType: DeviceType,
};

/**
 * Create registration configuration based on push server request scheme
 * @category Push server API
 */
function getRegisterConfig(): RegisterConfig {
    const timezone = new Date().getTimezoneOffset() / -60.0;
    const updateAt = new Date().toISOString();
    const [
        appId,
        deviceToken,
        userId,
        createAt,
        applicationName,
    ] = localStorageParamsMapper([
        [api.APP_ID_PREFIX, nanoid],
        [api.FCM_TOKEN_PREFIX],
        [api.USER_ID_PREFIX],
        [api.APP_INSTALL_DATE, (): string => JSON.stringify(new Date().toISOString())],
        [api.APP_NAME_PREFIX, JSON.stringify(api.PREFIX)],
    ]);

    return {
        appId,
        deviceToken, // FCM registration token
        userId, // User ID
        createAt, // YYYY-MM-DDThh:mm:ss.sssZ
        updateAt, // YYYY-MM-DDThh:mm:ss.sssZ
        appName: applicationName as AppName,
        deviceType: 'web',
        appVersion: '1.0.0',
        timezone,
    };
}

/**
* Create unregister configuration based on push server request scheme
* @category Push server API
*/
function getUnregisterConfig(): UnregisterConfig {
    const [
        appId,
        applicationName,
    ] = localStorageParamsMapper([
        [api.APP_ID_PREFIX, nanoid],
        [api.APP_NAME_PREFIX, JSON.stringify(api.PREFIX)],
    ]);

    return {
        appId,
        appName: applicationName as AppName,
        deviceType: 'web',
    };
}

/**
* Create configuration based on push server request type
* @category Push server API
*/
export function getConfig(type: 'register' | 'unregister' = 'register') {
    return type === 'register' ? getRegisterConfig() : getUnregisterConfig();
}
