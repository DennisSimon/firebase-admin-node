Represents the payload of an APNs message. Mainly consists of the `aps` dictionary. But may also contain other arbitrary custom keys.

<b>Signature:</b>

```typescript
export interface ApnsPayload 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [aps](./firebase-admin.messaging.apnspayload.md#apnspayloadaps) | [Aps](./firebase-admin.messaging.aps.md#aps_interface) | The <code>aps</code> dictionary to be included in the message. |

## ApnsPayload.aps

The `aps` dictionary to be included in the message.

<b>Signature:</b>

```typescript
aps: Aps;
```
