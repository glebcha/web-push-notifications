import * as firebase from '../constants/firebase';
import { urlBase64ToUint8Array } from './urlBase64ToUint8Array';

/**
 * Check/Set push notifications subscription
 *
 * @category Utility
 */
export function checkSubscription(
    registration: ServiceWorkerRegistration,
    unsubscribe = false,
): Promise<PushSubscription | null | void> {
    return registration.pushManager.getSubscription()
        .then(subscription => {
            const hasNoSubscription = !subscription && registration;
            let checkResult: PushSubscription | null = null;

            if (subscription instanceof PushSubscription) {
                if (unsubscribe) subscription.unsubscribe();
                checkResult = subscription;
            } else if (hasNoSubscription && registration instanceof ServiceWorkerRegistration) {
                return registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array(firebase.publicVapidKey),
                    });
            }

            return checkResult;
        });
}
