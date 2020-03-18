/* eslint-disable no-restricted-globals */
// import * as firebase from './constants/firebase';
import * as signals from './constants/signals';
import {
    PushEvent,
    ExtendableEvent,
    ExtendableListener,
} from './types';

const { warn } = console;

/**
 * Handle message event with defined type from [[signals]] from main thread
 *
 * @category ServiceWorker
 */
function handleClientBroadcast(event: MessageEvent & ExtendableEvent): void {
    const { type = '', payload = '{}' } = event.data;
    const { title = '', options = {} } = JSON.parse(payload);

    switch (type) {
    case signals.SHOW_NOTIFICATION:
        event.waitUntil(
            self.registration
                .showNotification(title, options)
                .then(() => event.ports[0].postMessage({ type: signals.SW_MESSAGE, payload: 'NOTIFICATION SHOWN' })),
        );
        break;

    default:
        warn(`Signal ${event.data.type} is not valid`);
        break;
    }
}

/**
 * Handle push message event (show notification)
 *
 * @category ServiceWorker
 */
function handlePush(event: PushEvent): void {
    try {
        const { notification } = event.data.json();
        const {
            body, title, tag, icon,
        } = notification;

        event.waitUntil(
            self.registration
                .showNotification(title, { body, tag, icon }),
        );
    } catch ({ message }) {
        warn(`Failed to handle push notification event: ${message}`);
    }
}

(self.addEventListener as ExtendableListener<PushEvent>)('install', event => event.waitUntil(self.skipWaiting()));

(self.addEventListener as ExtendableListener<PushEvent>)('activate', event => event.waitUntil(self.clients.claim()));

(self.addEventListener as ExtendableListener<PushEvent>)('push', handlePush);

(self.addEventListener as ExtendableListener<MessageEvent & ExtendableEvent>)('message', handleClientBroadcast);
