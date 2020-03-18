import { FirebaseMessaging } from '@firebase/messaging-types';
import * as api from '../constants/api';
import { getLocalStorageParam } from '../utils';

/**
 * Generate or return existing Firebase Cloud Messaging device token
 *
 * @category Firebase
 */
export function getFCMToken(messaging: FirebaseMessaging): Promise<{ token: string, existing: boolean }> {
    const existingToken = getLocalStorageParam(api.FCM_TOKEN_PREFIX);

    if (existingToken) {
        return Promise.resolve({ token: existingToken, existing: Boolean(existingToken) });
    }

    return messaging.getToken().then(token => {
        localStorage.setItem(api.FCM_TOKEN_PREFIX, JSON.stringify(token));
        return { token, existing: Boolean(existingToken) };
    });
}
