import { FirebaseNamespace } from '@firebase/app-types';
import { FirebaseMessaging } from '@firebase/messaging-types';

export type AppName = 'push_lib' | 'web_push_lib';
export type DeviceType = 'android' | 'ios' | 'web';

interface PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  json(): any;
  json<T>(): T;
  text(): string;
}

export interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<any>): void;
}

export interface PushEvent extends ExtendableEvent {
  readonly data: PushMessageData;
}

interface ServiceWorkerClientsMatchOptions {
  includeUncontrolled?: boolean;
  type?: string;
}

interface ServiceWorkerClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postMessage(message: any, transfer?: any): void;
  readonly frameType: string;
  readonly id: string;
  readonly url: string;
}

interface WindowClient extends ServiceWorkerClient {
  focus(): Promise<WindowClient>;
  readonly focused: boolean;
  readonly visibilityState: string;
}

interface ServiceWorkerClients {
  get(clientId: string): Promise<ServiceWorkerClient>;
  matchAll(options?: ServiceWorkerClientsMatchOptions): Promise<ServiceWorkerClient[]>;
  openWindow(url: string): Promise<WindowClient>;
  claim(): Promise<void>;
}

interface ServiceWorkerGlobalScope extends EventTarget {
  readonly clients: ServiceWorkerClients;
  readonly registration: ServiceWorkerRegistration;
  skipWaiting(): Promise<void>;
}

interface Firebase extends FirebaseNamespace {
  messaging(): FirebaseMessaging;
}

export interface BroadcastClientsParams {
  type: string;
  payload: string;
}

export type ExtendableListener<E> = (
  type: string,
  listener: (event: E) => void,
  options?: { useCapture?: boolean, passive?: boolean }
) => void;

export type Primitive = string | boolean | number

export interface SafariPermission {
  permission: 'granted' | 'denied' | 'default';
  deviceToken: string;
}

interface SafariPushNotification {
  permission(siteId: string): SafariPermission;
  requestPermission(
    url: string,
    id: string,
    params: {application: string},
    cb: (permission: SafariPermission) => void
  ): void;
}

declare global {
  interface Window extends ServiceWorkerGlobalScope {
    readonly firebase: Firebase;
    readonly msCrypto: Crypto;
    readonly safari: {
      pushNotification: SafariPushNotification,
    };
  }
}
