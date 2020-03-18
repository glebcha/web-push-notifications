import * as api from '../constants/api';
import { unregisterOnPushServer } from '../api/unregisterOnPushServer';
import { SafariPermission } from '../types';

export function checkSafariNotificationPermission(): Promise<SafariPermission> {
    const permissionData = window.safari.pushNotification.permission(api.API_WEB_PUSH_ID);

    if (permissionData.permission === 'default') {
        return new Promise(resolve => {
            window.safari.pushNotification.requestPermission(
                `${api.API_URL}/${api.API_SAFARI_ENDPOINT}`,
                api.API_WEB_PUSH_ID,
                { application: api.API_SAFARI_APPLICATION_ID },
                data => resolve(data),
            );
        });
    }

    return Promise.resolve(permissionData);
}

export function checkStandardNotificationPermission(): Promise<boolean> {
    return Notification
        .requestPermission()
        .then(permission => {
            if (permission === 'granted') {
                return true;
            }

            return unregisterOnPushServer()
                .then(() => {
                    document.dispatchEvent(new CustomEvent(api.NOTIFICATIONS_DECLINED_EVENT));
                    return false;
                });
        });
}
