<a id="ps4usage-top"> </a>

# PlayStation 4 Usage

This section explains how to integrate NexPlayer&#x2122; for PS4 into your project.

## Latest release

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.2_20210730/nexplayer.js
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

 - [Setup(configObj)](#ps4setup)
 - [UnMount(div)](#unmount)
 - [PlayerEvents(event,callback)](#playerevents)
 - [AdsEvents(event,callback)](#adsevents)

#### Player methods

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

#### Ads methods

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
 - [getMute()](#getadmute) ⇒ boolean
 - [getVolume()](#getadvolume) ⇒ number
 - [getAdBreaks()](#getadbreaks) ⇒ Object

##### Setters

  - [setMute(state)](#setadmute)
  - [setVolume(value)](#setadvolume)

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

**Type**: instance method of [<code>nexplayer</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| div | <code>HTMLElement</code> | Player tag |


#### <a id="playerevents"></a> nexplayer.PlayerEvents(event, callback)

Listens for player events.

**Type**: instance method of [<code>nexplayer</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |


#### <a id="adsevents"></a> nexplayer.AdsEvents(event, callback)

Listens for ads events.

**Type**: instance method of [<code>nexplayer</code>](#Player)  
**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |

***

### Player methods

***

#### Miscellaneous

***

<a id="init"></a>

##### player.init(NexPlayerConfig)

Initialize the player with the config Object given.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="play"></a>

##### player.play()

Plays the video when it is paused.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="pause"></a>

##### player.pause()

Pauses the video when it is playing.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="seek"></a>

##### player.seek(value)

Seek the video to the value given.

**Type**: instance method of  [<code>Player</code>](#Player)  

<a id="isseeking"></a>

##### player.isSeeking()

Return a boolean, true if the player is seeking and false if not.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="environment"></a>

##### player.Environment()

Returns which browser, platform and device type are set.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="defaultconfig"></a>

##### player.DefaultConfig()

Sends the default configuration in case the parameters are not specified in the init.

**Type**: instance method of  [<code>Player</code>](#Player)

<a id="destroy"></a>

##### player.destroy()

Destroy the player

**Type**: instance method of  [<code>Player</code>](#Player)  

***

#### Getters

***

<a id="getaudiostreams"> </a>

##### player.getAudioStreams() ⇒ Array.< AudioStream >

Gets the available audio streams.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: An array<AudioStream> - which contains the available audio streams.

<a id="getcurrentaudiotrack"> </a>

##### player.getCurrentAudioTrack() ⇒ AudioTrack

Gets the audio track currently in use.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: AudioTrack - The current audio track.

<a id="getcurrentsubtitle"> </a>  

##### player.getCurrentSubtitle() 

Gets the current subtitle info.

**Type**: instance method of [<code>Player</code>](#Player)     
**Returns**: Current Subtitle - the current subtitle track (undefined if no subtitles are activated).

<a id="getcurrenttime"> </a>  

##### player.getCurrentTime() ⇒ number

Returns the currentTime taking into account isUTC (if isUTC is true, getCurrentTime's returned value will be different from the time of the video element).

**Type**: instance method of [<code>Player</code>](#Player)    
**Returns**: number - the current time of the video.

<a id="getcurrenttrack"> </a>

##### player.getCurrentTrack() ⇒ Track

Gets the current track information.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Track - the current track.

<a id="getduration"> </a>  

##### player.getDuration() ⇒ number

Returns the duration taking into account isUTC (if isUTC is true, getDuration's returned value will be different from the duration of the video element).

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: number - the duration of the video.

<a id="getqualitylevels"> </a>

##### player.getQualityLevels() ⇒ array

Gets the video quality levels array.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: array - quality levels array info

<a id="getsubtitles"> </a>

##### player.getSubtitles()
   
Gets all the avaliable subtitle tracks info.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array of subtitles - the subtitle tracks of the video.

<a id="getthumbnailat"> </a>  

##### player.getThumbnailAt() ⇒ Promise

Returns a thumbnail loading promise in a specific time.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Promise - Thumbnail loading promise in a specific time.

<a id="getthumbnails"> </a>  

##### player.getThumbnails() ⇒ Array < Frame >

Returns the loaded thumbnails.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array < Frame > - The loaded thumbnails.

<a id="gettracks"> </a>
   
##### player.getTracks() ⇒ Array.< Track >

Gets all of the videos avaliable tracks (different qualities).

**Type**: instance method of [<code>Player</code>](#Player)     
**Returns**:: Array.< Track > - all the tracks available.

<a id="geturl"> </a>
   
##### player.getURL()

Returns the current video URL.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: String

<a id="getversion"></a>

##### player.getVersion()

Returns the current version of the player.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: String

<a id="getplayerdiv"></a>

##### player.getPlayerDiv()

Returns the video container.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: HTMLDivElement

<a id="getplayercontainerdiv"></a>

##### player.getPlayerContainerDiv()

Returns the player container.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: HTMLDivElement

<a id="getadinstance"></a>

##### player.getAdInstance()

Returns the AdInstance Object.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: Object

<a id="getvolume"></a>

##### player.getVolume()

Returns the current volume of the Player.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: number

<a id="getmute"></a>

##### player.getMute()

Returns true if the video is muted and false if not.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: boolean

<a id="getlogger"></a>

##### player.getLogger()

Returns the logger of the Player.

**Type**: instance method of  [<code>Player</code>](#Player)  
**Returns**: Object

***

#### Setters

***

<a id="setaudio"></a>

##### player.setAudio(streamID)

Sets the current audio stream.

**Type**: instance method of [<code>Player</code>](#Player)   

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | ID of the audio stream to be used. |

<a id="setcurrenttrack"></a>

##### player.setCurrentTrack(trackID)

Sets the current track.

**Type**: instance method of [<code>Player</code>](#Player)   

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | ID of the track to be used. |

<a id="setsubtitle"></a>

##### player.setCurrentSubtitle(subID)

Sets the current subtitle.

**Type**: instance method of [<code>Player</code>](#Player)   

| Param | Type | Description |
| --- | --- | --- |
| subID | <code>number</code> | ID of the subtitle to be used. |

<a id="setvolume"></a>

##### player.setVolume(value)

Set the volume of the video.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The volume level to be used. |

<a id="setmute"></a>

##### player.setMute(boolean)

Set mute or unmute to the video.

| Param | Type | Description |
| --- | --- | --- |
| boolean | <code>boolean</code> | If the video will be mute or unmute. |

<a id="setlogger"></a>

##### player.setLogger(logger)

Set logger to the video.

| Param | Type | Description |
| --- | --- | --- |
| logger | <code>Object</code> | The logger to be used. |


***

#### Global typedefs

***

<a id="nexplayerdrmoptions"></a>

##### Player.NexPlayerDRMOptions : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| keySystem  | <code>string</code> | DRM's keySystem type. I.E.: "com.widevine.alpha" |
| license    | <code>string</code> | DRM's license. |
| customData | <code>DRMCustomData</code> | Used to indicate the custom headers necessary to request the license. Optional. |

<a id="drmcustomdata"></a> 

##### Player.DRMCustomData : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| fieldName  | <code>string</code> | Header's name .|
| value    | <code>string</code> | Value used in the DRM's request. |

<a id="captions"></a> 

##### Player.Captions : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| src       | <code>string</code> | Caption's URL. |
| language  | <code>string</code> | Language of the captions. Use to identificate them. |

<a id="thumbnails"></a>

##### Player.Thumbnails : <code>Object</code>

**Type**: global typedef
**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| canvas  | <code>HTMLCanvasElement</code> | Canvas used to display the thumbnails. |
| urlVtt  | <code>string</code> | VTT's URL. |
| urlImg  | <code>string</code> | Image to extract thumbnails from. |
| chunkLimit  | <code>number</code> | Number of thumbnails' chunks available at the same time. |
| chunkTotal  | <code>number</code> | Number of thumbanils' chunks in total. |

<a id="icaptionsdisplayer"></a>

##### Player.ICaptionsDisplayer : <code>Class</code>

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


### Ads methods

***

#### Miscellaneous

***

<a id="adplay"></a>

##### nexplayer.AdInstance().play()

Plays the ad when it is paused.

**Type**: instance method of  [<code>nexplayer</code>](#Player)

<a id="adpause"></a>

##### nexplayer.AdInstance().pause()

Pauses the ad when it is playing.

**Type**: instance method of  [<code>nexplayer</code>](#Player)

<a id="registerplugin"></a>

##### nexplayer.AdInstance().registerPlugin(ads)

ads is an Object that implements IAds interface, The users can pass their own implementation in case they want to use another advertisement library or a custom one.

**Type**: instance method of  [<code>nexplayer</code>](#Player)  

<a id="isadplaying"></a>

##### nexplayer.AdInstance().isAdPlaying()

Return a boolean, true if the ad is playing and false if not.

**Type**: instance method of  [<code>nexplayer</code>](#Player)

<a id="skip"></a>

##### nexplayer.AdInstance().skip()

Skip the current ad if possible.

**Type**: instance method of  [<code>nexplayer</code>](#Player)

<a id="checkinitialads"></a>

##### nexplayer.AdInstance().checkInitialAds()

Checks whether there ads

**Type**: instance method of  [<code>nexplayer</code>](#Player)

***

#### Getters

***

<a id="getadtype"> </a>

##### nexplayer.AdInstance().getAdType() ⇒ string

Gets the current Ad type.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: String - The current ad type.

<a id="getadtitle"> </a>

##### nexplayer.AdInstance().getAdTitle() ⇒ string

Gets the Ad title.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: String - The current ad title.

<a id="getadduration"> </a>

##### nexplayer.AdInstance().getAdDuration() ⇒ number

Gets the Ad duration.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: number - The current ad duration.

<a id="getadremainingtime"> </a>

##### nexplayer.AdInstance().getAdRemainingTime() ⇒ number

Gets the Ad remaining time.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: number - The ad remaining time.

<a id="getadmute"> </a>

##### nexplayer.AdInstance().getMute() ⇒ boolean

Gets the true if the video is muted or false if not.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: boolean - True if the video is muted or false if not.

<a id="getadvolume"> </a>

##### nexplayer.AdInstance().getVolume() ⇒ number

Gets the Ad volume.

**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: number - The ad volume.

<a id="getadbreaks"> </a>

##### nexplayer.AdInstance().getAdBreaks() ⇒ Object

Returns the break points when ads will trigger


**Type**: instance method of [<code>nexplayer</code>](#Player)   
**Returns**: Object - The break points when ads will trigger

***

#### Setters

***

<a id="setadmute"></a>

##### nexplayer.AdInstance().setMute(state)

Mutes or unmutes the ad.

| Param | Type | Description |
| --- | --- | --- |
| state | <code>boolean</code> | If the ad will be mute or unmute. |

<a id="setadvolume"></a>

##### nexplayer.AdInstance().setVolume(value)

Set the volume of the ad.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The volume level to be used. |

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

## Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 1.2.2

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.2_20210730/nexplayer.js
```

**Bug fixes:**
  - Renamed Frame object "canvas" property to "thumbnail".
  - Fixed permanent pending promise when fetching thumbnails that lead to "undefined" resolutions.

Date: July 30th 2021

#### Version 1.2.1

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.1_20210729/nexplayer.js
```

**Bug fixes:**
  - Fixed thumbails width and height properties as they were swapped.

Date: July 29th 2021

#### Version 1.2.0

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.0_20210723/nexplayer.js
```
New features:
  - Added SSAI support for PS4. It can be used through the property 'ssaiMediaTailor'.
  
    Property:
    * ssaiMediaTailor:
    {
      baseURL: string, //Base URL for Video and Ads
      playbackURL: string, //Video URL to be attached to the baseURL
      adsParams:
      {
        "param1": string, //Ad URL to be attached to the baseURL
      }
    }
    
  - Thumbnail enhancements. The method getThumbnailAt(time) now returns a promise instead of a
  thumbnail.
  
    * getThumbnailAt(time) // returns a Promise awaiting the corresponding thumbnail in a specific 
    time value

Date: July 23rd 2021

#### Version 1.1.9

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.9_20210525/nexplayer.js
```

**New features:**
  - Added New Relic support for PS4. It can be used through the property 'useNewRelicTracker'.
  A tracker library and agent must be included for this feature to work. Ask NexPlayer team for it.
  Custom data methods have also been added: 
  
    Property:
    * useNewRelicTracker: boolean, // true when enabling New Relic, false when not
    
    Methods:
    * addTrackerData(key: string, value: any) 
    * removeTrackerData(key: string, value: any)
  - Added milestone management for trailers and scrubbing. 
  A stream will be considered as a trailer when using the following property in the Setup:
    * trailer: boolean, // true when stream should be considered a trailer, false when not
  - 60 seconds in event added. When the video current time is at least 60 seconds, this 
  event gets triggered. This just happens once for each player instance. Usage:
    * addEventListener('60secondsin', function)
  - Added PS4 SDK protection using an external app ID.
  - Thumbnail enhancements. Vtts can now reference another Vtt inside them. 
  Two new methods for thumbnail retrieval have been added: 
    * getThumbnails() // returns the current loaded thubmnails
    * getThumbnailAt(time) // returns the corresponding thumbnail in a specific time value

Date: May 25th 2021

#### Version 1.1.8

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.8_20210420/nexplayer.js
```

**New features**:
  - Setup can be called prior to Unmount in order to reduce the delay when restarting
  the player. The configuration provided in the last Setup call is saved and will be 
  used to initialize the player as soon as Unmount ends.
  - CC style has been changed to use text shadows instead of a background colour.
  - Increased log interval when waiting for player to unmount and reduced the time until
  the player considers failure when destroying itself.

Date: April 20th 2021

#### Version 1.1.7

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.7_20210330/nexplayer.js
```

**New features**:
  - UnMount function has changed its return type. Now returns a Promise which is resolved when the player
  is the destroyed completely, as well as the method destroy of the player:
  
    * destroy(): Promise<any>;
    * export declare var UnMount: (div: HTMLDivElement) => Promise<any>;
    
  Check the <a href="https://nexplayer.github.io/TizenWebOS/#/ps4usage?id=unmount">API</a> for more info.

**Bug fixes:**
  - Seeking becomes broken after we destroy the player while 'seeking' previous content.
  - No cc on live streams for PS4.
  - Overlapping captions are shown multiple times when using WebVTT subtitles on VOD.

Date: March 30th 2021

#### Version 1.1.6

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.6_20210318/nexplayer.js
```

**New features:**
  - New player event "newsubtitlesdataloaded". It is fired when new text track are detected. Currently, embedded CC text track
  is detected later so this event can be fired several times. You should use this event for retrieving the current text tracks of the stream.
  - Added "stalled" event. It is fired when no more data is buffered and the player can't continue the playback.

**Bug fixes:**
  - Fixed issue regarding the delayed CC on VoD content.
  - Embedded CC cea 608/708 working on live streams.
  - Text missing when using embedded CC cea 608/708.
  - "seeked" event is working again.
  - Player's state "playing" is only reported when it is actually playing.

Date: March 18th 2021

#### Version 1.1.5

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.5_20210309/nexplayer.js
```

  - Added support for static and chunked thumbnails. Include the following property in Nexplayer's SetUp:
    > Static:
        thumbnails:
        {
            canvas: document.getElementById("canvas_id"),
            urlVtt: "url_string",
            urlImg: "url_string",
        }
        * canvas: HTML Canvas element where thumbnails will be displayed on.
        * urlVtt: Thumbnail VTT URL containing each thumbnail's time interval and coordinates.
        * urlImg: Thumbnail sprite URL containing multiple thumbnails stiched together.
    > Chunked:
        thumbnails:
        {
            canvas: document.getElementById("canvas_id"),
            urlVtt: "url_string",
            chunkLimit: 3,
            chunkTotal: 30,
        }
        * canvas: HTML Canvas element where thumbnails will be displayed on.
        * urlVtt: Thumbnail VTT URL containing each thumbnail's time interval and image URL.
        * chunkLimit (optional): Maximum number of thumbnail chunks to load at a time. Default: 1.
        * chunkTotal (optional): Total number of chunks to split the thumbnails' array into. Default: 1.

**Bug fixes:**
  - Improved algorithm that filters the subtitles cues which removes the delay observed
  on the subtitles shown.

Date: March 9th 2021

#### Version 1.1.4

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.4_20210304/nexplayer.js
```

**New features:**
  - Added property "detail" into the events objects for offering backwards compatibility with the legacy SDK.

Date: March 4th 2021

#### Version 1.1.3

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.3_20210226/nexplayer.js
```

**New features:**
  - New events regarding the progression of the video:
    - "videofirstquartile": fired when the video reaches the point 25% of the total duration.
    - "videomidpoint": fired when the video reaches the point 50% of the total duration.
    - "videothirdquartile": fired when the video reaches the point 75% of the total duration.
  - All of these events will contain the property "quartileTime" in the property "_data" of the event received:

```js
    nexplayer.PlayerEvents("videofirstquartile", function (e) {
      console.log(" VIDEO FIRST QUARTILE --------------------", e._data.quartileTime);
    });
```

Date: February 26th 2021

#### Version 1.1.2

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.2_20210223/nexplayer.js
```

- Official release containing all the features and bug fixes from the previous versions.

Date: February 23rd 2021

#### Version 1.1.1

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.1_20210218/nexplayer.js
```

**Bug fixes:**
- Fixed state issue.

Date: February 18th 2021

#### Version 1.1.0

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.1.0_20210217/nexplayer.js
```

**Bug fixes:**
  - DURATION_CHANGE event is triggered when the duration of the stream
  is retrieved. The event will contain the duration of the video.
  - getCurrentSubtitle() method now returns a number. It represents the index of the
  current activated subtitle, -1 if no subtitle is activated.
  - BUFFERING event is triggered when player changes to buffering state.
  - videometrics object related error shouldn't be appearing. We can't confirm
  as we couldn't reproduce it even once.

**New features:**
  - SEEKING event added. It is triggered when the player starts seeking.
  - SEEKED event added. It is triggered when the player finishes seeking.
  - isSeeking() method. It returns a boolean indicating if the player
  is currently seeking.
  - New volume methods are implemented for the player and the adsManager:
  setVolume(value:number), getVolume():number,
  setMute(mute:boolean) and getMute(): boolean.

Date: February 17th 2021