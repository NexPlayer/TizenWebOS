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
            key: "REPLACE THIS WITH YOUR PLAYER KEY",
            div: document.getElementById('player'),
            src: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd', // Example URL

        });
        if(window.location.protocol ==  'file') {
            document.getElementById('warning').style.display = "inherit";
        }
    }
    </script>
</body>
</html>
```


<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that replacing the player key is mandatory. You can find the player key in the license section of your dashboard at <a style ="color:#5A5A5A!important" href="https://www.nexplayersdk.com/portal/portal-hub">https://www.nexplayersdk.com/portal/portal-hub</a> <br> 
Also, dont forget to load jquery and add the "defer" tag to the nexplayer.js loading script.</p>
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
    key: 'REPLACE THIS WITH YOUR PLAYER KEY',
    div: document.getElementById('player'),
    src: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd'
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
    key: 'Player key to validate the playback', // Mandatory
    div: document.getElementById('player'), // Mandatory
    src: 'URL video', // Mandatory
    poster: 'URL poster', // Optional
    name: 'Name of the Video', // Optional
    subtitle: 'Subtitle of the video', // Optional
    logosrc: 'URL logo of the company', // Optional
    callbacksForPlayer: callback, // Optional callback called with the player instances
    drm: [{
        NexDRMType:'DRM Type (eg. com.widevine.alpha(', NexDRMKey: 'URI for the DRM Key', 
        NexHeaders:[{FieldName: 'Header Field Name', FiledValue: 'Header Field Value'}],
        NexCallback:OptionalDRMCallbackForFairPlay
    }], // Optional DRM information
    vast: 'URL with a VAST/VPAID/VMAP advertisement', // Optional
    autoplay: true, // Optional
    mutedAtStart: true, // Optional    
    debug: true, // Optional
    callbacksForLogger: callback, // Optional callback called with the logger instances
    startFullscreen: true, // Optional
    disableFullscreen: true, // Optional
    showingFullUI: true, // Optional
    callbacksForReturn: callback, // Optional callback called with the return button
    disableKeyEvents: false,
    useDefaultControls: true, // Optional, to use the remote controller
    resumePosition: number, // Optional, used for staring the video from the given position in seconds
    externalSubtitles: 
    {"src": "URL for the subtitles file", "language": "Subtitle language"}, // Optional, only SRT and WEBVTT subtitles can be used. "language" property is a string that define how the subtitle will be identified
    
    
```