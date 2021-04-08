Represents the Android-specific notification options that can be included in .

<b>Signature:</b>

```typescript
export interface AndroidNotification 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [body](./firebase-admin.messaging.androidnotification.md#androidnotificationbody) | string | Body of the Android notification. When provided, overrides the body set via <code>admin.messaging.Notification</code>. |
|  [bodyLocArgs](./firebase-admin.messaging.androidnotification.md#androidnotificationbodylocargs) | string\[\] | An array of resource keys that will be used in place of the format specifiers in <code>bodyLocKey</code>. |
|  [bodyLocKey](./firebase-admin.messaging.androidnotification.md#androidnotificationbodylockey) | string | Key of the body string in the app's string resource to use to localize the body text. |
|  [channelId](./firebase-admin.messaging.androidnotification.md#androidnotificationchannelid) | string | The Android notification channel ID (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID can be received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest. |
|  [clickAction](./firebase-admin.messaging.androidnotification.md#androidnotificationclickaction) | string | Action associated with a user click on the notification. If specified, an activity with a matching Intent Filter is launched when a user clicks on the notification. |
|  [color](./firebase-admin.messaging.androidnotification.md#androidnotificationcolor) | string | Notification icon color in <code>#rrggbb</code> format. |
|  [defaultLightSettings](./firebase-admin.messaging.androidnotification.md#androidnotificationdefaultlightsettings) | boolean | If set to <code>true</code>, use the Android framework's default LED light settings for the notification. Default values are specified in \[<code>config.xml</code>\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If <code>default_light_settings</code> is set to <code>true</code> and <code>light_settings</code> is also set, the user-specified <code>light_settings</code> is used instead of the default value. |
|  [defaultSound](./firebase-admin.messaging.androidnotification.md#androidnotificationdefaultsound) | boolean | If set to <code>true</code>, use the Android framework's default sound for the notification. Default values are specified in \[<code>config.xml</code>\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). |
|  [defaultVibrateTimings](./firebase-admin.messaging.androidnotification.md#androidnotificationdefaultvibratetimings) | boolean | If set to <code>true</code>, use the Android framework's default vibrate pattern for the notification. Default values are specified in \[<code>config.xml</code>\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If <code>default_vibrate_timings</code> is set to <code>true</code> and <code>vibrate_timings</code> is also set, the default value is used instead of the user-specified <code>vibrate_timings</code>. |
|  [eventTimestamp](./firebase-admin.messaging.androidnotification.md#androidnotificationeventtimestamp) | Date | For notifications that inform users about events with an absolute time reference, sets the time that the event in the notification occurred. Notifications in the panel are sorted by this time. |
|  [icon](./firebase-admin.messaging.androidnotification.md#androidnotificationicon) | string | Icon resource for the Android notification. |
|  [imageUrl](./firebase-admin.messaging.androidnotification.md#androidnotificationimageurl) | string | URL of an image to be displayed in the notification. |
|  [lightSettings](./firebase-admin.messaging.androidnotification.md#androidnotificationlightsettings) | [LightSettings](./firebase-admin.messaging.lightsettings.md#lightsettings_interface) | Settings to control the notification's LED blinking rate and color if LED is available on the device. The total blinking time is controlled by the OS. |
|  [localOnly](./firebase-admin.messaging.androidnotification.md#androidnotificationlocalonly) | boolean | Sets whether or not this notification is relevant only to the current device. Some notifications can be bridged to other devices for remote display, such as a Wear OS watch. This hint can be set to recommend this notification not be bridged. See \[Wear OS guides\](https://developer.android.com/training/wearables/notifications/bridger\#existing-method-of-preventing-bridging) |
|  [notificationCount](./firebase-admin.messaging.androidnotification.md#androidnotificationnotificationcount) | number | Sets the number of items this notification represents. May be displayed as a badge count for Launchers that support badging. See \[<code>NotificationBadge</code>(https://developer.android.com/training/notify-user/badges). For example, this might be useful if you're using just one notification to represent multiple new messages but you want the count here to represent the number of total new messages. If zero or unspecified, systems that support badging use the default, which is to increment a number displayed on the long-press menu each time a new notification arrives. |
|  [priority](./firebase-admin.messaging.androidnotification.md#androidnotificationpriority) | ('min' \| 'low' \| 'default' \| 'high' \| 'max') | Sets the relative priority for this notification. Low-priority notifications may be hidden from the user in certain situations. Note this priority differs from <code>AndroidMessagePriority</code>. This priority is processed by the client after the message has been delivered. Whereas <code>AndroidMessagePriority</code> is an FCM concept that controls when the message is delivered. |
|  [sound](./firebase-admin.messaging.androidnotification.md#androidnotificationsound) | string | File name of the sound to be played when the device receives the notification. |
|  [sticky](./firebase-admin.messaging.androidnotification.md#androidnotificationsticky) | boolean | When set to <code>false</code> or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to <code>true</code>, the notification persists even when the user clicks it. |
|  [tag](./firebase-admin.messaging.androidnotification.md#androidnotificationtag) | string | Notification tag. This is an identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. |
|  [ticker](./firebase-admin.messaging.androidnotification.md#androidnotificationticker) | string | Sets the "ticker" text, which is sent to accessibility services. Prior to API level 21 (Lollipop), sets the text that is displayed in the status bar when the notification first arrives. |
|  [title](./firebase-admin.messaging.androidnotification.md#androidnotificationtitle) | string | Title of the Android notification. When provided, overrides the title set via <code>admin.messaging.Notification</code>. |
|  [titleLocArgs](./firebase-admin.messaging.androidnotification.md#androidnotificationtitlelocargs) | string\[\] | An array of resource keys that will be used in place of the format specifiers in <code>titleLocKey</code>. |
|  [titleLocKey](./firebase-admin.messaging.androidnotification.md#androidnotificationtitlelockey) | string | Key of the title string in the app's string resource to use to localize the title text. |
|  [vibrateTimingsMillis](./firebase-admin.messaging.androidnotification.md#androidnotificationvibratetimingsmillis) | number\[\] | Sets the vibration pattern to use. Pass in an array of milliseconds to turn the vibrator on or off. The first value indicates the duration to wait before turning the vibrator on. The next value indicates the duration to keep the vibrator on. Subsequent values alternate between duration to turn the vibrator off and to turn the vibrator on. If <code>vibrate_timings</code> is set and <code>default_vibrate_timings</code> is set to <code>true</code>, the default value is used instead of the user-specified <code>vibrate_timings</code>. |
|  [visibility](./firebase-admin.messaging.androidnotification.md#androidnotificationvisibility) | ('private' \| 'public' \| 'secret') | Sets the visibility of the notification. Must be either <code>private</code>, <code>public</code>, or <code>secret</code>. If unspecified, defaults to <code>private</code>. |

## AndroidNotification.body

Body of the Android notification. When provided, overrides the body set via `admin.messaging.Notification`<!-- -->.

<b>Signature:</b>

```typescript
body?: string;
```

## AndroidNotification.bodyLocArgs

An array of resource keys that will be used in place of the format specifiers in `bodyLocKey`<!-- -->.

<b>Signature:</b>

```typescript
bodyLocArgs?: string[];
```

## AndroidNotification.bodyLocKey

Key of the body string in the app's string resource to use to localize the body text.

<b>Signature:</b>

```typescript
bodyLocKey?: string;
```

## AndroidNotification.channelId

The Android notification channel ID (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID can be received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.

<b>Signature:</b>

```typescript
channelId?: string;
```

## AndroidNotification.clickAction

Action associated with a user click on the notification. If specified, an activity with a matching Intent Filter is launched when a user clicks on the notification.

<b>Signature:</b>

```typescript
clickAction?: string;
```

## AndroidNotification.color

Notification icon color in `#rrggbb` format.

<b>Signature:</b>

```typescript
color?: string;
```

## AndroidNotification.defaultLightSettings

If set to `true`<!-- -->, use the Android framework's default LED light settings for the notification. Default values are specified in \[`config.xml`<!-- -->\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_light_settings` is set to `true` and `light_settings` is also set, the user-specified `light_settings` is used instead of the default value.

<b>Signature:</b>

```typescript
defaultLightSettings?: boolean;
```

## AndroidNotification.defaultSound

If set to `true`<!-- -->, use the Android framework's default sound for the notification. Default values are specified in \[`config.xml`<!-- -->\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).

<b>Signature:</b>

```typescript
defaultSound?: boolean;
```

## AndroidNotification.defaultVibrateTimings

If set to `true`<!-- -->, use the Android framework's default vibrate pattern for the notification. Default values are specified in \[`config.xml`<!-- -->\](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_vibrate_timings` is set to `true` and `vibrate_timings` is also set, the default value is used instead of the user-specified `vibrate_timings`<!-- -->.

<b>Signature:</b>

```typescript
defaultVibrateTimings?: boolean;
```

## AndroidNotification.eventTimestamp

For notifications that inform users about events with an absolute time reference, sets the time that the event in the notification occurred. Notifications in the panel are sorted by this time.

<b>Signature:</b>

```typescript
eventTimestamp?: Date;
```

## AndroidNotification.icon

Icon resource for the Android notification.

<b>Signature:</b>

```typescript
icon?: string;
```

## AndroidNotification.imageUrl

URL of an image to be displayed in the notification.

<b>Signature:</b>

```typescript
imageUrl?: string;
```

## AndroidNotification.lightSettings

Settings to control the notification's LED blinking rate and color if LED is available on the device. The total blinking time is controlled by the OS.

<b>Signature:</b>

```typescript
lightSettings?: LightSettings;
```

## AndroidNotification.localOnly

Sets whether or not this notification is relevant only to the current device. Some notifications can be bridged to other devices for remote display, such as a Wear OS watch. This hint can be set to recommend this notification not be bridged. See \[Wear OS guides\](https://developer.android.com/training/wearables/notifications/bridger\#existing-method-of-preventing-bridging)

<b>Signature:</b>

```typescript
localOnly?: boolean;
```

## AndroidNotification.notificationCount

Sets the number of items this notification represents. May be displayed as a badge count for Launchers that support badging. See \[`NotificationBadge`<!-- -->(https://developer.android.com/training/notify-user/badges). For example, this might be useful if you're using just one notification to represent multiple new messages but you want the count here to represent the number of total new messages. If zero or unspecified, systems that support badging use the default, which is to increment a number displayed on the long-press menu each time a new notification arrives.

<b>Signature:</b>

```typescript
notificationCount?: number;
```

## AndroidNotification.priority

Sets the relative priority for this notification. Low-priority notifications may be hidden from the user in certain situations. Note this priority differs from `AndroidMessagePriority`<!-- -->. This priority is processed by the client after the message has been delivered. Whereas `AndroidMessagePriority` is an FCM concept that controls when the message is delivered.

<b>Signature:</b>

```typescript
priority?: ('min' | 'low' | 'default' | 'high' | 'max');
```

## AndroidNotification.sound

File name of the sound to be played when the device receives the notification.

<b>Signature:</b>

```typescript
sound?: string;
```

## AndroidNotification.sticky

When set to `false` or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to `true`<!-- -->, the notification persists even when the user clicks it.

<b>Signature:</b>

```typescript
sticky?: boolean;
```

## AndroidNotification.tag

Notification tag. This is an identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification.

<b>Signature:</b>

```typescript
tag?: string;
```

## AndroidNotification.ticker

Sets the "ticker" text, which is sent to accessibility services. Prior to API level 21 (Lollipop), sets the text that is displayed in the status bar when the notification first arrives.

<b>Signature:</b>

```typescript
ticker?: string;
```

## AndroidNotification.title

Title of the Android notification. When provided, overrides the title set via `admin.messaging.Notification`<!-- -->.

<b>Signature:</b>

```typescript
title?: string;
```

## AndroidNotification.titleLocArgs

An array of resource keys that will be used in place of the format specifiers in `titleLocKey`<!-- -->.

<b>Signature:</b>

```typescript
titleLocArgs?: string[];
```

## AndroidNotification.titleLocKey

Key of the title string in the app's string resource to use to localize the title text.

<b>Signature:</b>

```typescript
titleLocKey?: string;
```

## AndroidNotification.vibrateTimingsMillis

Sets the vibration pattern to use. Pass in an array of milliseconds to turn the vibrator on or off. The first value indicates the duration to wait before turning the vibrator on. The next value indicates the duration to keep the vibrator on. Subsequent values alternate between duration to turn the vibrator off and to turn the vibrator on. If `vibrate_timings` is set and `default_vibrate_timings` is set to `true`<!-- -->, the default value is used instead of the user-specified `vibrate_timings`<!-- -->.

<b>Signature:</b>

```typescript
vibrateTimingsMillis?: number[];
```

## AndroidNotification.visibility

Sets the visibility of the notification. Must be either `private`<!-- -->, `public`<!-- -->, or `secret`<!-- -->. If unspecified, defaults to `private`<!-- -->.

<b>Signature:</b>

```typescript
visibility?: ('private' | 'public' | 'secret');
```
