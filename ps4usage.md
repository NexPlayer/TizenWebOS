<a id="ps4usage-top"> </a>

# PlayStation 4 Usage

This section explains how to integrate NexPlayer&#x2122; for PS4 into your project.

## Latest release

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.9_20210525/nexplayer.js
```

## NexPlayer™ Integration

### Sample

Integrating NexPlayer&#x2122; into an  <a href="https://nexplayer.nexplayersdk.com/sample/index.html" download="" target="_blank">HTML5 file</a>:</p>

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
  <script src=""Latest SDK version."></script>
 </body>

 <script type="text/javascript">
    var player = new nexplayer.NexPlayer();

    player.init({
        key: 'ENTER YOUR LICENSE KEY HERE',
        div: document.getElementById("player"),
        src: 'https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd',
    });
</script>

</html>
```

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that replacing the license key is mandatory. License key should have been already sent to your inbox or you can request one from support.madrid@nexplayer.com. </p>
</div></div>

### Step-by-Step

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
    });
```

## NexPlayer™ Configuration

There are a substantial number of customizable options for NexPlayer™ including: the name and subtitle format of the video, a logo for the company, the DRM information, a VAST link, and the thumbnail preview...

```js
    key: 'License key to validate the playback', // Mandatory
    div: document.getElementById('player'), // Mandatory
    src: 'URL video', // Mandatory
    addRequestFilter: Function, // Optional, used for give filters to the drm request
    autoplay: true, // Optional
    callbacksForPlayer: callback, // Optional callback called with the player instances
    debug: true, // Optional
    drm: [{
        NexDRMType:'DRM Type (eg. com.widevine.alpha(', NexDRMKey: 'URI for the DRM Key', 
        NexHeaders:[{FieldName: 'Header Field Name', FiledValue: 'Header Field Value'}],
        NexCallback:OptionalDRMCallbackForFairPlay
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
    trailer: boolean,// Optional, by default is set to false. Set to true when a stream should be considered a trailer, false when not.
    useNewRelicTracker: boolean,
    // You need the tracker library in order to be able to use the tracker. Ask NexPlayer team for it.
    vast: 'URL with a VAST/VPAID/VMAP advertisement', // Optional
    adURL: string, // Optional
    captionDisplayer: ICaptionsDisplayer, // Optional
```

## NexPlayer™ API

***

### Overview

***

#### Nexplayer methods

 - [Setup(configObj)](#setup)
 - [UnMount(div)](#unmount)
 - [PlayerEvents(event,callback)](#playerevents)
 - [AdsEvents(event,callback)](#adsevents)

#### Player methods and objects

##### Miscellaneous

 - [init(NexPlayerConfig)](#init)
 - [play()](#play)
 - [pause()](#pause)
 - [seek(value)](#seek)
 - [isSeeking()](#isseeking)
 - [Environment](#environment)
 - [DefaultConfig](#defaultconfig)
 - [destroy()](#destroy)

##### Getters


 - [getAudioStreams()](#getaudiostreams) ⇒ [Array\<AudioStream\>](#audiostream)
 - [getCurrentAudioTrack()](#getcurrentaudiotrack) ⇒ [AudioTrack](#audiotrack)
 - [getCurrentSubtitle()](#getcurrentsubtitle) ⇒ number
 - [getCurrentTime()](#getcurrenttime) ⇒ number
 - [getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
 - [getDuration()](#getduration) ⇒ number
 - [getQualityLevels()](#getqualitylevels) ⇒ array
 - [getSubtitles()](#getsubtitles) ⇒ array
 - [getThumbnailAt()](#getthumbnailat) ⇒ Promise
 - [getThumbnails()](#getthumbnails) ⇒ [Array\<Frame\>](#frame)
 - [getTracks()](#gettracks) ⇒ [Array\<Track\>](#track)
 - [getURL()](#geturl) ⇒ string
 - [getVersion()](#getversion) ⇒ string
 - [getPlayerDiv()](#getplayerdiv) ⇒ string
 - [getPlayerContainerDiv()](#getplayercontainerdiv) ⇒ string
 - [getAdInstance()](#getadinstance) ⇒ string
 - [getVolume()](#getvolume) ⇒ number
 - [getMute()](#getmute) ⇒ boolean
 - [getLogger()](#getlogger) ⇒ Logger

##### Setters


 - [setAudio(streamID)](#setaudio)
 - [setCurrentTrack(trackID)](#setcurrenttrack)
 - [setCurrentSubtitle(subID)](#setsubtitle)
 - [setVolume(number)](#setvolume)
 - [setMute(boolean)](#setmute)
 - [setLogger(logger)](#setlogger)

##### Global Typedefs

 - [NexPlayerDRMOptions](#nexplayerdrmoptions) : object
 - [DRMCustomData](#drmcustomdata) : object
 - [Captions](#captions) : object
 - [Thumbnails](#thumbnails) : object
 - [ICaptionsDisplayer](#icaptionsdisplayer) : object

#### Ads methods and objects

##### Miscellaneous

 - [play()](#adplay)
 - [pause()](#adpause)
 - [registerPlugin(ads)](#registerplugin)
 - [isAdPlaying()](#isAdPlaying)
 - [skip()](#skip)
 - [checkInitialAds()](#checkinitialads)

##### Getters

 - [getAdType()](#getadtype) ⇒ string
 - [getAdTitle()](#getadtitle) ⇒ string
 - [getAdDuration()](#getadduration) ⇒ number
 - [getAdRemainingTime()](#getadremainingtime) ⇒ number
 - [getMute()](#getmute) ⇒ boolean
 - [getVolume()](#getvolume) ⇒ number
 - [getAdBreaks()](#getadbreaks) ⇒ Object

##### Setters

  - [setMute(state)](#setmute)
  - [setVolume(value)](#setvolume)
  - [setVideoEngine(videoEngine)](#setvideoengine)

***

### Nexplayer methods

***

#### <a id="ps4setup"></a> nexplayer.Setup(configObj)

Creates and initializes the player.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Parameters**: <code>configObj</code> is an object which values could be:

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | NexPlayer key to validate the playback. |
| div | <code>HTMLDivElement</code> | The div container of the player. |
| src | <code>string</code> | URL of the video to be played. |
| drm | <code>NexPlayerDRMOptions</code> | Contains an object of DRM information. By default it's set to null. |
| adURL | <code>string</code> | Contains an object of DRM information. By default it's set to null. |
| autoplay | <code>boolean</code> | Determines if the video must start playing or paused. True by default. |
| callbacksForPlayer | <code>Function</code> | Used for retrieving the NexPlayer instance and video element. This is necessary for getting the instance and use the NexPlayer API. |
| captionDisplayer | <code>ICaptionsDisplayer</code> | Used to provide a custom CaptionDisplayer. Tihs allows to implement the internal logic for the captions. |
| debug | <code>boolean</code> | Determines if log information is showed. By default is set to true. |
| externalSubtitles | <code>Captions</code> | Used to provide a WEBVTT file as external subtitles. |
| mutedAtStart | <code>boolean</code> | Determines if the video will start playing muted or not. False by default. |
| resumePosition | <code>number</code> | Determines the position where the video will start playing. |
| thumbnails | <code>Thumbnails</code> | Thumbnails to be shown. Static and dynamic thumbnails are supported. |
| trailer | <code>boolean</code> | Determines if a stream should be considered a trailer. |
| useNewRelicTracker | <code>boolean</code> | Determines if the New Relick tracker will be used. |
| vast | <code>string</code> | Advertisement url that is going to be played. VAST, VPAID, VMAP are supported. |

#### <a id="unmount"></a> nexplayer.UnMount(div)

Unmounts the player and its dependencies.

**Type**: instance method of [<code>Player</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| div | <code>HTMLElement</code> | Player tag |


#### <a id="playevents"></a> nexplayer.PlayerEvents(event, callback)

Listens for player events.

**Type**: instance method of [<code>Player</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |


#### <a id="adsevents"></a> nexplayer.AdsEvents(event, callback)

Listens for ads events.

**Type**: instance method of [<code>Player</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |

***

### Global typedefs

***

#### <a id="neplayerdrmoptions"></a> Player.NexPlayerDRMOptions : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| keySystem  | <code>string</code> | DRM's keySystem type. I.E.: "com.widevine.alpha" |
| license    | <code>string</code> | DRM's license. |
| customData | <code>DRMCustomData</code> | Used to indicate the custom headers necessary to request the license. Optional. |

#### <a id="drmcustomdata"></a> Player.DRMCustomData : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| fieldName  | <code>string</code> | Header's name .|
| value    | <code>string</code> | Value used in the DRM's request. |

#### <a id="captions"></a> Player.Captions : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| src       | <code>string</code> | Caption's URL. |
| language  | <code>string</code> | Language of the captions. Use to identificate them. |

#### <a id="thumbnails"></a> Player.Thumbnails : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| canvas  | <code>HTMLCanvasElement</code> | Canvas used to display the thumbnails. |
| urlVtt  | <code>string</code> | VTT's URL. |
| urlImg  | <code>string</code> | Image to extract thumbnails from. |
| chunkLimit  | <code>number</code> | Number of thumbnails' chunks available at the same time. |
| chunkTotal  | <code>number</code> | Number of thumbanils' chunks in total. |

#### <a id="icaptionsdisplayer"></a> Player.ICaptionsDisplayer : <code>Class</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| _videoContainer  | <code>HTMLElement</code> | Canvas used to display the thumbnails. |
| _captionsContainer  | <code>HTMLElement</code> | VTT's URL. |

**Functions**:

| Name    | Params                 | Returns | Description                  |
| ------- | -------------------    | ------- | ---------------------------- |
| init    | cues: <code>Array<Cue></code> | void | Initializes the Caption Displayer. |
| destroy | None | void | Destroy the Caption Displayer. |
| reset   | None | void | Resets the Caption Displayer. |
| setTextVisibility  | visible: <code>boolean</code>  | void | Shows/hides the captions. |
| updateCue  | time: <code>number</code> | void | Called to update the current cues to display. |
| displayCuesCC  | cuesCC:<code>Map<string, Object></code> | void | Displays the CC cues passed. Object properties: "text", "position", and "rgba". |

***

## Advanced usage

### Events

#### Player Events

We have events to handle some different kind of player events. List of player events available:

* **statechanged**: Event is fired when the state of player is changed, contains in the detail attribute the different states of the player (Ready, Buffering, Playing, Paused, Ended)
* **playercreating**: Event lauched when the player is being created.
* **playercreated**: Event launched when the player has been created.
* **playerdestroyed**: Event launched when the player has been destroyed.
* **play**: Event launched when play is requested.
* **playing**: Event launched when the player is played.
* **pause**: Event launched when pause is requested.
* **paused**: Event launched when the player is paused.
* **seeking**: Returns a boolean. True when is seeking, false otherwise.
* **seeked**: Event launched when the stream has been seeked.
* **stalled**: Event launched when the stream has been stalled.
* **hovering**: Event launched when the cursor hovers over the seekbar.
* **durationchange**: Event launched when video duration is changed.
* **timeupdate**: Event launched when the video element duration changes.
* **loadstart**: Event launched when the player starts loading.
* **loadeddata**: Event launched when the manifest is loaded.
* **canplay**: Event lauched when the player is ready to play.
* **buffering**: Event lauched when the player is buffering.
* **videofirstquartile**:  Event is fired when the 25% of the video’s duration has been reached.
* **videomidpoint**: Event is fired when the 50% of the video’s duration has been reached.
* **videothirdquartile**: Event is fired when the 75% of the video’s duration has been reached.
* **ended**: Event launched when the stream has been finished.
* **subtitlesdataloaded**: Event launched when captions are loaded.
* **newsubtitlesdataloaded**: Event launched when new captions are loaded.
* **ccnewdata**: Event launched when new captions are received.
* **thumbnaildata**: Event launched when a thumbnail data is received.
* **thumbnailloaded**: Event launched when a thumbnail is loaded to the thumbnail array.
* **thumbnailreply**: Event launched when a thumbnail is provided to the canvas.

Example on how to listen for a player event:

```js
    nexplayer.PlayerEvents("playing", function(e) {
        console.log("playing", e);
    });
```

#### Ads Events

We have events to handle some different kind of ads events. List of ad events available:

* **adlibrarycreating**: Creates a library with all ads when the player is started.
* **adlibrarycreated**: Event launched when the ads library is created.
* **adlibrarydestroyed**: Destroys the library with all ads when the player is started.
* **adpodsinfo**: Contains all ad pods information.
* **adblockstarted**: Contains the number of ads in the block in the detail attribute.
* **adblockend**: Event launched when an ad block (some ads in the same timestamp) ends.
* **adstarted**: Event launched when when the ad has started, contain the ad position in the block in the detail attribute.
* **adtagstartloading**: Event launched when the ad starts.
* **adloaded**: Event launched when the ad has been loaded.
* **adcomplete**: Event launched when the ad has ended.
* **addestroyed**: Event launched when the ad has been destroyed after ended.
* **adpaused**: Event launched when an ad is paused.
* **adresumed**: Event launched when an ad is resumed.
* **adskipped**: Event launched when an ad is skipped.
* **adfirstquartile**: Event is fired when the 25% of the ad’s duration has been reached.
* **admidpoint**: Event is fired when the 50% of the ad’s duration has been reached.
* **adthirdquartile**: Event is fired when the 75% of the ad’s duration has been reached.
* **adimpression**: Event launched when ad impression is sent to the server.
* **aderror**: Event launched when there is an error loading the ad.
* **adpodcompleted**: Event launched when an ad block has been completed.

```js
    nexplayer.AdsEvents("aderror", function(e) {
        console.log("aderror", e);
    });
```