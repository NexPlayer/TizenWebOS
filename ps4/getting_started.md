
# Getting Started

> :warning: Since the version 1.2.6 it is mandatory to use a WebMAF version higger or equal than 2.6.0.

### Sample Integration

Integrating NexPlayer into an HTML5 file:

```html

<!DOCTYPE html>
<html>

<head>
    <!-- MANDATORY! LOAD JQUERY BY CDN OR LOCAL  -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Nexplayer"/>
    <title>NexPlayer</title>
</head>

 <style>
    #player_container {
        width: 600px;
        height: 100%;
        margin: auto;
        position: absolute;
    }
 </style>

 <body>
  <div id="player"></div>
  <script src="Latest SDK version."></script>
 </body>

 <script type="text/javascript">
    var player = new nexplayer.NexPlayer();

    player.init({
        key: 'ENTER YOUR LICENSE KEY HERE',
        div: document.getElementById("player"),
        src: 'https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd',
        autoplay: true,
    });
</script>

</html>
```

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that replacing the license key is mandatory. License key should have been already sent to your inbox or you can request one from support.madrid@nexplayer.com. </p>
</div></div>

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>As for PS5, in order to be able to use NexPlayer's SDK for PS4, a JSON file is needed. This JSON file must be hosted in the root of the domain where the application is hosted. For example, if the app is hosted in https://example.com/app the JSON file must be accessible from the path https://example.com/userAppId.json.

Please, contact NexPlayer's support (supportmadrid@nexplayer.com) to request this file.</p>
</div></div>

### Step-by-Step Integration Guide

To integrate NexPlayer™ into your project you must complete the following steps:

- The NexPlayer™ JavaScript library should be included in the HTML file:

```html
<script src="Latest SDK version." ></script>
```

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that the use of https to call our library is mandatory. <br>
</div></div>

- A div that will contain the video and the UI has to be declared:
```html
<body>
...
    <div id="player"></div>
...
</body>
```
- The player should be initialized by entering the previous div to the init method:
```js
    var player = new nexplayer.NexPlayer();
    player.init({
        key: 'ENTER YOUR LICENSE KEY HERE',
        div: document.getElementById("player"),
        src: 'https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd',
        autoplay: true,
    });
```

## NexPlayer Configuration

There are a substantial number of customizable options for NexPlayer™ including: the name and subtitle format of the video, a logo for the company, the DRM information, a VAST link, and the thumbnail preview...

```js
    key: 'License key to validate the playback', // Mandatory
    div: document.getElementById('player'), // Mandatory
    src: 'URL video', // Mandatory
    adsParamsToEncode: Array<string>, // Optional, used to encode adURL parameters
    autoplay: true, // Optional
    callbacksForPlayer: callback, // Optional callback called with the player instances
    debug: true, // Optional
    drm: [{
        keySystem: 'DRM Type (eg. com.widevine.alpha)', license: 'URI for the DRM Key',
        customData: [{fieldName: 'Header Field Name', value: 'Header Field Value'}],
        NexCallback: OptionalDRMCallbackForFairPlay
    }], // Optional DRM information
    thumbnails: {
         canvas: HTMLCanvasElement; // Optional
         urlVtt: "VTT URL"; // Optional
         urlImg: "string"; // Optional
         chunkLimit: number; // Optional
         chunkTotal: number; // Optional
      }, // Optional
    externalSubtitles: {
        src: "URL for the subtitles file",
        language: "Subtitle language",
    }, // Optional
    mutedAtStart: true, // Optional
    resumePosition: number, // Optional, used for starting the video from the given position in seconds.
    trailer: boolean,// Optional, by default is set to false. Set to true when a stream should be considered a trailer.
    useNewRelicTracker: boolean,
    // You need the tracker library in order to be able to use the tracker. Ask NexPlayer team for it.
    vast: 'URL with a VAST/VPAID/VMAP advertisement', // Optional
    adURL: string, // Optional
    captionDisplayer: ICaptionsDisplayer, // Optional
```
