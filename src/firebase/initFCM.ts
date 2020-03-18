import * as api from '../constants/api';
import * as firebase from '../constants/firebase';
import { registerOnPushServer } from '../api/registerOnPushServer';

const { warn } = console;

/**
 * Initialize Firebase Cloud Messaging service
 * Subscribe on device token refresh event
 *
 * @category Firebase
 */
export function initFCM(registration: ServiceWorkerRegistration) {
    window.firebase.initializeApp(firebase.config);
    const messaging = window.firebase.messaging();

    messaging.usePublicVapidKey(firebase.publicVapidKey);

    messaging.useServiceWorker(registration);

    messaging.onTokenRefresh(() => {
        messaging.getToken()
            .then(token => localStorage.setItem(api.FCM_TOKEN_PREFIX, JSON.stringify(token)))
            .then(() => registerOnPushServer())
            .catch(({ message }) => warn(`Unable refresh FCM token: ${message}`));
    });

    return messaging;
}
