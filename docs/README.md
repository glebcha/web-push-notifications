[web-push-notifications](README.md)

# web-push-notifications

## Index

### Classes

* [WebPush](classes/webpush.md)

### Utility Interfaces

* [CheckServices](interfaces/checkservices.md)

### Type aliases

* [DefaultValue](README.md#defaultvalue)
* [RegisterConfig](README.md#registerconfig)
* [SWRegistration](README.md#swregistration)
* [UnregisterConfig](README.md#unregisterconfig)

### Variables

* [API_REGISTER](README.md#const-api_register)
* [API_REGISTER_SAFARI](README.md#const-api_register_safari)
* [API_SAFARI_APPLICATION_ID](README.md#const-api_safari_application_id)
* [API_SAFARI_ENDPOINT](README.md#const-api_safari_endpoint)
* [API_UNREGISTER](README.md#const-api_unregister)
* [API_UNREGISTER_SAFARI](README.md#const-api_unregister_safari)
* [API_URL](README.md#const-api_url)
* [API_WEB_PUSH_ID](README.md#const-api_web_push_id)
* [APP_ID_PREFIX](README.md#const-app_id_prefix)
* [APP_INSTALL_DATE](README.md#const-app_install_date)
* [APP_NAME_PREFIX](README.md#const-app_name_prefix)
* [APP_VERSION_PREFIX](README.md#const-app_version_prefix)
* [DEFAULT_SW_PATH](README.md#const-default_sw_path)
* [FCM_TOKEN_PREFIX](README.md#const-fcm_token_prefix)
* [NOTIFICATIONS_ACCEPTED_EVENT](README.md#const-notifications_accepted_event)
* [NOTIFICATIONS_DECLINED_EVENT](README.md#const-notifications_declined_event)
* [PREFIX](README.md#const-prefix)
* [PushInstaller](README.md#const-pushinstaller)
* [SHOW_NOTIFICATION](README.md#const-show_notification)
* [SW_MESSAGE](README.md#const-sw_message)
* [SW_PATH](README.md#const-sw_path)
* [USER_ID_PREFIX](README.md#const-user_id_prefix)
* [info](README.md#info)
* [publicVapidKey](README.md#const-publicvapidkey)
* [warn](README.md#warn)

### Firebase Functions

* [getFCMToken](README.md#getfcmtoken)
* [initFCM](README.md#initfcm)

### Other Functions

* [checkSafariNotificationPermission](README.md#checksafarinotificationpermission)
* [checkServices](README.md#checkservices)
* [checkStandardNotificationPermission](README.md#checkstandardnotificationpermission)
* [registerExternalScript](README.md#const-registerexternalscript)

### Push server API Functions

* [getConfig](README.md#getconfig)
* [getRegisterConfig](README.md#getregisterconfig)
* [getUnregisterConfig](README.md#getunregisterconfig)
* [registerOnPushServer](README.md#registeronpushserver)
* [unregisterOnPushServer](README.md#unregisteronpushserver)

### ServiceWorker Functions

* [handleClientBroadcast](README.md#handleclientbroadcast)
* [handlePush](README.md#handlepush)

### Utility Functions

* [checkSubscription](README.md#checksubscription)
* [getLocalStorageParam](README.md#getlocalstorageparam)
* [isFunction](README.md#const-isfunction)
* [localStorageParamsMapper](README.md#localstorageparamsmapper)
* [urlBase64ToUint8Array](README.md#urlbase64touint8array)

### Object literals

* [config](README.md#const-config)

## Type aliases

###  DefaultValue

Ƭ **DefaultValue**: *Primitive | Function | Record‹string, string›*

Defined in src/utils/getLocalStorageParam.ts:3

___

###  RegisterConfig

Ƭ **RegisterConfig**: *object*

Defined in src/api/getConfig.ts:6

#### Type declaration:

* **appId**: *string | null*

* **appName**: *AppName*

* **appVersion**: *string | null*

* **createAt**: *string | null*

* **deviceToken**: *string | null*

* **deviceType**: *DeviceType*

* **timezone**: *number*

* **updateAt**: *string | null*

* **userId**: *string | null*

___

###  SWRegistration

Ƭ **SWRegistration**: *PushSubscription | Response | null | undefined | void*

Defined in src/WebPush.ts:18

___

###  UnregisterConfig

Ƭ **UnregisterConfig**: *object*

Defined in src/api/getConfig.ts:18

#### Type declaration:

* **appId**: *string | null*

* **appName**: *AppName*

* **deviceType**: *DeviceType*

## Variables

### `Const` API_REGISTER

• **API_REGISTER**: *"register"* = "register"

Defined in src/constants/api.ts:19

___

### `Const` API_REGISTER_SAFARI

• **API_REGISTER_SAFARI**: *"register-safari"* = "register-safari"

Defined in src/constants/api.ts:20

___

### `Const` API_SAFARI_APPLICATION_ID

• **API_SAFARI_APPLICATION_ID**: *"web-safari-push"* = "web-safari-push"

Defined in src/constants/api.ts:25

___

### `Const` API_SAFARI_ENDPOINT

• **API_SAFARI_ENDPOINT**: *"safari"* = "safari"

Defined in src/constants/api.ts:24

___

### `Const` API_UNREGISTER

• **API_UNREGISTER**: *"unregister"* = "unregister"

Defined in src/constants/api.ts:21

___

### `Const` API_UNREGISTER_SAFARI

• **API_UNREGISTER_SAFARI**: *"unregister-safari"* = "unregister-safari"

Defined in src/constants/api.ts:22

___

### `Const` API_URL

• **API_URL**: *"https://push.mirtesen.ru/api/push"* = "https://push.mirtesen.ru/api/push"

Defined in src/constants/api.ts:1

___

### `Const` API_WEB_PUSH_ID

• **API_WEB_PUSH_ID**: *"web.com.push"* = "web.com.push"

Defined in src/constants/api.ts:27

___

### `Const` APP_ID_PREFIX

• **APP_ID_PREFIX**: *string* = `${PREFIX}_push_id`

Defined in src/constants/api.ts:6

___

### `Const` APP_INSTALL_DATE

• **APP_INSTALL_DATE**: *string* = `${PREFIX}_push_install_date`

Defined in src/constants/api.ts:8

___

### `Const` APP_NAME_PREFIX

• **APP_NAME_PREFIX**: *string* = `${PREFIX}_push_name`

Defined in src/constants/api.ts:7

___

### `Const` APP_VERSION_PREFIX

• **APP_VERSION_PREFIX**: *string* = `${PREFIX}_push_version`

Defined in src/constants/api.ts:5

___

### `Const` DEFAULT_SW_PATH

• **DEFAULT_SW_PATH**: *"service-worker.js"* = "service-worker.js"

Defined in src/constants/api.ts:17

___

### `Const` FCM_TOKEN_PREFIX

• **FCM_TOKEN_PREFIX**: *string* = `${PREFIX}_fcm_token`

Defined in src/constants/api.ts:10

___

### `Const` NOTIFICATIONS_ACCEPTED_EVENT

• **NOTIFICATIONS_ACCEPTED_EVENT**: *string* = `${PREFIX}_notifications_accepted`

Defined in src/constants/api.ts:14

___

### `Const` NOTIFICATIONS_DECLINED_EVENT

• **NOTIFICATIONS_DECLINED_EVENT**: *string* = `${PREFIX}_notifications_declined`

Defined in src/constants/api.ts:15

___

### `Const` PREFIX

• **PREFIX**: *"web_push_lib"* = "web_push_lib"

Defined in src/constants/api.ts:2

___

### `Const` PushInstaller

• **PushInstaller**: *[WebPush](classes/webpush.md)‹›* = new WebPush()

Defined in src/web-push-installer.ts:3

___

### `Const` SHOW_NOTIFICATION

• **SHOW_NOTIFICATION**: *string* = `${PREFIX}_show_notification`

Defined in src/constants/signals.ts:3

___

### `Const` SW_MESSAGE

• **SW_MESSAGE**: *string* = `${PREFIX}_sw_message`

Defined in src/constants/signals.ts:4

___

### `Const` SW_PATH

• **SW_PATH**: *string* = `${PREFIX}_sw_path`

Defined in src/constants/api.ts:3

___

### `Const` USER_ID_PREFIX

• **USER_ID_PREFIX**: *string* = `${PREFIX}_user_id`

Defined in src/constants/api.ts:12

___

###  info

• **info**: *info*

Defined in src/WebPush.ts:20

___

### `Const` publicVapidKey

• **publicVapidKey**: *"VAPID_KEY_FROM_CONSOLE"* = "VAPID_KEY_FROM_CONSOLE"

Defined in src/constants/firebase.ts:1

___

###  warn

• **warn**: *warn*

Defined in src/api/registerOnPushServer.ts:4

Defined in src/firebase/initFCM.ts:5

Defined in src/api/unregisterOnPushServer.ts:4

Defined in src/WebPush.ts:20

Defined in src/service-worker.ts:10

## Firebase Functions

###  getFCMToken

▸ **getFCMToken**(`messaging`: FirebaseMessaging): *Promise‹object›*

Defined in src/firebase/getFCMToken.ts:10

Generate or return existing Firebase Cloud Messaging device token

**Parameters:**

Name | Type |
------ | ------ |
`messaging` | FirebaseMessaging |

**Returns:** *Promise‹object›*

___

###  initFCM

▸ **initFCM**(`registration`: ServiceWorkerRegistration): *FirebaseMessaging*

Defined in src/firebase/initFCM.ts:13

Initialize Firebase Cloud Messaging service
Subscribe on device token refresh event

**Parameters:**

Name | Type |
------ | ------ |
`registration` | ServiceWorkerRegistration |

**Returns:** *FirebaseMessaging*

___

## Other Functions

###  checkSafariNotificationPermission

▸ **checkSafariNotificationPermission**(): *Promise‹SafariPermission›*

Defined in src/utils/checkPermission.ts:5

**Returns:** *Promise‹SafariPermission›*

___

###  checkServices

▸ **checkServices**(): *[CheckServices](interfaces/checkservices.md)*

Defined in src/utils/checkServices.ts:11

**Returns:** *[CheckServices](interfaces/checkservices.md)*

___

###  checkStandardNotificationPermission

▸ **checkStandardNotificationPermission**(): *Promise‹boolean›*

Defined in src/utils/checkPermission.ts:22

**Returns:** *Promise‹boolean›*

___

### `Const` registerExternalScript

▸ **registerExternalScript**(`url`: string, `onLoad?`: undefined | function): *void*

Defined in src/utils/registerExternalScript.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`onLoad?` | undefined &#124; function |

**Returns:** *void*

___

## Push server API Functions

###  getConfig

▸ **getConfig**(`type`: "register" | "unregister"): *object*

Defined in src/api/getConfig.ts:82

Create configuration based on push server request type

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | "register" &#124; "unregister" | "register" |

**Returns:** *object*

* **appId**: *string | null*

* **appName**: *AppName*

* **deviceType**: *DeviceType*

___

###  getRegisterConfig

▸ **getRegisterConfig**(): *[RegisterConfig](README.md#registerconfig)*

Defined in src/api/getConfig.ts:28

Create registration configuration based on push server request scheme

**Returns:** *[RegisterConfig](README.md#registerconfig)*

___

###  getUnregisterConfig

▸ **getUnregisterConfig**(): *[UnregisterConfig](README.md#unregisterconfig)*

Defined in src/api/getConfig.ts:62

Create unregister configuration based on push server request scheme

**Returns:** *[UnregisterConfig](README.md#unregisterconfig)*

___

###  registerOnPushServer

▸ **registerOnPushServer**(`isSafari?`: undefined | false | true): *Promise‹Response | void›*

Defined in src/api/registerOnPushServer.ts:11

Register on push server with provided configuration from [getRegisterConfig](README.md#getregisterconfig) output

**Parameters:**

Name | Type |
------ | ------ |
`isSafari?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹Response | void›*

___

###  unregisterOnPushServer

▸ **unregisterOnPushServer**(`isSafari?`: undefined | false | true): *Promise‹Response | void›*

Defined in src/api/unregisterOnPushServer.ts:11

Unegister on push server with provided configuration from [getUnregisterConfig](README.md#getunregisterconfig) output

**Parameters:**

Name | Type |
------ | ------ |
`isSafari?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹Response | void›*

___

## ServiceWorker Functions

###  handleClientBroadcast

▸ **handleClientBroadcast**(`event`: MessageEvent & ExtendableEvent): *void*

Defined in src/service-worker.ts:17

Handle message event with defined type from [signals](classes/webpush.md#signals) from main thread

**Parameters:**

Name | Type |
------ | ------ |
`event` | MessageEvent & ExtendableEvent |

**Returns:** *void*

___

###  handlePush

▸ **handlePush**(`event`: PushEvent): *void*

Defined in src/service-worker.ts:41

Handle push message event (show notification)

**Parameters:**

Name | Type |
------ | ------ |
`event` | PushEvent |

**Returns:** *void*

___

## Utility Functions

###  checkSubscription

▸ **checkSubscription**(`registration`: ServiceWorkerRegistration, `unsubscribe`: boolean): *Promise‹PushSubscription | null | void›*

Defined in src/utils/checkSubscription.ts:9

Check/Set push notifications subscription

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registration` | ServiceWorkerRegistration | - |
`unsubscribe` | boolean | false |

**Returns:** *Promise‹PushSubscription | null | void›*

___

###  getLocalStorageParam

▸ **getLocalStorageParam**(`key`: string, `defaultValue?`: [DefaultValue](README.md#defaultvalue)): *string | null*

Defined in src/utils/getLocalStorageParam.ts:10

Get option from local storage by defined key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | [DefaultValue](README.md#defaultvalue) |

**Returns:** *string | null*

___

### `Const` isFunction

▸ **isFunction**<**T**>(`entity`: T): *boolean*

Defined in src/utils/isFunction.ts:6

Check if entity is function

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

**Returns:** *boolean*

___

###  localStorageParamsMapper

▸ **localStorageParamsMapper**(`params`: Array‹Array‹[DefaultValue](README.md#defaultvalue)››): *Array‹string | null›*

Defined in src/utils/getLocalStorageParam.ts:31

Get options from local storage by defined keys

**Parameters:**

Name | Type |
------ | ------ |
`params` | Array‹Array‹[DefaultValue](README.md#defaultvalue)›› |

**Returns:** *Array‹string | null›*

___

###  urlBase64ToUint8Array

▸ **urlBase64ToUint8Array**(`base64String`: string): *Uint8Array*

Defined in src/utils/urlBase64ToUint8Array.ts:7

Converts base64 string to Uint8Array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base64String` | string | a public vavid key |

**Returns:** *Uint8Array*

## Object literals

### `Const` config

### ▪ **config**: *object*

Defined in src/constants/firebase.ts:2

###  apiKey

• **apiKey**: *string* = "AIzaSyBlfEue1wp844Hwz16sfBU4dNKPRw941Ng"

Defined in src/constants/firebase.ts:3

###  appId

• **appId**: *string* = "1:0000:web:aaa000000"

Defined in src/constants/firebase.ts:9

###  authDomain

• **authDomain**: *string* = "your-push-account.firebaseapp.com"

Defined in src/constants/firebase.ts:4

###  databaseURL

• **databaseURL**: *string* = "https://your-push-database.firebaseio.com"

Defined in src/constants/firebase.ts:5

###  measurementId

• **measurementId**: *string* = "G-WM24X24"

Defined in src/constants/firebase.ts:10

###  messagingSenderId

• **messagingSenderId**: *string* = "111111111"

Defined in src/constants/firebase.ts:8

###  projectId

• **projectId**: *string* = "your-push-rpoject"

Defined in src/constants/firebase.ts:6

###  storageBucket

• **storageBucket**: *string* = "your-push-storage-bucket.appspot.com"

Defined in src/constants/firebase.ts:7
