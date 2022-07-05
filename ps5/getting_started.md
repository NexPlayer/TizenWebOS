# Getting Started

## Sample Integration

Integrating NexPlayer into an HTML5 file:

```html
<!DOCTYPE html>
<html>
<head> 
    <!-- MANDATORY! LOAD JQUERY BY CDN OR LOCAL  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>NexPlayer</title>
    <style type="text/css">
        #player_container {
            width: 90%;
            margin: auto;
            padding-top: 50.625%; /* 16:9 Aspect Ratio 56.25 * 0.9 */
            position: relative;
        }
        @media (min-width: 75rem) {
            #player_container {
                width: 50%;
                padding-top: 28.125%; /* 16:9 Aspect Ratio 56.25 * 0.5 */
            }            
        }
        h1 {
            text-align: center;
        }
        #player {
            background-color: black;
            position: absolute;
            top: 0px;
            width: 100%;
            height: 100%;
        }
        #warning {
            background-color: red;
            text-align: center;
            display: none;
        }
    </style>
</head>

<body>
    <h1>NexPlayer for WebApps</h1>
    <div id="warning">
        <h1>Unsupported protocol</h1>
        <h3>Loading HTML using the file protocol can't be supported.</h3>
    </div>
    <div id="player_container">
        <div id="player"></div>
    </div>
    <!-- MANDATORY! LOAD NEXPLAYER WITH THE TAG "DEFER" -->
    <script src="Latest SDK version. Check 'Releases' section" defer></script>
    <script type="text/javascript">
    //Wait the document to be ready
    $( document ).ready(function() {

        nexplayer.Setup({
            key: "ENTER YOUR LICENSE KEY HERE",
            div: document.getElementById('player'),
            src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Example URL

        });
        if(window.location.protocol ==  'file') {
            document.getElementById('warning').style.display = "inherit";
        }
    })
    </script>
</body>
</html>
```


> Please note that replacing the license key is mandatory. License key should have been already sent to your inbox or you can request one from support.madrid@nexplayer.com. Also don't forget to load jquery and add the "defer" tag to the nexplayer.js loading script.

## Step-by-Step Integration Guide

To integrate NexPlayer into your project you must complete the following steps:

- The NexPlayer JavaScript library should be included in the HTML file:

```html
<script src="Latest SDK version. Check 'Releases' section" defer></script>
```

> Please note that the use of https to call our library is mandatory.<br/>Also it is necessary to use the "defer" tag.


- A div that will contain the video and the UI has to be declared:

```html
<body>
...
    <div id="player"></div>
...
</body>
```

- The player should be initialized by entering the previous div to the Setup method:

```js
nexplayer.Setup({
    key: 'ENTER YOUR LICENSE KEY HERE',
    div: document.getElementById('player'),
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
});
```

## Remote Controller

You can create your own custom controls for a seemless integration of NexPlayer into your Tizen app:

```js
document.addEventListener('keydown', function(e) {
    console.log('Key pressed ---> ' + e.keyCode);
        switch (e.keyCode) {
        case 13:    // Enter
            player.buttonsClickFocus();
            break;
        case 37: // LEFT arrow
        if (player.isPlayBackBarFocused() || !player.isControlBarOpen()) {
            if (!player.isControlBarOpen()) {
            player.toggleControlBar();
            player.focusOnPlaybackBar();
            }
            player.seek(videoElement.currentTime - 60);
        } else {
            player.buttonsPreviousFocus();
        }
        break;
        case 39: // RIGHT arrow
        if (player.isPlayBackBarFocused() || !player.isControlBarOpen()) {
            if (!player.isControlBarOpen()) {
            player.toggleControlBar();
            player.focusOnPlaybackBar();
            }
            player.seek(videoElement.currentTime + 60);
        } else {
            player.buttonsNextFocus();
        }
        break;
        case 38:    // UP arrow
        if (player.isLanguageMenuOpen()) {
            player.upSubtitle();
        } else {
            player.upFocus();
        }
        break;
        case 40:    // DOWN arrow
        if (player.isLanguageMenuOpen()) {
            player.downSubtitle();
            break;
        }

        if (!player.isControlBarOpen()) {
            //player.toggleControlBar();
            player.focusOnButtonsBar();
        } else {
            player.downFocus();
        }
        break;
        }
    });
```


#### Details

Navigating inside the NexPlayer UI can be done by shifting the focus from one element to another with the remote controller. A function can be assigned to one of the buttons of the remote controller using remote control key codes:

```js
{
    case 13:    // Enter button for Samsung Controler
    player.buttonsClickFocus();
    break;
}
```

> Please note the need for a <b>'break;'</b> line to exit each controller action

All cases must be placed inside a listener to be able to operate at runtime: 

```js
document.addEventListener('keydown', function(e) {
    console.log('Key pressed ---> ' + e.keyCode);
    switch (e.keyCode) {        
        "YOUR CONTROLS HERE"            
    }
}),      
```

## NexPlayer Configuration

There are a substantial number of customizable options for NexPlayer including: the name and subtitle format of the video, a logo for the company, the DRM information, a VAST link, and the thumbnail preview...

```js
    key: 'License key to validate the playback',
    div: document.getElementById('player'),
    src: 'URL video',
    adsMode: string,
    addRequestFilter: Function,
    adsParamsToEncode: [ e.g. "video_url_to_fetch"],
    autoplay: true,
    callbacksForLogger: callback,
    callbacksForReturn: callback,
    callbackForSubtitles: callback,
    callbacksForPlayer: callback,
    cast: boolean,
    debug: true,
    defaultLanguage: string,
    disableKeyEvents: false,
    drm: [{
        NexDRMType:'DRM Type (eg. com.widevine.alpha)', NexDRMKey: 'URI for the DRM Key', 
        NexHeaders:[{FieldName: 'Header Field Name', FieldValue: 'Header Field Value'}],
        NexCallback:OptionalDRMCallbackForFairPlay
    }],
    dynamicThumbnails: false,
    externalSubtitles: [{
        src: "Subtitles file URL",
        language: "Subtitle language",
        callback: function(e),
    },…],
    hideControlBarOnStart: boolean,
    hideUITime: boolean,
    improveStartUp: boolean,
    logosrc: 'URL logo of the company',
    mutedAtStart: true,   
    preferredAudioCodec: Array,
    preferredVideoCodec: Array,
    poster: 'URL poster', 
    reinitializeAfterAds: boolean, // Deprecated
    resumePosition: number,
    retryParameters: {
    	streaming: {
			timeout: 30000,     // timeout in ms, after which we abort
        	stallTimeout: 5000, // stall timeout in ms, after which we abort
        	connectionTimeout: 10000, // connection timeout in ms, after which we abort
        	maxTries: 2,        // the maximum number of requests before we fail
			retryDelay: 1000,   // the base delay in ms between retries
      },
      drm: {…}, // Same properties as streaming
      manifest: {…}  // Same properties as streaming
    },
    showAdsUI: true,
    showingFullUI: true,
    staticThumbnails: {
        src: 'URL of the VTT file',
        img: 'URL of the Image to fetch thumbs from',
        callback: function(e),
    },
    startFullscreen: true,
    startingBufferLength: 50,
    subtitle: 'Subtitle name of the video',
    title: 'Name of the video',
    trailer: boolean,
    useDefaultControls: true,
    useNewRelicTracker: boolean,
    vast: 'URL with a VAST/VPAID/VMAP advertisement',
    adsLoadTimeout: 2000,
    ssaiMediaTailor: {
        baseURL: string,
        playbackURL: string,
        adsParams:
        {
          "param1": string,
                    }
      },
    bitrateConfig: {startingBitrate: num , maxBitrate: num, minBitrate: num},
    pageUrl: 'https://mydomain.com',
    daiConfig: {
        ASSET_KEY : string,
        CONTENT_SOURCE_ID : string,
        VIDEO_ID : string,
      },


```

