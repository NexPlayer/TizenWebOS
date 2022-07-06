# NexPlayer API

**Nexplayer methods**

- [Setup(configObj)](#ps4setup)
- [UnMount(div)](#unmount)
- [PlayerEvents(event,callback)](#playerevents)
- [AdsEvents(event,callback)](#adsevents)

**Player methods**

- [init(NexPlayerConfig)](#init)
- [play()](#play)
- [pause()](#pause)
- [seek(value)](#seek)
- [Environment](#environment)
- [DefaultConfig](#defaultconfig)
- [destroy()](#destroy)

**Getters**

- [getAudioStreams()](#getaudiostreams) ⇒ [Array\<AudioStream\>](#audiostream)
- [getCurrentAudioTrack()](#getcurrentaudiotrack) ⇒ [AudioTrack](#audiotrack)
- [getCurrentSubtitle()](#getcurrentsubtitle) ⇒ number
- [getCurrentTime()](#getcurrenttime) ⇒ number
- [getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
- [getDuration()](#getduration) ⇒ number
- [getQualityLevels()](#getqualitylevels) ⇒ Array
- [getSubtitles()](#getsubtitles) ⇒ Array
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
- [isCurrentAssetAd()](#iscurrentassetad) ⇒ boolean
- [isCurrentAssetMuted()](#iscurrentassetmuted) ⇒ boolean
- [isSeeking()](#isseeking) ⇒ boolean

**Setters**

- [setAudio(streamID)](#setaudio)
- [setCurrentTrack(trackID)](#setcurrenttrack)
- [setCurrentSubtitle(subID)](#setsubtitle)
- [setVolume(number)](#setvolume)
- [setMute(boolean)](#setmute)
- [setLogger(logger)](#setlogger)

**Global Typedefs**

- [AudioStream](#AudioStream) : object
- [NexPlayerDRMOptions](#nexplayerdrmoptions) : object
- [DRMCustomData](#drmcustomdata) : object
- [Captions](#captions) : object
- [Thumbnails](#thumbnails) : object
- [ICaptionsDisplayer](#icaptionsdisplayer) : object

**Ads methods**

- [play()](#adplay)
- [pause()](#adpause)
- [registerPlugin(ads)](#registerplugin)
- [isAdPlaying()](#isAdPlaying)
- [skip()](#skip)
- [checkInitialAds()](#checkinitialads)
- [getAdType()](#getadtype) ⇒ string
- [getAdTitle()](#getadtitle) ⇒ string
- [getAdDuration()](#getadduration) ⇒ number
- [getAdRemainingTime()](#getadremainingtime) ⇒ number
- [getMute()](#getadmute) ⇒ boolean
- [getVolume()](#getadvolume) ⇒ number
- [getAdBreaks()](#getadbreaks) ⇒ Object
- [setMute(state)](#setadmute)
- [setVolume(value)](#setadvolume)


### Nexplayer methods

#### <a id="ps4setup"></a>nexplayer.Setup(configObj)

Creates and initializes the player.

**Type**: instance method of `Player`

**Parameters**: <code>configObj</code> is an object which values could be:

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | NexPlayer key to validate the playback. |
| div | <code>HTMLDivElement</code> | The div container of the player. |
| src | <code>string</code> | URL of the video to be played. |
| drm | <code>NexPlayerDRMOptions</code> | Contains an object of DRM information. By default it's set to null. |
| adsParamsToEncode | <code>Array<string></code> | Array of strings specifying the parameters in the ad URL to be encoded. |
| adURL | <code>string</code> | Contains an object of DRM information. By default it's set to null. |
| autoplay | <code>boolean</code> | Determines if the video must start playing or paused. True by default. |
| callbacksForPlayer | <code>Function</code> | Used for retrieving the NexPlayer instance and video element. This is necessary for getting the instance and use the NexPlayer API. |
| captionDisplayer | <code>ICaptionsDisplayer</code> | Used to provide a custom CaptionDisplayer. This allows to implement the internal logic for the captions. |
| debug | <code>boolean</code> | Determines if log information is showed. By default is set to true. |
| externalSubtitles | <code>Captions</code> | Used to provide subtitle files as external subtitles. |
| mutedAtStart | <code>boolean</code> | Determines if the video will start playing muted or not. False by default. |
| resumePosition | <code>number</code> | Determines the position where the video will start playing. |
| thumbnails | <code>Thumbnails</code> | Thumbnails to be shown. Static and dynamic thumbnails are supported. |
| trailer | <code>boolean</code> | Determines if a stream should be considered a trailer. |
| useNewRelicTracker | <code>boolean</code> | Determines if the New Relic tracker will be used. |
| vast | <code>string</code> | Advertisement URL that is going to be played. VAST, VPAID, VMAP are supported. |

#### <a id="unmount"></a>nexplayer.UnMount(div)

Unmounts the player and its dependencies.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| div | <code>HTMLElement</code> | Player tag |


#### <a id="playerevents"></a>nexplayer.PlayerEvents(event, callback)

Listens for player events.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |


#### <a id="adsevents"></a>nexplayer.AdsEvents(event, callback)

Listens for ads events.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| event | <code>string</code> | Event name |
| callback | <code>function</code> | Callback function |

### Player methods

<a id="init"></a>

#### player.init(NexPlayerConfig)

Initializes the player with the config Object given.

<a id="play"></a>

#### player.play()

Plays the video when it is paused.

<a id="pause"></a>

#### player.pause()

Pauses the video when it is playing.

<a id="seek"></a>

#### player.seek(value)

Seeks the video to the value given.

<a id="environment"></a>

#### player.Environment()

Returns which browser, platform and device type are set.

<a id="defaultconfig"></a>

#### player.DefaultConfig()

Sends the default configuration in case the parameters are not specified in the init.

<a id="destroy"></a>

#### player.destroy()

Destroys the player

### Getters

<a id="getaudiostreams"> </a>

#### player.getAudioStreams() ⇒ Array.< AudioStream >

Gets the available audio streams.

**Returns**: An Array<AudioStream> - which contains the available audio streams.

<a id="getcurrentaudiotrack"> </a>

#### player.getCurrentAudioTrack() ⇒ AudioTrack

Gets the audio track currently in use.

**Returns**: AudioTrack - The current audio track.

<a id="getcurrentsubtitle"> </a>

#### player.getCurrentSubtitle()

Gets the current subtitle info.

**Returns**: Current Subtitle - the current subtitle track (undefined if no subtitles are activated).

<a id="getcurrenttime"> </a>

#### player.getCurrentTime() ⇒ number

Returns the currentTime taking into account isUTC (if isUTC is true, getCurrentTime's returned value will be different from the time of the video element).

**Returns**: number - the current time of the video.

<a id="getcurrenttrack"> </a>

#### player.getCurrentTrack() ⇒ Track

Gets the current track information.

**Returns**: Track - the current track.

<a id="getduration"> </a>

#### player.getDuration() ⇒ number

Returns the duration taking into account isUTC (if isUTC is true, getDuration's returned value will be different from the duration of the video element).

**Returns**: number - the duration of the video.

<a id="getqualitylevels"> </a>

#### player.getQualityLevels() ⇒ Array

Gets the video quality levels array.

**Returns**: Array - quality levels array info

<a id="getsubtitles"> </a>

#### player.getSubtitles()

Gets all the avaliable subtitle tracks info.

**Returns**: Array of subtitles - the subtitle tracks of the video.

<a id="getthumbnailat"> </a>

#### player.getThumbnailAt() ⇒ Promise

Returns a thumbnail loading promise in a specific time.

**Returns**: Promise - Thumbnail loading promise in a specific time.

<a id="getthumbnails"> </a>

#### player.getThumbnails() ⇒ Array < Frame >

Returns the loaded thumbnails.

**Returns**: Array < Frame > - The loaded thumbnails.

<a id="gettracks"> </a>

#### player.getTracks() ⇒ Array.< Track >

Gets all of the videos avaliable tracks (different qualities).

**Returns**:: Array.< Track > - all the tracks available.

<a id="geturl"> </a>

#### player.getURL()

Returns the current video URL.

**Returns**: String

<a id="getversion"></a>

#### player.getVersion()

Returns the current version of the player.

**Returns**: String

<a id="getplayerdiv"></a>

#### player.getPlayerDiv()

Returns the video container.

**Returns**: HTMLDivElement

<a id="getplayercontainerdiv"></a>

#### player.getPlayerContainerDiv()

Returns the player container.

**Returns**: HTMLDivElement

<a id="getadinstance"></a>

#### player.getAdInstance()

Returns the AdInstance Object.

**Returns**: Object

<a id="getvolume"></a>

#### player.getVolume()

Returns the current volume of the Player.

**Returns**: number

<a id="getmute"></a>

#### player.getMute()

Returns true if the video is muted and false if not.

**Returns**: boolean

<a id="getlogger"></a>

#### player.getLogger()

Returns the logger of the Player.

**Returns**: Object

<a id="iscurrentassetad"></a>

#### player.isCurrentAssetAd()

Returns a boolean, true if the current playing asset is an ad, false if not.

<a id="iscurrentassetmuted"></a>

#### player.isCurrentAssetMuted()

Returns a boolean, true if the current playing asset is muted, false if not.

<a id="isseeking"></a>

#### player.isSeeking()

Returns a boolean, true if the player is seeking and false if not.

### Setters

<a id="setaudio"></a>

#### player.setAudio(streamID)

Sets the current audio stream.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | ID of the audio stream to be used. |

<a id="setcurrenttrack"></a>

#### player.setCurrentTrack(trackID)

Sets the current track.

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | ID of the track to be used. |

<a id="setsubtitle"></a>

#### player.setCurrentSubtitle(subID)

Sets the current subtitle.

| Param | Type | Description |
| --- | --- | --- |
| subID | <code>number</code> | ID of the subtitle to be used. |

<a id="setvolume"></a>

#### player.setVolume(value)

Set the volume of the video.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The volume level to be used. |

<a id="setmute"></a>

#### player.setMute(boolean)

Set mute or unmute to the video.

| Param | Type | Description |
| --- | --- | --- |
| boolean | <code>boolean</code> | If the video will be mute or unmute. |

<a id="setlogger"></a>

#### player.setLogger(logger)

Set logger to the video.

| Param | Type | Description |
| --- | --- | --- |
| logger | <code>Object</code> | The logger to be used. |


### Global typedefs

## Global typedefs

#### <a id="audiostream"></a>AudioStream : <code>Object</code>

**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id of the stream. |
| language | <code>string</code> | language of the stream. |
| name | <code>string</code> | name of the stream. |

<a id="nexplayerdrmoptions"></a>

#### Player.NexPlayerDRMOptions : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| keySystem  | <code>string</code> | DRM's keySystem type. I.E.: "com.widevine.alpha" |
| license    | <code>string</code> | DRM's license. |
| customData | <code>DRMCustomData</code> | Used to indicate the custom headers necessary to request the license. Optional. |

<a id="drmcustomdata"></a>

#### Player.DRMCustomData : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| fieldName  | <code>string</code> | Header's name .|
| value    | <code>string</code> | Value used in the DRM's request. |

<a id="captions"></a>

#### Player.Captions : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| src       | <code>string</code> | Caption's URL. |
| language  | <code>string</code> | Language of the captions. Use to identificate them. |

<a id="thumbnails"></a>

#### Player.Thumbnails : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| canvas  | <code>HTMLCanvasElement</code> | Canvas used to display the thumbnails. |
| urlVtt  | <code>string</code> | VTT's URL. |
| urlImg  | <code>string</code> | Image to extract thumbnails from. |
| chunkLimit  | <code>number</code> | Number of thumbnails' chunks available at the same time. |
| chunkTotal  | <code>number</code> | Number of thumbanils' chunks in total. |

<a id="icaptionsdisplayer"></a>

#### Player.ICaptionsDisplayer : <code>Class</code>

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

### Ads methods

<a id="adplay"></a>

#### nexplayer.AdInstance().play()

Play the ad when it is paused.

<a id="adpause"></a>

#### nexplayer.AdInstance().pause()

Pause the ad when it is playing.

<a id="registerplugin"></a>

#### nexplayer.AdInstance().registerPlugin(ads)

Ads is an Object that implements IAds interface, The users can pass their own implementation in case they want to use another advertisement library or a custom one.

<a id="isadplaying"></a>

#### nexplayer.AdInstance().isAdPlaying()

Return a boolean, true if the ad is playing and false if not.

<a id="skip"></a>

#### nexplayer.AdInstance().skip()

Skip the current ad if possible.

<a id="checkinitialads"></a>

#### nexplayer.AdInstance().checkInitialAds()

Check whether there ads

<a id="getadtype"> </a>

#### nexplayer.AdInstance().getAdType() ⇒ string

Get the current Ad type.

**Returns**: String - The current ad type.

<a id="getadtitle"> </a>

#### nexplayer.AdInstance().getAdTitle() ⇒ string

Get the Ad title.

**Returns**: String - The current ad title.

<a id="getadduration"> </a>

#### nexplayer.AdInstance().getAdDuration() ⇒ number

Get the Ad duration.

**Returns**: number - The current ad duration.

<a id="getadremainingtime"> </a>

#### nexplayer.AdInstance().getAdRemainingTime() ⇒ number

Get the Ad remaining time.

**Returns**: number - The ad remaining time.

<a id="getadmute"> </a>

#### nexplayer.AdInstance().getMute() ⇒ boolean

Get the true if the video is muted or false if not.

**Returns**: boolean - True if the video is muted or false if not.

<a id="getadvolume"> </a>

#### nexplayer.AdInstance().getVolume() ⇒ number

Get the Ad volume.

**Returns**: number - The ad volume.

<a id="getadbreaks"> </a>

#### nexplayer.AdInstance().getAdBreaks() ⇒ Object

Returns the break points when ads will trigger

**Returns**: Object - The break points when ads will trigger

<a id="setadmute"></a>

#### nexplayer.AdInstance().setMute(state)

Mutes or unmutes the ad.

| Param | Type | Description |
| --- | --- | --- |
| state | <code>boolean</code> | If the ad will be mute or unmute. |

<a id="setadvolume"></a>

#### nexplayer.AdInstance().setVolume(value)

Set the volume of the ad.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The volume level to be used. |

## Advanced usage

### Events

<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>Please note that if you want to listen to events that happen at the start of the player initialization (e.g. "playercreated" or "adpodsinfo" event when ads are provided), the listeners must be added before calling the initialization method of the player. Example: <br>
</div></div>

```js
    var player = new nexplayer.NexPlayer();

    // Adds a listener for the playing event
    nexplayer.PlayerEvents("playing", function(e) {
        console.log("playing", e);
    });

    // Adds a listener for the aderror event
    nexplayer.AdsEvents("aderror", function(e) {
        console.log("aderror", e);
    });

    player.init({
        key: 'ENTER YOUR LICENSE KEY HERE',
        div: document.getElementById("player"),
        src: 'https://livesim.dashif.org/dash/vod/testpic_2s/multi_subs.mpd',
        autoplay: true,
    });
```

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
* **videoProgressTime**: <a id="videoProgressTimeEvent"> </a> Event is fired when the (5%, 15%, 25%, 50%, 75%, 85%, 95%) of the video's duration has been reached, it returns a string with the percentage in the detail.progressTime, property of the event's payload.
* **ended**: Event launched when the stream has been finished.
* **newsubtitlesdataloaded**: Event launched when new captions are loaded.
* **ccnewdata**: Event launched when new cues of the closed captions are received.
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
* **adstarted**: Event launched when when the ad has started, contains the ad position in the block in the detail attribute.
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
