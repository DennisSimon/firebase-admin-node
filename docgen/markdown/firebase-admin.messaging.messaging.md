Messaging service bound to the provided app.

<b>Signature:</b>

```typescript
export declare class Messaging 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(app)](./firebase-admin.messaging.messaging.md#messagingconstructor) |  | Gets the  service for the current app. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [app](./firebase-admin.messaging.messaging.md#messagingapp) |  | App | The  associated with the current <code>Messaging</code> service instance. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [send(message, dryRun)](./firebase-admin.messaging.messaging.md#messagingsend) |  | Sends the given message via FCM. |
|  [sendAll(messages, dryRun)](./firebase-admin.messaging.messaging.md#messagingsendall) |  | Sends all the messages in the given array via Firebase Cloud Messaging. Employs batching to send the entire list as a single RPC call. Compared to the <code>send()</code> method, this method is a significantly more efficient way to send multiple messages.<!-- -->The responses list obtained from the return value corresponds to the order of tokens in the <code>MulticastMessage</code>. An error from this method indicates a total failure -- i.e. none of the messages in the list could be sent. Partial failures are indicated by a <code>BatchResponse</code> return value. |
|  [sendMulticast(message, dryRun)](./firebase-admin.messaging.messaging.md#messagingsendmulticast) |  | Sends the given multicast message to all the FCM registration tokens specified in it.<!-- -->This method uses the <code>sendAll()</code> API under the hood to send the given message to all the target recipients. The responses list obtained from the return value corresponds to the order of tokens in the <code>MulticastMessage</code>. An error from this method indicates a total failure -- i.e. the message was not sent to any of the tokens in the list. Partial failures are indicated by a <code>BatchResponse</code> return value. |
|  [sendToCondition(condition, payload, options)](./firebase-admin.messaging.messaging.md#messagingsendtocondition) |  | Sends an FCM message to a condition.<!-- -->See \[Send to a condition\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_condition) for code samples and detailed documentation. |
|  [sendToDevice(registrationTokenOrTokens, payload, options)](./firebase-admin.messaging.messaging.md#messagingsendtodevice) |  | Sends an FCM message to a single device corresponding to the provided registration token.<!-- -->See \[Send to individual devices\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_individual\_devices) for code samples and detailed documentation. Takes either a <code>registrationToken</code> to send to a single device or a <code>registrationTokens</code> parameter containing an array of tokens to send to multiple devices. |
|  [sendToDeviceGroup(notificationKey, payload, options)](./firebase-admin.messaging.messaging.md#messagingsendtodevicegroup) |  | Sends an FCM message to a device group corresponding to the provided notification key.<!-- -->See \[Send to a device group\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_device\_group) for code samples and detailed documentation. |
|  [sendToTopic(topic, payload, options)](./firebase-admin.messaging.messaging.md#messagingsendtotopic) |  | Sends an FCM message to a topic.<!-- -->See \[Send to a topic\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_topic) for code samples and detailed documentation. |
|  [subscribeToTopic(registrationTokenOrTokens, topic)](./firebase-admin.messaging.messaging.md#messagingsubscribetotopic) |  | Subscribes a device to an FCM topic.<!-- -->See \[Subscribe to a topic\](/docs/cloud-messaging/manage-topics\#suscribe\_and\_unsubscribe\_using\_the) for code samples and detailed documentation. Optionally, you can provide an array of tokens to subscribe multiple devices. |
|  [unsubscribeFromTopic(registrationTokenOrTokens, topic)](./firebase-admin.messaging.messaging.md#messagingunsubscribefromtopic) |  | Unsubscribes a device from an FCM topic.<!-- -->See \[Unsubscribe from a topic\](/docs/cloud-messaging/admin/manage-topic-subscriptions\#unsubscribe\_from\_a\_topic) for code samples and detailed documentation. Optionally, you can provide an array of tokens to unsubscribe multiple devices. |

## Messaging.(constructor)

Gets the  service for the current app.

<b>Signature:</b>

```typescript
constructor(app: App);
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  app | App |  |

### Example


```javascript
var messaging = app.messaging();
// The above is shorthand for:
// var messaging = admin.messaging(app);

```
 The `Messaging` service for the current app.

## Messaging.app

The  associated with the current `Messaging` service instance.

<b>Signature:</b>

```typescript
get app(): App;
```

### Example


```javascript
var app = messaging.app;

```

## Messaging.send()

Sends the given message via FCM.

<b>Signature:</b>

```typescript
send(message: Message, dryRun?: boolean): Promise<string>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  message | [Message](./firebase-admin.messaging.md#message) | The message payload. |
|  dryRun | boolean | Whether to send the message in the dry-run (validation only) mode.  A promise fulfilled with a unique message ID string after the message has been successfully handed off to the FCM service for delivery. |

<b>Returns:</b>

Promise&lt;string&gt;

## Messaging.sendAll()

Sends all the messages in the given array via Firebase Cloud Messaging. Employs batching to send the entire list as a single RPC call. Compared to the `send()` method, this method is a significantly more efficient way to send multiple messages.

The responses list obtained from the return value corresponds to the order of tokens in the `MulticastMessage`<!-- -->. An error from this method indicates a total failure -- i.e. none of the messages in the list could be sent. Partial failures are indicated by a `BatchResponse` return value.

<b>Signature:</b>

```typescript
sendAll(messages: Message[], dryRun?: boolean): Promise<BatchResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  messages | [Message](./firebase-admin.messaging.md#message)<!-- -->\[\] | A non-empty array containing up to 500 messages. |
|  dryRun | boolean | Whether to send the messages in the dry-run (validation only) mode.  A Promise fulfilled with an object representing the result of the send operation. |

<b>Returns:</b>

Promise&lt;[BatchResponse](./firebase-admin.messaging.batchresponse.md#batchresponse_interface)<!-- -->&gt;

## Messaging.sendMulticast()

Sends the given multicast message to all the FCM registration tokens specified in it.

This method uses the `sendAll()` API under the hood to send the given message to all the target recipients. The responses list obtained from the return value corresponds to the order of tokens in the `MulticastMessage`<!-- -->. An error from this method indicates a total failure -- i.e. the message was not sent to any of the tokens in the list. Partial failures are indicated by a `BatchResponse` return value.

<b>Signature:</b>

```typescript
sendMulticast(message: MulticastMessage, dryRun?: boolean): Promise<BatchResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  message | [MulticastMessage](./firebase-admin.messaging.multicastmessage.md#multicastmessage_interface) | A multicast message containing up to 500 tokens. |
|  dryRun | boolean | Whether to send the message in the dry-run (validation only) mode.  A Promise fulfilled with an object representing the result of the send operation. |

<b>Returns:</b>

Promise&lt;[BatchResponse](./firebase-admin.messaging.batchresponse.md#batchresponse_interface)<!-- -->&gt;

## Messaging.sendToCondition()

Sends an FCM message to a condition.

See \[Send to a condition\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_condition) for code samples and detailed documentation.

<b>Signature:</b>

```typescript
sendToCondition(condition: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingConditionResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  condition | string | The condition determining to which topics to send the message. |
|  payload | [MessagingPayload](./firebase-admin.messaging.messagingpayload.md#messagingpayload_interface) | The message payload. |
|  options | [MessagingOptions](./firebase-admin.messaging.messagingoptions.md#messagingoptions_interface) | Optional options to alter the message. A promise fulfilled with the server's response after the message has been sent. |

<b>Returns:</b>

Promise&lt;[MessagingConditionResponse](./firebase-admin.messaging.messagingconditionresponse.md#messagingconditionresponse_interface)<!-- -->&gt;

## Messaging.sendToDevice()

Sends an FCM message to a single device corresponding to the provided registration token.

See \[Send to individual devices\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_individual\_devices) for code samples and detailed documentation. Takes either a `registrationToken` to send to a single device or a `registrationTokens` parameter containing an array of tokens to send to multiple devices.

<b>Signature:</b>

```typescript
sendToDevice(registrationTokenOrTokens: string | string[], payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingDevicesResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  registrationTokenOrTokens | string \| string\[\] |  |
|  payload | [MessagingPayload](./firebase-admin.messaging.messagingpayload.md#messagingpayload_interface) | The message payload. |
|  options | [MessagingOptions](./firebase-admin.messaging.messagingoptions.md#messagingoptions_interface) | Optional options to alter the message. A promise fulfilled with the server's response after the message has been sent. |

<b>Returns:</b>

Promise&lt;[MessagingDevicesResponse](./firebase-admin.messaging.messagingdevicesresponse.md#messagingdevicesresponse_interface)<!-- -->&gt;

## Messaging.sendToDeviceGroup()

Sends an FCM message to a device group corresponding to the provided notification key.

See \[Send to a device group\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_device\_group) for code samples and detailed documentation.

<b>Signature:</b>

```typescript
sendToDeviceGroup(notificationKey: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingDeviceGroupResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  notificationKey | string | The notification key for the device group to which to send the message. |
|  payload | [MessagingPayload](./firebase-admin.messaging.messagingpayload.md#messagingpayload_interface) | The message payload. |
|  options | [MessagingOptions](./firebase-admin.messaging.messagingoptions.md#messagingoptions_interface) | Optional options to alter the message. A promise fulfilled with the server's response after the message has been sent. |

<b>Returns:</b>

Promise&lt;[MessagingDeviceGroupResponse](./firebase-admin.messaging.messagingdevicegroupresponse.md#messagingdevicegroupresponse_interface)<!-- -->&gt;

## Messaging.sendToTopic()

Sends an FCM message to a topic.

See \[Send to a topic\](/docs/cloud-messaging/admin/legacy-fcm\#send\_to\_a\_topic) for code samples and detailed documentation.

<b>Signature:</b>

```typescript
sendToTopic(topic: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingTopicResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  topic | string | The topic to which to send the message. |
|  payload | [MessagingPayload](./firebase-admin.messaging.messagingpayload.md#messagingpayload_interface) | The message payload. |
|  options | [MessagingOptions](./firebase-admin.messaging.messagingoptions.md#messagingoptions_interface) | Optional options to alter the message. A promise fulfilled with the server's response after the message has been sent. |

<b>Returns:</b>

Promise&lt;[MessagingTopicResponse](./firebase-admin.messaging.messagingtopicresponse.md#messagingtopicresponse_interface)<!-- -->&gt;

## Messaging.subscribeToTopic()

Subscribes a device to an FCM topic.

See \[Subscribe to a topic\](/docs/cloud-messaging/manage-topics\#suscribe\_and\_unsubscribe\_using\_the) for code samples and detailed documentation. Optionally, you can provide an array of tokens to subscribe multiple devices.

<b>Signature:</b>

```typescript
subscribeToTopic(registrationTokenOrTokens: string | string[], topic: string): Promise<MessagingTopicManagementResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  registrationTokenOrTokens | string \| string\[\] |  |
|  topic | string | The topic to which to subscribe. A promise fulfilled with the server's response after the device has been subscribed to the topic. |

<b>Returns:</b>

Promise&lt;[MessagingTopicManagementResponse](./firebase-admin.messaging.messagingtopicmanagementresponse.md#messagingtopicmanagementresponse_interface)<!-- -->&gt;

## Messaging.unsubscribeFromTopic()

Unsubscribes a device from an FCM topic.

See \[Unsubscribe from a topic\](/docs/cloud-messaging/admin/manage-topic-subscriptions\#unsubscribe\_from\_a\_topic) for code samples and detailed documentation. Optionally, you can provide an array of tokens to unsubscribe multiple devices.

<b>Signature:</b>

```typescript
unsubscribeFromTopic(registrationTokenOrTokens: string | string[], topic: string): Promise<MessagingTopicManagementResponse>;
```

### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  registrationTokenOrTokens | string \| string\[\] |  |
|  topic | string | The topic from which to unsubscribe. A promise fulfilled with the server's response after the device has been unsubscribed from the topic. |

<b>Returns:</b>

Promise&lt;[MessagingTopicManagementResponse](./firebase-admin.messaging.messagingtopicmanagementresponse.md#messagingtopicmanagementresponse_interface)<!-- -->&gt;

