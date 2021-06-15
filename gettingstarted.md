<a id="gettingstarted-top"> </a>

# Getting Started

This section will explain how to integrate NexPlayer&#x2122; into your project.

## NexPlayer™ Integration

### Sample

Integrating NexPlayer&#x2122; into an  <a href="https://nexplayer.nexplayersdk.com/sample/index.html" download="" target="_blank">HTML5 file</a>:</p>
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
    <script src="https://nexplayer.nexplayersdk.com/latest/tizen/nexplayer.js" defer></script>
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


<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that replacing the license key is mandatory. License key should have been already sent to your inbox or you can request one from support.madrid@nexplayer.com. Also don't forget to load jquery and add the "defer" tag to the nexplayer.js loading script.</p>
</div></div>
### Step-by-Step

To integrate NexPlayer™ into your project you must complete the following steps:

- The NexPlayer™ JavaScript library should be included in the HTML file:

```html
<script src="https://nexplayer.nexplayersdk.com/latest/tizen/nexplayer.js" defer></script>
```

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that the use of https to call our library is mandatory. <br>
Also is necessary to use the "defer" tag.</p>
</div></div>

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

### Remote Controller

You can create your own custom controls for a seemless integration of NexPlayer™ into your Tizen app:

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

Navigating inside the NexPlayer™ UI can be done by shifting the focus from one element to another with the remote controller. A function can be assigned to one of the buttons of the remote controller using remote control key codes:
```js
{
    case 13:    // Enter button for Samsung Controler
    player.buttonsClickFocus();
    break;
}
```

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note the need for a <b>'break;'</b> line to exit each controller action </p>
</div></div>

All cases must be placed inside a listener to be able to operate at runtime: 
```js
document.addEventListener('keydown', function(e) {
    console.log('Key pressed ---> ' + e.keyCode);
    switch (e.keyCode) {        
        "YOUR CONTROLS HERE"            
    }
}      
```


## NexPlayer™ Configuration

There are a substantial number of customizable options for NexPlayer™ including: the name and subtitle format of the video, a logo for the company, the DRM information, a VAST link, and the thumbnail preview...

```js

    key: 'License key to validate the playback', // Mandatory
    div: document.getElementById('player'), // Mandatory
    src: 'URL video', // Mandatory
    adsDelay: number, //Optional, used to add a delay before the ad starts playing. Specified in milliseconds
    addRequestFilter: Function, //Optional, used for give filters to the drm request
    autoplay: true, // Optional
    callbacksForLogger: callback, // Optional callback called with the logger instances
    callbacksForReturn: callback, // Optional callback called with the return button
    callbackForSubtitles: callback, // Optional callback called with the subtitles instance
    callbacksForPlayer: callback, // Optional callback called with the player instances
    cast: boolean, //Optioanl, used to determines if the cast will be enabled or not
    debug: true, // Optional
    defaultLanguage: string, //Optional
    disableKeyEvents: false, // Optional
    drm: [{
        NexDRMType:'DRM Type (eg. com.widevine.alpha(', NexDRMKey: 'URI for the DRM Key', 
        NexHeaders:[{FieldName: 'Header Field Name', FiledValue: 'Header Field Value'}],
        NexCallback:OptionalDRMCallbackForFairPlay
    }], // Optional DRM information
    externalSubtitles: {"src": "URL for the subtitles file", "language": "Subtitle language"}, 
    // Optional, only WEBVTT subtitles can be used. "language" property is a string that 
    // define how the subtitle will be identified
    hideControlBarOnStart: boolean, //Optional
    hideUITime: boolean, //Optional
    improveStartUp: boolean //Optional
    logosrc: 'URL logo of the company', // Optional
    mutedAtStart: true, // Optional    
    preferredAudioCodec: Array, // This property can be used to give priority to a specific audio codec
    poster: 'URL poster', // Optional
    subtitle: 'Subtitle name of the video', // Optional
    reinitializeAfterAds: boolean, //Optional, used to avoid errors related to ads on Tizen 2020.
    resumePosition: number, // Optional, used for starting the video from the given position in seconds
    showingFullUI: true, // Optional, used for showing the player controls
	staticThumbnailsImage: string, // URI of the Image thumbnails will be fetched from (Mandatory when using static thumbs)
    staticThumbnailsVTT: string, // URI of the VTT file containing thumbnails timing and location info (Optional when using static thumbs)
    startFullscreen: true, // Optional
    startingBufferLength: 50, // Number of seconds the player will try to achieve when initializing
    thumbChunking: { // This property will only take effect if the static thumbnails were passed ("staticThumbnailsVTT")
        limit: 3, // Number of chunks whose thumbnails images are loaded
        total: 30 // Total number of chunks
    },
    title: 'Name of the Video', // Optional
    trailer: boolean,//Optional, by default is set to false. Set to true when a stream should be considered a trailer, false when not.
    type_360: boolean, //Optional, determines if the video will be a 360° video.
    useDefaultControls: true, // Optional, allows usage of remote controller
    useDynamicThumbnails: false, // Optional, none of the following properties is required
    useNewRelicTracker: boolean,
    // By default is set to false. Set to true in order to use the tracker. 
    // You need the tracker library in order to be able to use the tracker. Ask NexPlayer team for it.
    vast: 'URL with a VAST/VPAID/VMAP advertisement', // Optional

```

## Tizen Studio

While using Tizen Studio, if your app works in the simulator and it doesn't in a device nor the emulator, add the next line to your config.xml:
```xml
<access origin="*" subdomains="true"></access>

```