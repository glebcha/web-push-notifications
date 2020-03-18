[web-push-notifications](../README.md) › [WebPush](webpush.md)

# Class: WebPush

This class represents public web push subscriptions control API

**`returns`** instantinated WebPush - PushInstaller global object

## Hierarchy

* **WebPush**

## Index

### Properties

* [port](webpush.md#protected-port)
* [signals](webpush.md#signals)
* [version](webpush.md#protected-version)

### Methods

* [applySafariPush](webpush.md#private-applysafaripush)
* [applyStandardPush](webpush.md#private-applystandardpush)
* [broadcastSW](webpush.md#broadcastsw)
* [init](webpush.md#init)
* [registerSW](webpush.md#registersw)
* [subscribeSWBroadcast](webpush.md#subscribeswbroadcast)
* [unregisterSW](webpush.md#unregistersw)

## Properties

### `Protected` port

• **port**: *MessagePort | null* = null

Defined in src/WebPush.ts:29

___

###  signals

• **signals**: *"/Users/glebpopov/GIT-REPOS/web-push-notifications/src/constants/signals"* = signals

Defined in src/WebPush.ts:31

___

### `Protected` version

• **version**: *string* = version

Defined in src/WebPush.ts:27

## Methods

### `Private` applySafariPush

▸ **applySafariPush**(): *Promise‹void | Response›*

Defined in src/WebPush.ts:47

**Returns:** *Promise‹void | Response›*

___

### `Private` applyStandardPush

▸ **applyStandardPush**(`SWPath?`: undefined | string): *Promise‹undefined | null | void | PushSubscription›*

Defined in src/WebPush.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`SWPath?` | undefined &#124; string |

**Returns:** *Promise‹undefined | null | void | PushSubscription›*

___

###  broadcastSW

▸ **broadcastSW**(`message`: BroadcastClientsParams): *void*

Defined in src/WebPush.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`message` | BroadcastClientsParams |

**Returns:** *void*

___

###  init

▸ **init**(): *void*

Defined in src/WebPush.ts:129

**Returns:** *void*

___

###  registerSW

▸ **registerSW**(`SWPath?`: undefined | string): *Promise‹[SWRegistration](../README.md#swregistration)›*

Defined in src/WebPush.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`SWPath?` | undefined &#124; string |

**Returns:** *Promise‹[SWRegistration](../README.md#swregistration)›*

___

###  subscribeSWBroadcast

▸ **subscribeSWBroadcast**(`callback`: function): *void*

Defined in src/WebPush.ts:33

**Parameters:**

▪ **callback**: *function*

▸ (`messageEvent`: MessageEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`messageEvent` | MessageEvent |

**Returns:** *void*

___

###  unregisterSW

▸ **unregisterSW**(`registration`: ServiceWorkerRegistration): *Promise‹Response | void›*

Defined in src/WebPush.ts:111

**Parameters:**

Name | Type |
------ | ------ |
`registration` | ServiceWorkerRegistration |

**Returns:** *Promise‹Response | void›*
