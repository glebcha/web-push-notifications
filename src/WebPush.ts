import * as api from './constants/api';
import * as signals from './constants/signals';
import { initFCM } from './firebase/initFCM';
import { getFCMToken } from './firebase/getFCMToken';
import { registerOnPushServer } from './api/registerOnPushServer';
import { unregisterOnPushServer } from './api/unregisterOnPushServer';
import {
    checkServices,
    checkSubscription,
    getLocalStorageParam,
    registerExternalScript,
    checkSafariNotificationPermission,
    checkStandardNotificationPermission,
} from './utils';
import { BroadcastClientsParams } from './types';
import { version } from '../package.json';

type SWRegistration = PushSubscription | Response | null | undefined | void;

const { warn, info } = console;

/**
 * This class represents public web push subscriptions control API
 * @returns instantinated WebPush - PushInstaller global object
 */
export class WebPush {
    protected version: string = version

    protected port: MessagePort | null = null

    public signals = signals

    public subscribeSWBroadcast = (callback: (messageEvent: MessageEvent) => void) => {
        const messageChannel = new MessageChannel();

        this.port = messageChannel.port2;

        messageChannel.port1.onmessage = callback;
    }

    public broadcastSW = (message: BroadcastClientsParams): void => {
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(message, [this.port as MessagePort]);
        }
    }

    private applySafariPush = () => checkSafariNotificationPermission()
        .then(({ permission, deviceToken }) => {
            localStorage.setItem(api.FCM_TOKEN_PREFIX, deviceToken);
            return permission;
        })
        .then(permission => {
            if (permission === 'granted') {
                return registerOnPushServer(true);
            }

            return unregisterOnPushServer(true);
        })

    private applyStandardPush = (SWPath?: string) => {
        const serviceWorkerPath = SWPath
        || (window as any)[api.SW_PATH]
        || getLocalStorageParam(api.SW_PATH)
        || api.DEFAULT_SW_PATH;

        return checkStandardNotificationPermission()
            .then(permission => {
                if (!permission) {
                    return unregisterOnPushServer()
                        .then(() => { throw Error('subscription declined'); });
                }

                return null;
            })
            .then(() => navigator.serviceWorker.register(serviceWorkerPath))
            .then(() => navigator.serviceWorker.ready)
            .then(registration => initFCM(registration))
            .then(messaging => getFCMToken(messaging))
            .then(({ existing }): Promise<Response | boolean | void> => {
                document.dispatchEvent(new CustomEvent(api.NOTIFICATIONS_ACCEPTED_EVENT));

                if (!existing) {
                    return registerOnPushServer();
                }

                return Promise.resolve(existing);
            })
            .then(() => navigator.serviceWorker.getRegistration())
            .then(registration => registration && checkSubscription(registration))
            .catch(({ message }) => {
                warn(`Service Worker Registration failed\n ${message}`);
            });
    }

    public registerSW = (SWPath?: string): Promise<SWRegistration> => {
        const { isSafari, isSupported } = checkServices();
        const isValidBrowser = isSupported && !isSafari;

        if (isSafari) {
            return this.applySafariPush();
        }

        if (isValidBrowser) {
            return this.applyStandardPush(SWPath);
        }

        warn('Browser not supported');
        return Promise.reject(Error('Browser not supported'));
    }

    public unregisterSW = (registration: ServiceWorkerRegistration): Promise<Response | void> => {
        const { isSafari } = checkServices();

        if (isSafari) {
            return unregisterOnPushServer()
                .catch(({ message }) => {
                    warn(`Unregistration on push server failed: ${message}`);
                });
        }

        return checkSubscription(registration, true)
            .then(() => unregisterOnPushServer())
            .catch(({ message }) => {
                warn(`Service Worker Unregistration failed: ${message}`);
            });
    }


    public init = (): void => {
        const { isSafari, isSupported } = checkServices();
        const isValidBrowser = !isSafari && isSupported;

        if (isValidBrowser) {
            registerExternalScript(
                '//www.gstatic.com/firebasejs/7.6.0/firebase-app.js', 
                () => info('%c firebase-app loaded ', 'background: #ccc; color: #000'),
            );
            registerExternalScript(
                '//www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js', 
                () => info('%c firebase-messaging loaded ', 'background: #ccc; color: #000'),
            );
        }
    }
}
