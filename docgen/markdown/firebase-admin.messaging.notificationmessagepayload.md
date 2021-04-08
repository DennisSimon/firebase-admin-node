Interface representing an FCM legacy API notification message payload. Notification messages let developers send up to 4KB of predefined key-value pairs. Accepted keys are outlined below.

See \[Build send requests\](/docs/cloud-messaging/send-message) for code samples and detailed documentation.

<b>Signature:</b>

```typescript
export interface NotificationMessagePayload 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [badge](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadbadge) | string | The value of the badge on the home screen app icon.<!-- -->If not specified, the badge is not changed.<!-- -->If set to <code>0</code>, the badge is removed.<!-- -->\*\*Platforms:\*\* iOS |
|  [body](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadbody) | string | The notification's body text.<!-- -->\*\*Platforms:\*\* iOS, Android, Web |
|  [bodyLocArgs](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadbodylocargs) | string | Variable string values to be used in place of the format specifiers in <code>body_loc_key</code> to use to localize the body text to the user's current localization.<!-- -->The value should be a stringified JSON array.<!-- -->\*\*iOS:\*\* Corresponds to <code>loc-args</code> in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.<!-- -->\*\*Android:\*\* See \[Formatting and Styling\](http://developer.android.com/guide/topics/resources/string-resource.html\#FormattingAndStyling) for more information.<!-- -->\*\*Platforms:\*\* iOS, Android |
|  [bodyLocKey](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadbodylockey) | string | The key to the body string in the app's string resources to use to localize the body text to the user's current localization.<!-- -->\*\*iOS:\*\* Corresponds to <code>loc-key</code> in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.<!-- -->\*\*Android:\*\* See \[String Resources\](http://developer.android.com/guide/topics/resources/string-resource.html) \* for more information.<!-- -->\*\*Platforms:\*\* iOS, Android |
|  [clickAction](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadclickaction) | string | Action associated with a user click on the notification. If specified, an activity with a matching Intent Filter is launched when a user clicks on the notification.<!-- -->\* \*\*Platforms:\*\* Android |
|  [color](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadcolor) | string | The notification icon's color, expressed in <code>#rrggbb</code> format.<!-- -->\*\*Platforms:\*\* Android |
|  [icon](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadicon) | string | The notification's icon.<!-- -->\*\*Android:\*\* Sets the notification icon to <code>myicon</code> for drawable resource <code>myicon</code>. If you don't send this key in the request, FCM displays the launcher icon specified in your app manifest.<!-- -->\*\*Web:\*\* The URL to use for the notification's icon.<!-- -->\*\*Platforms:\*\* Android, Web |
|  [sound](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadsound) | string | The sound to be played when the device receives a notification. Supports "default" for the default notification sound of the device or the filename of a sound resource bundled in the app. Sound files must reside in <code>/res/raw/</code>.<!-- -->\*\*Platforms:\*\* Android |
|  [tag](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadtag) | string | Identifier used to replace existing notifications in the notification drawer.<!-- -->If not specified, each request creates a new notification.<!-- -->If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.<!-- -->\*\*Platforms:\*\* Android |
|  [title](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadtitle) | string | The notification's title.<!-- -->\*\*Platforms:\*\* iOS, Android, Web |
|  [titleLocArgs](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadtitlelocargs) | string | Variable string values to be used in place of the format specifiers in <code>title_loc_key</code> to use to localize the title text to the user's current localization.<!-- -->The value should be a stringified JSON array.<!-- -->\*\*iOS:\*\* Corresponds to <code>title-loc-args</code> in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.<!-- -->\*\*Android:\*\* See \[Formatting and Styling\](http://developer.android.com/guide/topics/resources/string-resource.html\#FormattingAndStyling) for more information.<!-- -->\*\*Platforms:\*\* iOS, Android |
|  [titleLocKey](./firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayloadtitlelockey) | string | The key to the title string in the app's string resources to use to localize the title text to the user's current localization.<!-- -->\*\*iOS:\*\* Corresponds to <code>title-loc-key</code> in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.<!-- -->\*\*Android:\*\* See \[String Resources\](http://developer.android.com/guide/topics/resources/string-resource.html) for more information.<!-- -->\*\*Platforms:\*\* iOS, Android |

## NotificationMessagePayload.badge

The value of the badge on the home screen app icon.

If not specified, the badge is not changed.

If set to `0`<!-- -->, the badge is removed.

\*\*Platforms:\*\* iOS

<b>Signature:</b>

```typescript
badge?: string;
```

## NotificationMessagePayload.body

The notification's body text.

\*\*Platforms:\*\* iOS, Android, Web

<b>Signature:</b>

```typescript
body?: string;
```

## NotificationMessagePayload.bodyLocArgs

Variable string values to be used in place of the format specifiers in `body_loc_key` to use to localize the body text to the user's current localization.

The value should be a stringified JSON array.

\*\*iOS:\*\* Corresponds to `loc-args` in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.

\*\*Android:\*\* See \[Formatting and Styling\](http://developer.android.com/guide/topics/resources/string-resource.html\#FormattingAndStyling) for more information.

\*\*Platforms:\*\* iOS, Android

<b>Signature:</b>

```typescript
bodyLocArgs?: string;
```

## NotificationMessagePayload.bodyLocKey

The key to the body string in the app's string resources to use to localize the body text to the user's current localization.

\*\*iOS:\*\* Corresponds to `loc-key` in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.

\*\*Android:\*\* See \[String Resources\](http://developer.android.com/guide/topics/resources/string-resource.html) \* for more information.

\*\*Platforms:\*\* iOS, Android

<b>Signature:</b>

```typescript
bodyLocKey?: string;
```

## NotificationMessagePayload.clickAction

Action associated with a user click on the notification. If specified, an activity with a matching Intent Filter is launched when a user clicks on the notification.

\* \*\*Platforms:\*\* Android

<b>Signature:</b>

```typescript
clickAction?: string;
```

## NotificationMessagePayload.color

The notification icon's color, expressed in `#rrggbb` format.

\*\*Platforms:\*\* Android

<b>Signature:</b>

```typescript
color?: string;
```

## NotificationMessagePayload.icon

The notification's icon.

\*\*Android:\*\* Sets the notification icon to `myicon` for drawable resource `myicon`<!-- -->. If you don't send this key in the request, FCM displays the launcher icon specified in your app manifest.

\*\*Web:\*\* The URL to use for the notification's icon.

\*\*Platforms:\*\* Android, Web

<b>Signature:</b>

```typescript
icon?: string;
```

## NotificationMessagePayload.sound

The sound to be played when the device receives a notification. Supports "default" for the default notification sound of the device or the filename of a sound resource bundled in the app. Sound files must reside in `/res/raw/`<!-- -->.

\*\*Platforms:\*\* Android

<b>Signature:</b>

```typescript
sound?: string;
```

## NotificationMessagePayload.tag

Identifier used to replace existing notifications in the notification drawer.

If not specified, each request creates a new notification.

If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.

\*\*Platforms:\*\* Android

<b>Signature:</b>

```typescript
tag?: string;
```

## NotificationMessagePayload.title

The notification's title.

\*\*Platforms:\*\* iOS, Android, Web

<b>Signature:</b>

```typescript
title?: string;
```

## NotificationMessagePayload.titleLocArgs

Variable string values to be used in place of the format specifiers in `title_loc_key` to use to localize the title text to the user's current localization.

The value should be a stringified JSON array.

\*\*iOS:\*\* Corresponds to `title-loc-args` in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.

\*\*Android:\*\* See \[Formatting and Styling\](http://developer.android.com/guide/topics/resources/string-resource.html\#FormattingAndStyling) for more information.

\*\*Platforms:\*\* iOS, Android

<b>Signature:</b>

```typescript
titleLocArgs?: string;
```

## NotificationMessagePayload.titleLocKey

The key to the title string in the app's string resources to use to localize the title text to the user's current localization.

\*\*iOS:\*\* Corresponds to `title-loc-key` in the APNs payload. See \[Payload Key Reference\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html) and \[Localizing the Content of Your Remote Notifications\](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html\#//apple\_ref/doc/uid/TP40008194-CH10-SW9) for more information.

\*\*Android:\*\* See \[String Resources\](http://developer.android.com/guide/topics/resources/string-resource.html) for more information.

\*\*Platforms:\*\* iOS, Android

<b>Signature:</b>

```typescript
titleLocKey?: string;
```
