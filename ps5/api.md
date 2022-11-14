# NexPlayer API

**Nexplayer methods**

- [Setup(configObj)](#setup)
- [ChangeSource({src: newSrc, drm: newDrm})](#changesource)
- [UnMount(player)](#unmount)
- [IsReady()](#isready)
- [AdsEvents()](#adsevents)
- [RemoveAdsEvents()](#removeadsevents)
- [decodeData(data)](#decodedata)
- [getVersion()](#getversion)

**Player methods and objects**

- [play()](#play)
- [pause()](#pause)
- [destroy(UnMount(player))](#destroy)
- [load(url, startTime, externalSubtitles)](#load)
- [reload()](#reload)
- [on(callbackType, functionToBeCalled)](#on)
- [off(callbackType, functionToBeCalled)](#off)
- [enableABR()](#enableabr)
- [addTrackerData()](#addtrackerdata)
- [removeTrackerData()](#removetrackerdata)
- [trickPlay(value)](#trickplay)
- [setVolume(value)](#setvolume)

**Navigation**

- [downFocus()](#downfocus)
- [downSubtitle()](#downsubtitle)
- [focusOnButtonBar()](#focusonbuttonbar)
- [focusOnPlaybackBar()](#focusonplaybackbar)
- [upFocus()](#upfocus)
- [upSubtitle()](#upsubtitle)
- [seek(value)](#seek)
- [seekRange()](#seekRange)
- [seekLive()](#seekLive)

**Player state**

- [isControlBarOpen()](#iscontrolbaropen) ⇒ boolean
- [isCurrentAssetAd()](#iscurrentassetad) ⇒ boolean
- [isCurrentAssetMuted()](#iscurrentassetmuted) ⇒ boolean
- [isLanguageMenuOpen()](#islanguagemenuopen) ⇒ boolean
- [isLive()](#islive) ⇒ boolean
- [isPlayBackBarFocused()](#isplaybackbarfocused) ⇒ boolean

**Toggle**

- [toggleControlBar()](#togglecontrolbar)
- [toggleLanguagesMenu()](#togglelanguagesmenu)
- [togglePlayPause()](#toggleplaypause)
- [toggleFullScreen()](#togglefullscreen)

**Getters**

- [getAudioStreams()](#getaudiostreams) ⇒ [Array\<AudioStream\>](#audiostream)
- [getBandwidthEstimate()](#getbandwidthestimate) ⇒ number
- [getCurrentContentType()](#getcurrentcontenttype) ⇒ string
- [getCurrentSegmentContainer()](#getcurrentsegmentcontainer) ⇒ Object
- [getCurrentAudioStream()](#getcurrentaudiostream) ⇒ [AudioStream](#audiostream)
- [getCurrentSubtitle()](#getcurrentsubtitle) ⇒ number
- [getCurrentTime()](#getcurrenttime) ⇒ number
- [getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
- [getDroppedFrames()](#getdroppedframes) ⇒ number
- [getDuration()](#getduration) ⇒ number
- [getMediaElement()](#getmediaelement) ⇒ HTMLVideoElement
- [getPlaybackRate()](#getplaybackrate) ⇒ number
- [getProtocol()](#getprotocol) ⇒ number
- [getQualityLevels()](#getqualitylevels) ⇒ array
- [getSubtitles()](#getsubtitles) ⇒ array
- [getThumbnailAt()](#getthumbnailat) ⇒ Promise
- [getThumbnails()](#getthumbnails) ⇒ [Array\<Frame\>](#frame)
- [getTracks()](#gettracks) ⇒ [Array\<Track\>](#track)
- [getURL()](#geturl) ⇒ string
- [getVersion()](#getversion) ⇒ string *[Deprecated]*
- [getAvailabilityStartTime()](#getavailabilitystarttime) ⇒ number
- [getPublishTime()](#getpublishtime) ⇒ number
- [getTimeShiftBufferDepth()](#gettimeshiftbufferdepth) ⇒ number

**Setters**

- [setAudioStream(streamID)](#setaudiostream)
- [setCurrentTrack(trackID)](#setcurrenttrack)
- [setSpeed(speed)](#setspeed)
- [setSubtitle(subID)](#setsubtitle)
- [setTrack(qualityLevel)](#settrack)

**Static enums**

- [NexProtocol](#nexprotocol): enum
- [NexEvent](#nexevent): enum
- [THUMB_TYPE](#thumbtype): enum

**Global Typedefs**

- [AudioStream](#audiostream) : object
- [Error](#error) : object
- [Frame](#frame) : object
- [NexDRMInformation](#nexdrminformation) : object
- [NexHeaders](#nexheaders) : object
- [Track](#track) : object

**Ads methods and objects**

- [play()](#adplay)
- [pause()](#adpause)
- [skipAd()](#adskiped)
- [getAdCurrentTime()](#getadcurrenttime) ⇒ number
- [getAdDescription()](#getaddescription) ⇒ string
- [getAdDuration()](#getadduration) ⇒ number
- [getAdPaused()](#getadpaused) ⇒ boolean
- [getAdRemainingTime()](#getadremainingtime) ⇒ number
- [getAdTitle()](#getadtitle) ⇒ string
- [getIsSkippableAd()](#getisskippablead) ⇒ boolean
- [getMute()](#getmute) ⇒ boolean
- [getVolume()](#getvolume) ⇒ number
- [getAdErrorMessage()](#getAdErrorMessage) ⇒ string
- [getAdVastErrorCode()](#getAdVastErrorCode) ⇒ number
- [getAdErrorType()](#getgetAdErrorTypevolume) ⇒ string
- [setMute(state)](#setmute)
- [setVolume(value)](#setvolume)

## Nexplayer methods

#### <a id="setup"></a>nexplayer.Setup(configObj)

Creates and initializes the player.

Set NexPlayer settings using the configuration object as described in NexPlayer Configuration section.

**Parameters**: <code>configObj</code> is an object which values could be:

#### Mandatory Parameters:

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | NexPlayer key to validate the playback. |
| div | <code>HTMLDivElement</code> | The div container of the player. |
| src | <code>string</code> | URL of the video to be played. |

#### Optional Parameters:

| Param | Type | Description |
| --- | --- | --- |
| addRequestFilter | <code>Function</code> | Sets a function that receives the DRM request as a parameter and changes its Headers. |
| adsLoadTimeout | <code>number</code> | Determines the time the player waits for the ad to start. Parameter for IMA. |
| adsMode | <code>string</code> | Determines the ad library: 'ima', 'pal', 'dai' or 'default'. Note that 'dai' needs a <a href="#/ps5/api?id=daiConfig">`[daiConfig]`</a> object to work, while 'ima' and 'pal' require a VAST string. |
| adsParamsToEncode| <code>Array<string></code> | Specifies the name of the VAST ad URL parameters to encode. |
| autoplay | <code>boolean</code> | Determines if the video must start playing or paused. True by default. |
| bitrateConfig | <code>Object</code> | Determines whether the video will start playing at the bitrate you set by default. The tracks that the ABR will be able to select are the ones between minBitrate and maxBitrate.  |
| callbackForLogger | <code>Function</code> | Function to be called when the logger shows a message. |
| callbackForReturn | <code>Function</code> | Sets a callback to be executed when the corresponding button is clicked. |
| callbackForSubtitles | <code>Function</code> | Sets a callback to be executed when the corresponding subtitle is loaded. |
| callbacksWithPlayers | <code>Function</code> | Used for retrieving the nexplayer instance and video element. This is necessary for getting the instance and use the NexPlayer API. |
| cast | <code>boolean</code> | Determines if the cast will be enabled or not. |
| daiConfig | <code><a href="#/ps5/api?id=daiConfig">Object</a></code> | Used to initialize the DAI stream. |
| debug | <code>boolean</code> | Determines if log information is showed. By default is set to true. |
| defaultLanguage | <code>string</code> | Determines which is the default audio language. |
| disableKeyEvents | <code>boolean</code> | Determines if the keyboard keys can be used to control the video. |
| drm | <code>Object</code> | Contains an object of DRM information. By default it’s set to null. |
| enableVpaid | <code>boolean</code> | If it is set to true the player can execute VPAID ads, otherwise, the player will play other media that is available in the ad. In case no other media files are included in the ad an error will be fired. |
| externalSubtitles | <code>Array [\<externalSubtitle\>](#externalsubtitleobject)</code> | Used to provide subtitle files as external subtitles. |
| hideControlBarOnStart | <code>boolean</code> | Determines if the control bar will hide when the video starts. |
| hideUITime | <code>boolean</code> | Determines if the time will be hidden in the UI. |
| improveStartUp | <code>boolean</code> | Determines whether the video has to start at the lowest bitrate or not. |
| logosrc | <code>string</code> | Company URL logo. |
| mutedAtStart | <code>boolean</code> | Determines if the video will start playing muted or not. False by default. |
| pageUrl | <code>string</code> | Adds a parameter to the ad request to keep track of the domain that sent the request. For targeting purposes. <a href="https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest#pageUrl"> More info </a>. Parameter for IMA. |
| preferredAudioCodec | <code>Array</code> |This property can be used to give priority to a specific audio codec. |
| poster | <code>string</code> | Video poster URL. |
| reinitializeAfterAds | <code>boolean</code> | *[Deprecated]* Used to avoid errors related to ads on PS5, please set it to true on this platform. False by default. |
| resumePosition | <code>number</code> | Determines the position where the video will start playing. |
| retryParameters | <code>Object [\<retrySettings\>](#retrysettings)</code> | Determines the retry parameters for DRM, manifest, and streaming requests. |
| showAdsUI | <code>boolean</code> | Determines if the UI for ads is hidden or not. |
| showingFullUI | <code>boolean</code> | Determines if the UI is hidden or not. |
| ssaiMediaTailor | <code><a href="#/ps5/api?id=ssaiobject">Object</a> </code> | Configuration object for setting AWS MediaTailor endpoint and use SSAI. |
| staticThumbnails | <code>Object</code> | Thumbnail properties: VTT URL, image URL and a callback which returns an <a href="#/ps5/api?id=error">error</a> object.|
| startFullScreen | <code>boolean</code> | Determines if the video will start on full screen. |
| startingBufferLength | <code>number</code> | Determines the starting buffer length. |
| subtitle | <code>string</code> | Subtitle name of the video. |
| title | <code>string</code> | Video name. |
| trailer | <code>boolean</code> | Determines if a stream should be considered as a trailer. |
| useDefaultControls | <code>boolean</code> | Determines if the TV controller will be able to be used to navigate in the UI. |
| useDynamicThumbnails | <code>boolean</code> | Determines if dynamic thumbnails are used. By default this values is set to false. |
| useNewRelicTracker | <code>boolean</code> | Determines if the New Relic tracker will be used. |
| vast | <code>string</code> | Advertisement URL that is going to be played. VAST, VPAID, VMAP are supported. |

#### <a id="changesource"></a>nexplayer.ChangeSource({src: newSrc, drm: newDrm}))

Change the URL stream of the video. It is possible to set a new URL with new DRM config if necessary.

**Parameters**: <code>configObj</code> is an object which values could be:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| src   | <code>string</code> | URL of the video to be played. |
| drm   | [NexDRMInformation](#NexDRMInformation) | Contains an object of DRM information. |


#### <a id="unmount"></a>nexplayer.UnMount(player)

Unmounts the player and its dependencies. In order to properly clear the player this method must be called after destroying the very same player. Check more details <a href="#/ps5/api?id=destroy">here</a>.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| player | <code>HTMLElement</code> | Player tag |

#### <a id="isready"></a>nexplayer.IsReady()

Fetches the player mount/unmount status. If true, it can be mounted again.

**Returns**: boolean - Whether the player is ready to be mounted or not.

#### <a id="adsevents"></a>nexplayer.AdsEvents([<code>"adEvent"</code>](#ads-events), function () {})

Add a listener for the specified ad event.

#### <a id="removeadsevents"></a>nexplayer.RemoveAdsEvents([<code>"adEvent"</code>](#ads-events), function () {})

Remove a listener for the specified ad event which has been previously registered.

#### <a id="decodedata"></a>nexplayer.decodeData(data)

Decodes an ArrayBuffer and converts it into a string. END OF TEXT (\u0003) and NULL (\u0000) unicode characters are cleaned.

**Param**:
   - **data** is the ArrayBuffer to decode.

**Returns**: decoded and cleaned string or null if the parameter provided is not an ArrayBuffer.

#### <a id="nexplayer-getversion"></a>nexplayer.getVersion()

Retrieve the current version of the player.

**Returns**: string - identify the version of the player.

## Player methods and objects

#### <a id="play"></a>player.play()

Play the video.

#### <a id="pause"></a>player.pause()

Pause the video.

#### <a id="load"></a>player.load(url, startTime, externalSubtitles)

Loads a manifest starting it at the given position. Note that if the video has DRM, the player will try to use the DRM license of the old video.

**Parameters**:

| Param              | Type                  | Description                                |
| ------------------ | --------------------- | ------------------------------------------ |
| url                | <code>string</code>   | Manifest URL                               |
| startTime          | <code>number</code>   | Starting time of the video                 |
| externalSubtitles  | <code>[{src: string, language: string, callback: function},…]</code>   | Optional. External subtitles of the video  |

#### <a id="reload"></a>player.reload()

Reloads the player with the same video and current time. This function may help to recover from errors.

#### <a id="destroy"></a>player.destroy().then(UnMount(document.getElementById('player')))

Destroys the player. This method returns a promise which must call to UnMount as soon as it is resolved.
This way, the player will be completely destroyed and new instances could be created afterwards. The UnMount method must be called from the ‘nexplayer’ instance and needs the HTMLDivElement used to create the player in order to remove it.

#### <a id="on"></a>player.on(callbackType, functionToBeCalled)

Add a listener of an event.


**Parameters**:

| Param              | Type                  | Description                   |
| ------------------ | --------------------- | ----------------------------- |
| callbackType       | <code>NexEvent</code> | Event to listen for           |
| functionToBeCalled | <code>Function</code> | Function called on each event |

#### <a id="off"></a>player.off(callbackType, functionToBeCalled)

Remove a listener of an event.

**Parameters**:

| Param              | Type                  | Description                   |
| ------------------ | --------------------- | ----------------------------- |
| callbackType       | <code>NexEvent</code> | Event to listen for           |
| functionToBeCalled | <code>Function</code> | Function called on each event |

#### <a id="enableabr"></a>player.enableABR()

Enable the ABR to change automatically between tracks.

#### <a id="addtrackerdata"></a>player.addTrackerData(key, value)

Adds custom data into New Relic's tracker if initialized.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | Data variable name |
| value | <code>any</code>    | Data value         |

#### <a id="removetrackerdata"></a>player.removeTrackerData(key)

Removes custom data from New Rellic's tracker if initialized.

**Parameters**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | Data variable name |

#### <a id="trickplay"></a>player.trickPlay(value)

Sets the trick play value. A value bigger than 1 will move the seek time forward. A value negative will move it backward. Setting trick play value to 1 will end trick play and seek to the calculated seek time. This seek time results from the provided value which will increase the time to seek depending on how much time the trickplay is executed. Then, it will trigger an event trickPlayStarted when the value is changed, a trickPlayTimeUpdate event will be thrown every time the seek time changes, and trickPlayEnded event when the trick play stops. Use player.play(), player.stop() or player.seek() will finish the trick play.

| Param | Type |Description |
| --- | --- | --- |
| value | Number | number of times per second to update the seek time. |

#### <a id="setvolume"></a>player.setVolume(value)

Sets the new volume of the video. The value must be a number between 0 and 1.

| Param | Type |Description |
| --- | --- | --- |
| value | Number | New volume of the video. |

## Navigation

#### <a id="downfocus"></a>player.downFocus()

Focuses the element of the UI situated directly below the element currently focused.

#### <a id="downsubtitle"></a>player.downSubtitle()

Changes the current subtitles to the previous one in the subtitle track playlist.

#### <a id="focusonbuttonbar"></a>player.focusOnButtonBar()

Changes the focus to the play/pause button.

#### <a id="focusonplaybackbar"></a>player.focusOnPlaybackBar()

Changes the focus to the video's seekbar.

#### <a id="upfocus"></a>player.upFocus()

Focuses the element of the UI situated directly above the element currently focused.

#### <a id="upsubtitle"></a>player.upSubtitle()

Changes the current subtitles to the following one in the subtitle track playlist.

#### <a id="seek"></a>player.seek(value)

Set the currentTime property of the attached video element. (if isUTC is true, the seek value will be in a different format than the currentTime of the video element).

| Param | Type  | Description                                    |
| ----- | ----- | ---------------------------------------------- |
| value | <code>number</code> | value in seconds that the player will seek to. |

```js
//Non-live video
player.seek(120) // It seeks into minute 2:00 in the video (120 secs), must be a positive number ranging from 0 to the full duration of the video in seconds

//Live video
player.seek(-120) // It jumps back 2 minutes (120 secs) from the current live time, must be a negative number ranging from minus {the DVR window size} to 0
```

When using a live stream, the parameter’s value of the seek() method is a number that is added or subtracted to the current time of the video. Therefore, if the value provided plus the video’s current time is greater than the seek range end value the player will seek to the live point. When providing a negative value, it will be subtracted to the video’s current time so the player will seek range.

In order to use the seek() method, you must ensure that the value used is between the end and start value returned by the seekRange() method, in seconds.
- A value greater than the end seekRange value will seek to live.
- A value lower than the start seekRange will seek to the start value of the range.

```js
  // "player" is the player instance
  // "videoElem" is the HTMLVideoElement
  var timeToSeek = player.seekRange().start - videoElem.currentTime;
  player.seek(timeToSeek);
```

#### <a id="seekRange"></a>player.seekRange()

Returns an object, with start and ending times the player can seek to.

**Returns**: object - {start: "number" , end: "number"}

#### <a id="seeklive"></a>player.seekLive()

Jump to the livestream current time from the current position (if isUTC is true, the seek value will be in a different format than the currentTime of the video element). Only works in livestream.

## Player states

#### <a id="iscontrolbaropen"></a>player.isControlBarOpen() ⇒ boolean

**Returns**: boolean - *true* if the bar is showing, *false* otherwise.

#### <a id="iscurrentassetad"></a>player.isCurrentAssetAd() ⇒ boolean

Indicates whether the current asset playing is an ad or not

**Returns**: boolean - *true* if the current asset is an ad, *false* otherwise.

#### <a id="iscurrentassetmuted"></a>player.isCurrentAssetMuted() ⇒ boolean

Indicates whether the ad or the main content is muted or not.

**Returns**: boolean - *true* if the current asset is muted, *false* otherwise.

#### <a id="islanguagemenuopen"></a>player.isLanguageMenuOpen() ⇒ boolean

**Returns**: boolean - *true* if the Language/Subtitle menu is showing, *false* otherwise.

#### <a id="islive"></a>player.isLive() ⇒ boolean

**Returns**: boolean - *true* if the video is live, *false* otherwise.

#### <a id="isplaybackbarfocused"></a>player.isPlayBackBarFocused() ⇒ boolean

**Returns**: boolean - *true* if the seek bar of the video is currently focused, *false* otherwise.

## Toggle

#### <a id="togglecontrolbar"></a>player.toggleControlBar()

Shows or hides the bottom bar.

#### <a id="togglelanguagesmenu"></a>player.toggleLanguagesMenu()

Opens or closes the language menu.

#### <a id="toggleplaypause"></a>player.togglePlayPause()

Toggle the video playback between the play and pause states.

#### <a id="togglefullscreen"></a>player.toggleFullScreen()

Enables toggle between full screen and window.

## Getters

#### <a id="getaudiostreams"></a>player.getAudioStreams() ⇒ Array< AudioStream >

Get the available audio streams.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string</code> | contains a string with the languages audio available (by default it is empty). |
| name | <code>string</code> | contains a string with the names of audio files available (by default it is empty). |
| label | <code>string</code> | contains information about the label tag inside the manifest. Empty if not specified. |

**Returns**: Array\<AudioStream\> - the list of the available audio streams.

#### <a id="getbandwidthestimate"></a>player.getBandwidthEstimate() ⇒ number

Returns the current bandwidth available in bytes.

**Returns**: number - information about the bandwidth estimate.

 #### <a id="getcurrentsegmentcontainer"></a> player.getCurrentSegmentContainer() ⇒ Object

Get the current audio and video segment type.

This object contains the following information:

| Property | Type | Description |
| --- | --- | --- |
| audio | <code>String</code> | Audio segment container (for ts segments, this value will be null as this type of segment contains the video and audio in the same segment.)|
| video | <code>String</code> | Video segment container |

**Returns**: Object - Current audio and video segment container type.

#### <a id="getcurrentaudiostream"></a>player.getCurrentAudioStream() ⇒ AudioStream

Get the audio stream currently in use.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string<NexDRMInformation></code> | that contains a string with languages audio stream currently in use (by default it is empty). |
| name | <code>string<NexDRMInformation></code> | that contains a string with name of audio stream currently in use (by default it is empty). |
| label | <code>string</code> | contains information about the label tag inside the manifest. Empty if not specified. |

**Returns**: Array\<TrackInfo\> - information about the current audio track.

#### <a id="getcurrentcontenttype"></a>player.getCurrentContentType() ⇒ string

Returns the the type of the current asset (“ad”, “mainContent” or “none”)

**Returns**: string - information about the current audio track.

#### <a id="getcurrentsubtitle"></a>player.getCurrentSubtitle() ⇒ number

Retrieves the number id of the current subtitle. If the returned value is -1, no subtitle is selected.

**Returns**: number - id of the current subtitle.

#### <a id="getcurrenttime"></a>player.getCurrentTime() ⇒ number

Returns the current time of the video element.

**Returns**: number - the current time of the video in seconds.

#### <a id="getcurrenttrack"></a>player.getCurrentTrack() ⇒ Track

Get the current track information.

Track:

| Property | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | that contains a number with the width of the current track. |
| height | <code>number<NexDRMInformation></code> | that contains a number with the height of the current track. |
| bitrate | <code>number<NexDRMInformation></code> | that contains a number with the bitrate of the current track. |
| id | <code>number<NexDRMInformation></code> | of the current track. |

**Returns** Array\<TrackInfo\> - information about the current video track.

#### <a id="getdroppedframes"></a>player.getDroppedFrames() ⇒ number

Returns the number of frames dropped. 0 is returned if not available or no frames were dropped.

**Returns**: number - the number of frames dropped.

#### <a id="getduration"></a>player.getDuration() ⇒ number

Returns the video duration.

**Returns**: number - the duration of the video.

#### <a id="getmediaelement"></a>player.getMediaElement() ⇒ HTMLVideoElement

Returns the player's video element.

**Returns**: HTMLVideoElement- video element playing the stream.

#### <a id="getplaybackrate"></a>player.getPlaybackRate() ⇒ number

Returns the video's playback rate.

**Returns** number - video's playback rate.

#### <a id="getprotocol"></a>player.getProtocol() ⇒ number

Returns the stream's protocol ID, the number correspond to the [NexProtocol](#nexprotocol) enum values.

**Returns** number - the protocol of video to be played.


#### <a id="getqualitylevels"></a>player.getQualityLevels() ⇒ array

Get an array of video quality levels.

This array contains the following information:

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of this track. |
| width | <code>number</code> | that contains a number with the width of this track. |
| height | <code>number</code> | that contains a number with the height of this track. |
| bitrate | <code>number</code> | that contains a number with the bitrate of this track. |

**Returns**: array - contains all video quality levels.

#### <a id="getsubtitles"></a>player.getSubtitles() ⇒ array

Get the video subtitles info.

The returned array contains objects with the following properties:

| Property | Type                                   | Description                                                  |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| id       | <code>number</code>                    | is the identifier of each subtitle. It can be used to select the subtitle. |
| language | <code>string<NexDRMInformation></code> | that contains a string with subtitle stream (by default it is empty). |

**Returns**: Array - all the subtitles availables in the stream.

#### <a id="getthumbnailat"></a>player.getThumbnailAt() ⇒ Promise

Get the thumbnail at a specific video time.

**Returns**: Promise - waits for a specific thumbnail to load.

#### <a id="getthumbnails"></a>player.getThumbnails() ⇒ Array< Frame >

Get all the available thumbnails.

Each array's element contains the next information:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| f       | <code>canvas</code> | Thumbnail canvas instance.   |
| w       | <code>number</code> | Width.                       |
| h       | <code>number</code> | Height.                      |
| st      | <code>number</code> | Thumbnail starting time.     |
| ft      | <code>number</code> | Thumbnail ending time.       |

**Returns**: Array< Frame > - all the avaliable thumbnails.

#### <a id="gettracks"></a>player.getTracks() ⇒ Array< Track >

Get all the available video tracks (different qualities).

Each array's element contains the next information:

| Param   | Type                | Description                                        |
| ------- | ------------------- | -------------------------------------------------- |
| id      | <code>number</code> | of all tracks.                                      |
| width   | <code>number</code> | that contains a number with the width of all tracks.   |
| height  | <code>number</code> | that contains a number with the height of all tracks.  |
| bitrate | <code>number</code> | that contains a number with the bitrate of all tracks. |

**Returns**: Array< Track > - all the available video tracks and its different levels of quality.

#### <a id="geturl"></a>player.getURL() ⇒ string

Returns the current stream's URL.

**Returns**: string - stream URL.

#### <a id="getversion"></a>player.getVersion() ⇒ string

The method getVersion() is deprecated, please use <a href="./#/ps5/api?id=nexplayer-getversion">nexplayer.getVersion()</a> instead.

**Returns**: string - identify the version of the player.

#### <a id="getavailabilitystarttime"></a>player.getAvailabilityStartTime() ⇒ number

The presentation's start time in seconds.

**Returns**: number.


#### <a id="getpublishtime"></a>player.getPublishTime() ⇒ number | null

Specifies the wall-clock time when the MPD was generated and published at the origin server.
This method is not supported for HLS streams and the return value is null.

**Returns**: number.


#### <a id="gettimeshiftbufferdepth"></a>player.getTimeShiftBufferDepth() ⇒ number

Gets the presentation's segment availability duration.

**Returns**: number.

## Setters

#### <a id="setaudiostream"></a>player.setAudioStream(streamID)

Set the current audio stream.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | is the identifier of the audio stream to be selected. |

#### <a id="setcurrenttrack"></a>player.setCurrentTrack(trackID)

Set the current track.

**Parameters**:

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | is the identifier of the audio stream to be selected. |

#### <a id="setspeed"></a>player.setSpeed(speed)

Set the video playback speed.

**Parameters**:

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| speed | <code>number</code> | speed value. |

#### <a id="setsubtitle"></a>player.setSubtitle(index)

Set the video subtitles. Use -1 for deactivating the subtitles.

**Parameters**:

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| index | <code>number</code> | index of the subtitles list. |

#### <a id="settrack"></a>player.setTrack(qualityLevel)

Set the video quality level.

**Parameters**:

| Param | Type | Description |
| --- | --- | --- |
| qualityLevel | <code>number</code> | index of the track to be selected. |

## Static enums

#### <a id="nexprotocol"></a>player.NexProtocol : <code>enum</code>

**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| HLS | <code>number</code> | <code>0</code> |
| DASH | <code>number</code> | <code>1</code> |
| UNKNOWN | <code>number</code> | <code>3</code> |

#### <a id="nexevent"></a>player.NexEvent : <code>enum</code>

**Properties**:

| Name | Type | Default | Explanation |
| --- | --- | --- | --- |
| Track_Change | <code>number</code> | <code>0</code> | Fired when the player changes the current track.|
| Fragment_Loading_Completed | <code>number</code> | <code>1</code> | Fired when a new fragment has been loaded.|
| Buffering | <code>number</code> | <code>2</code> | Fired when the buffer state changes. Check payload for state. |
| Error | <code>number</code> | <code>3</code> | Fired when an error occurs. Returns an object with the information of the error. The object contains an array with the data (not all errors include data), and the name. |
| Stall_Detected | <code>number</code> | <code>5</code> | Fired when a stall is detected. |

#### <a id="thumbtype"></a>player.THUMB_TYPE : <code>enum</code>

**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| STATIC_THUMBNAILS | <code>number</code> | <code>0</code> |
| DYNAMIC_THUMBNAILS | <code>number</code> | <code>1</code> |


## Global typedefs

#### <a id="audiostream"></a>AudioStream : <code>Object</code>

**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id of the stream. |
| language | <code>string</code> | language of the stream. |
| name | <code>string</code> | name of the stream. |
| label | <code>string</code> | contains information about the label tag inside the manifest. Empty if not specified. |

#### <a id="error"></a>Error : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| code    | <code>number</code> | Error code.                    |
| message | <code>string</code> or <code>Object</code> | Error detailed message. In case the message is an Object, it will represent the request's response statusText parsed into an Object.      |
| src     | <code>string</code>  | Source link causing the error.   |
| type    | <code>string</code> | File type causing the error. **"Manifest"** and **"Image"** are the possible values.                                     **Manifest** indicates that the error has happened at the level of the thumbnails file e.g. the URL of the thumbnails files does not exist (error 404).   **Image** indicates that the error has ocurred at the level of a thumbnail image e.g the URL of a thumbnail image, which is specified inside the thumbnails    manifest, does not exist (error 404). |

Possible error codes:

**Manifest**:

  404: Manifest not found

  420: Manifest load error

  422: Empty manifest | No thumbnails found

  Other error codes come directly from the status code of the request's response.

**Image**:

  420: Image not loaded

  422: Invalid image

#### <a id="frame"></a>Frame : <code>Object</code>

**Properties**:

| Name    | Type                | Description                  |
| ------- | ------------------- | ---------------------------- |
| f       | <code>canvas</code> | Thumbnail canvas instance.   |
| w       | <code>number</code> | Width.                       |
| h       | <code>number</code> | Height.                      |
| st      | <code>number</code> | Thumbnail starting time.     |
| ft      | <code>number</code> | Thumbnail ending time.       |

#### <a id="nexdrminformation"></a>NexDRMInformation : <code>Object</code>

**Properties**:

| Name       | Type                                                 | Description              |
| ---------- | ---------------------------------------------------- | ------------------------ |
| NexDRMType | <code>string</code>                                  | NexDRMType of the video. |
| NexDRMKey  | <code>string</code>                                  | NexDRMKey of the video.  |
| NexHeaders | [<code>Array.&lt;NexHeaders&gt;</code>](#NexHeaders) | NexHeaders of the video. |

#### <a id="nexheaders"></a>NexHeaders : <code>Object</code>

**Properties**:

| Name       | Type                | Description         |
| ---------- | ------------------- | ------------------- |
| FieldName  | <code>string</code> | of the HTTPHeaders. |
| FieldValue | <code>string</code> | of the HTTPHeaders. |

#### <a id="track"></a>Track : <code>Object</code>

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| width   | <code>number</code> | width of the video.   |
| height  | <code>number</code> | height of the video.  |
| bitrate | <code>number</code> | bitrate of the video. |
| id      | <code>number</code> | id of the video.      |

#### <a id="ssaiobject"></a>SSAI Object : <code>Object</code>

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| baseURL   | <code>string</code> | Base URL for Video and Ads.   |
| playbackURL  | <code>string</code> | Video URL to be attached to the baseURL.  |
| adsParams | <code>Object</code> | Contains "Params: string" this is the Ad URL to be attached to the baseURL. |

#### <a id="bitrateconfig"></a>bitrateConfig Object : <code>Object</code>

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| minBitrate   | <code>num</code> | The player should ignore any bitrate profiles in the manifest under this value, and never play them.   |
| startingBitrate  | <code>num</code> |  The bitrate the player will try to start playing.  |
| maxBitrate | <code>num</code> | The player should ignore any bitrate profiles in the manifest above this value, and never play them. |

#### <a id="externalsubtitleobject"></a>externalSubtitle: <code>Object</code>

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| src   | <code>String</code> | Subtitles file URL |
| language  | <code>String</code> |  Subtitle language identifier  |
| callback | <code>Function</code> | Error callback |


#### <a id="retrysettings"></a> retrySettings: <code>Object</code>

**Type**: global typedef

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| drm   | <code>Object \<retryConfig\></code> | Subtitles file URL |
| streaming   | <code>Object \<retryConfig\></code> | Subtitles file URL |
| manifest   | <code>Object \<retryConfig\></code> | Subtitles file URL |

#### <a id="retryConfig"></a> retryConfig: <code>Object</code>

**Type**: global typedef

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| timeout   | <code>number</code> | Timeout in ms, after which the player aborts. |
| stallTimeout   | <code>number</code> | Stall timeout in ms, after which the player aborts. |
| connectionTimeout   | <code>number</code> | Connection timeout in ms, after which the player aborts. |
| maxTries   | <code>number</code> | The maximum number of requests before player fails. |
| retryDelay  | <code>number</code> |  The base delay in ms between retries. |


#### <a id="daiConfig"></a> daiConfig: <code>Object</code>

**Type**: global typedef

**Properties**:

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| ASSET_KEY   | <code>string</code> | Identifier of the live content that wants to be played. <a href="https://support.google.com/admanager/answer/7294289#locate-a-live-linear-stream-url-and-asset-key">More info</a>. Live streams only. |
| CONTENT_SOURCE_ID   | <code>number</code> | Unique identifier for the publisher content, from a CMS. VOD only. |
| VIDEO_ID   | <code>string</code> |Identifier for the video content source. VOD only. |



## Ads methods

#### <a id="adplay"></a>nexplayer.AdInstance().play()

Play the ad

#### <a id="adpause"></a>nexplayer.AdInstance().pause()

Pause the current ad.

 #### <a id="adskiped"></a> nexplayer.AdInstance().skipAd()

This method only has an effect if the ad on stage is a skippable ad and can be skipped (e.g. getIsSkippableAd returns true, we can skip the ad)

#### Getters

#### <a id="getadcurrenttime"></a>nexplayer.AdInstance().getAdCurrentTime() ⇒ number

Get the current time ad.

**Returns**: Number - the current time ad to be played.

#### <a id="getaddescription"></a>nexplayer.AdInstance().getAdDescription() ⇒ string

Get the available description ad.

**Returns**: String - the description ad to be played.

#### <a id="getadduration"></a>nexplayer.AdInstance().getAdDuration() ⇒ number

Get the available duration ad.

**Returns**: Number - the duration ad to be played.

####  <a id="getadpaused"></a>nexplayer.AdInstance().getAdPaused() ⇒ boolean

Get stating if the ad on stage is paused or not

**Returns**: boolean - *true* if the ad on stage is paused *false* if it is not.

#### <a id="getadremainingtime"></a>nexplayer.AdInstance().getAdRemainingTime() ⇒ number

Get the remaining time ad.

**Returns**: Number - the remaining time ad to be played.

#### <a id="getadtitle"></a>nexplayer.AdInstance().getAdTitle() ⇒ string

Get the available title ad.

**Returns**: String - the title ad to be played.

####  <a id="getisskippablead"></a>nexplayer.AdInstance().getIsSkippableAd() ⇒ boolean

Returns whether the ad can be skipped or not.

**Returns**: boolean - *true* if the video can be skip. *false* if it is not.

####  <a id="getmute"></a>nexplayer.AdInstance().getMute() ⇒ boolean

Get the mute state of an ad depending on what is on stage.

**Returns**: boolean - *true* if the ad can is mute. *false* if it is not.

####  <a id="getvolume"></a>nexplayer.AdInstance().getVolume() ⇒ number

Get the volume of ad depending on what is on stage.

**Returns**: number - is a number between 0 and 1. -1 is returned if this value is not available.

<a id="getAdErrorMessage"></a>

#### nexplayer.AdInstance().getAdErrorMessage() ⇒ string

Returns the error message for the current ad error.

**Returns**: string - The error message for the current error.

<a id="getAdVastErrorCode"></a>

#### nexplayer.AdInstance().getAdVastErrorCode() ⇒ number

Returns the VAST error code for the current ad error.

**Returns**: number - The VAST error code for the current error. -1 is returned if this value is not available.

<a id="getAdErrorType"></a>

#### nexplayer.AdInstance().getAdErrorType() ⇒ string

Returns the detected ad error type for the current ad error.

**Returns**: string - The detected ad error type, possible values: 'adLoadError', 'adPlayError' or '' (if unknown error type).

#### Setters

#### <a id="setmute"></a>nexplayer.AdInstance().setMute(state)

Set value should be a Boolean. True for muting and false for unmuting.

#### <a id="setvolume"></a>nexplayer.AdInstance().setVolume(value)

Set value should be a Number between 0 (minimum volume) and 1 (maximum volume).

## Advanced Usage

NexPlayer offers more advanced options to control the playback. This section contains several examples of how to use these features.

### Accessing the player

An instance of the player and the video element will be accessible once NexPlayer™ is configured and loaded. The 'callbacksForPlayer' option should be set. The defined function will be called when the player is considered ready. Once the callback is received, the playback can be controlled with the NexPlayer™ instance and the associated video element.

```js
var callBackWithPlayers = function (nexplayerInstance, videoElement) {
  // Eg. seeking to 30 sec from outside the predefined UI could be done like this
  nexplayerInstance.seek(30);
}

nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
  div: document.getElementById('player'),
  src: 'VIDEO URL',
  callbacksForPlayer: callBackWithPlayers
});

```
<div class="alert alert-success hints-alert"><div class="hints-icon"><i class="fa fa-mortar-board"></i></div><div class="hints-container"><p>We strongly recommend calling the APIs after the player is ready.</p>
</div></div>


### Destroying the player

If you want to reuse the same div for different videos, the container div must be unmounted properly. The way this is done has changed recently, now the following command must be used:

```js
player.destroy().then(nexplayer.UnMount(document.getElementById('player')));
```

#### Unmounted and mounted events

In the case of using an await procedure to unmount the player, it is convenient to ensure that the Setup is called after the UnMount method is finished. This can be done via the <a href="#/ps5/api?id=isready">IsReady</a> method that returns a boolean value which indicates whether the player can be mounted or not. The recommended way to do this is via events, which are the following:

* mounted
* unmounted

When "unmounted" is triggered after calling UnMount, the player is ready to be initialized again. This means that creating a listener on this event and calling the Setup from there will always mount the player properly. The "mounted" event just notifies that the player has started the initialization. The listener must be added on the player HTML tag, usually called "player". For example, for the "unmounted" event, it would look like this:

```js
document.getElementById('player').addEventListener("unmounted", function() {/* Do something here */});
```

### Content Protection

Digital rights management (DRM) is a set of access control technologies for restricting the use of proprietary hardware and copyrighted works.

?> Most of the DRMs available won't work without using HTTPS with a certificate. For development purposes, a tool like <a style ="color:#5A5A5A!important" href="https://ngrok.com/" target="_blank">ngrok</a> can be used to test DRM-protected links.
NexPlayer supports several DRM technologies:

<table class="markdown-section">
  <tbody>
    <thead>
      <th class="titles" scope="row">MODELS </th>
      <th class="titles" scope="row">DASH+PlayReady</th>
      <th class="titles" scope="row">DASH+Widevine</th>
      <th class="titles" scope="row">HLS+Widevine</th>
      <th class="titles" scope="row">HLS+Playready</th>
    </thead>
    <tr>
      <td  scope="row">Samsung Tizen
      <br> 2017-2018+ models</td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px; ">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px; ">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
       <td  scope="row">Samsung Tizen
       <br> 2015-2016 models</td>
      <td  scope="row">&#10060</td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(49, 112, 143); font-weight:110; font-size:30px;">&#8505;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(49, 112, 143); font-weight: 900; font-weight:110; font-size:30px;">&#8505;</span></td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
      <td  scope="row">LG WebOS 4.0+</td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
      <td  scope="row">LG WebOS 3.0</td>
      <td  scope="row">&#10060</th> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
  </tbody>
</table>

?> Widevine Classic was supported in these models, but ​it has been deprecated by Google. It is no longer supported on Samsung TVs due to maintenance issues

?> For using Playready on Tizen the security level must be 2000, the clients version less than 3.0 and WRMHEADER version of 4.0.0.0. or lower. <br/>
- In Xbox the security level must be 150 on dev kit.
- In LG devices capabilities and restrictions in the following <a href="https://webostv.developer.lge.com/discover/specifications/supported-media-formats/">link</a>.
- In PS5, it should be setup in the configuration as below:


```js
nexplayer.Setup({
...
  configuration: {
      drm: {
          advanced: {
              'com.microsoft.playready': {
                  distinctiveIdentifierRequired: true,
              },
          }
      },
  },
});
```


<table class="markdown-section">
  <tbody>
    <thead>
      <th class="titles" scope="row">FEATURE </th>
      <th class="titles" scope="row">PLAYREADY</th>
      <th class="titles" scope="row">WIDEVINE</th>
    </thead>
    <tr>
      <td  scope="row">Encrypted key </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
       <td  scope="row">Separate encryption key server </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
      <td  scope="row">Hardware DRM </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
    <tr>
      <td  scope="row">Custom Headers</td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span> </td>
      <td  scope="row"><span style="color: transparent;  text-shadow: 0 0 0 rgb(42, 170, 82); font-weight:100; font-size:25px;">&#x2714;</span></td>
    </tr>
  </tbody>
</table>

?> For Tizen, DRM is supported from 2017 device models and higher<br>
?> For WebOS, DRM is supported from WebOS 3.0 and higher

#### Widevine

A DRM powered by <a href =https://www.widevine.com target="_blank">Google</a>. It can be set by entering the information into the DRM array:

```js
var nexDRMInformationWidevine = {
  NexDRMType:'com.widevine.alpha',
  NexDRMKey: 'DRM key URL',
  NexHeaders:[{FieldName: 'Optional field name', //Optional
               FieldValue: 'Optional field value'}] //Optional
};
nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
    div: document.getElementById('player'),
    src: 'VIDEO URL',
    drm: [nexDRMInformationWidevine]
});

```

?> Please note that the HTTP headers (NexHeaders) are optional, and might depend on the implementation of the Widevine server used.

#### Playready

A DRM powered by <a href =https://www.microsoft.com/playready/ target="_blank">Microsoft</a>. It can be used by entering the information into the DRM array:

```js
var nexDRMInformationPlayReady = {
NexDRMType:'com.microsoft.playready',
 NexDRMKey: 'DRM key URL',
NexHeaders:[{FieldName: 'Optional field name',  //Optional
            FieldValue: 'Optional field value'}]}; //Optional

nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
    div: document.getElementById('player'),
    src: 'VIDEO URL',
    drm: [nexDRMInformationPlayReady]
});
```

?> Please note that the HTTP headers (NexHeaders) are optional, and might depend on the implementation of the PlayReady server used.

#### CENC

The Common Encryption Scheme (CENC) specifies the standard to enable decryption of the same file using different DRM systems. It allows the same CENC-encrypted content to be decrypted and played by any client device that interfaces with a DRM system that can serve the associated CENC key information.

For example, Widevine and PlayReady can be used with the same DASH manifest and chunk files:

```js
// Widevine
var nexDRMInformationWidevine = {NexDRMType:'com.widevine.alpha',
 NexDRMKey: 'DRM key URL',
            NexHeaders:[{FieldName: 'Optional field name',  //Optional
            FieldValue: 'Optional field value'}]}; //Optional

// PlayReady
var nexDRMInformationPlayReady = {NexDRMType:'com.microsoft.playready',
 NexDRMKey: 'DRM key URL',
            NexHeaders:[{FieldName: 'Optional field name', //Optional
            FieldValue: 'Optional field value'}]}; //Optional

nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
    div: document.getElementById('player'),
    src: 'VIDEO URL',
    drm: [nexDRMInformationWidevine, nexDRMInformationPlayReady]
});

```

#### AES

> NexPlayer stopped the support for AES.

#### Custom Headers

Custom headers can be included in each HTTP petition, even without the use of DRM, to include extra information for the server.

This information can be passed in the DRM array:

```js
drmCustomHeaders = {NexHeaders:[{FieldName: 'Optional field name', FieldValue: 'Optional field value'}]};

nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
    div: document.getElementById('player'),
    src: 'VIDEO URL',
    drm: [drmCustomHeaders]
});
```

?> Please note that this method is not as secure as other DRMs.

Custom headers are supported with HLS and DASH.

#### Coming from AVPlay

If you are migrating from AVPlay to our player, in order to configurate the DRM header, it could be helpful to take a look at this information.

The way to introduce a header in AVPlay is like the following example (different way from our player):

```js
DRM_NAME: {
    name: 'DRM NAME',
    url:  'REPLACE THIS WITH YOUR MEDIA URL',
    licenseServer: 'REPLACE THIS WITH YOUR LICENSE SERVER URL',
    customData: 'REPLACE THIS WITH YOUR CUSTOM DATA'
};
```

To enter the same configuration in our player it should be done like this (PlayReady used as example):

```js
var nexDRMInformationPlayReady = {
    NexDRMType: 'DRM NAME (e.g. com.microsoft.playready)',
    NexDRMKey: 'REPLACE THIS WITH YOUR LICENSE SERVER URL',
    NexHeaders:[{FieldName: 'X-AxDRM-Message' FieldValue:'REPLACE THIS WITH YOUR CUSTOM DATA'}]
};
src:  'REPLACE THIS WITH YOUR MEDIA URL',
```

FieldName should be specified (if you don’t know this field, please enter 'X-AxDRM-Message') and as FieldValue should be included the wanted custom data.

### Ads

NexPlayer supports the VAST, VPAID, and VMAP ad formats.

IMA and PAL libraries can be used for ad playback as well as NexPlayer's own solution.

You can insert any pre/mid/post roll ad by setting up the ad links as below:

```js
nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
  div: document.getElementById('player'),
  src: 'VIDEO URL',
  vast: 'VAST / VPAID / VMAP link',
  adsMode: 'pal / ima / default',
});
```

Sample VAST links can be found on the <a href =https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags target="_blank">Google Website</a>.

DAI libraries can be used for ad playback, as well as the NexPlayer solution itself.

```js
nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
  div: document.getElementById('player'),
  daiConfig: {
    ASSET_KEY : 'KEY',
    CONTENT_SOURCE_ID : 'ID',
    VIDEO_ID : 'ID',
  },
  adsMode: 'dai / default',
});
```
Get started  <a href =https://developers.google.com/interactive-media-ads/docs/sdks/other target="_blank">Google Website</a>.

In order to use IMA, DAI or PAL, a script must be provided in the index, which are the following respectively:

```js
<!-- IMA -->
<script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
<!-- Currently, only IMA 3 is supported -->

<!-- DAI -->
<script src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"></script>

<!-- PAL -->
<script src="https://nex360.s3.amazonaws.com/PAL/pal.js" ></script>
```

### Ads methods

The following methods should be queried after the adstarted event has fired for accurate data with nexplayer.AdInstance()

#### Get methods

* `getAdTitle() ⇒ String` Represents the VAST AdTitle tag.
* `getAdDescription() ⇒ String` Represents the VAST Description tag.
* `getAdDuration() ⇒ Number` Represents the duration of the selected linear creative in milliseconds. Returns -1 if this value is not available.
* `getAdCurrentTime() ⇒ Number` Represents the current timestamp in the selected linear creative in milliseconds. Returns -1 if this value is not available.
* `getAdRemainingTime() ⇒ Number` Represents the current time remaining in the selected linear creative in milliseconds. Returns -1 if this value is not available.
* `getIsSkippableAd() ⇒ Boolean` States if the loaded linear ad is a VAST skippable ad - can be queried when adloaded event fires.
* `getVolume() ⇒ Number` Represents the volume level in the ad.
* `getAdErrorMessage() ⇒ String` Represents the error message of the current ad error.
* `getAdVastErrorCode() ⇒ Number` Represents the VAST error code of the current ad error.
* `getAdErrorType() ⇒ String` Represents the error type of the current ad error.
* `getMute() ⇒ boolean` Indicates if the ad is mute.

```js
nexplayer.AdsEvents('adstarted', function(e){
    console.log("Time: ", nexplayer.AdInstance().getAdRemainingTime());
});
```

#### Set methods

* `setVolume()` Set a number in order to indicate the volume level.
* `setMute()` Set true when you want to mute the ad, and false to unmute it.

```js
nexplayer.AdsEvents('adstarted', function(e){
    nexplayer.AdInstance().setVolume(0.5);
});
```

#### Miscellaneous

* `addEventListener()` Adds a listener to the ads video. The possible events to listen are the same as the HTML video element ones. Important: this method should be called inside the Setup's callback or after the player is initialized. Example of use:

```js
var callBackForPlayers = function (nexplayerInstance, videoElement) {
    nexplayer.AdInstance().addEventListener('playing', function() {
      console.log("PLAYING --- ");
    });
    nexplayer.AdInstance().addEventListener('waiting', function() {
      console.log("WAITING --- ");
    });
}
...
nexplayer.Setup({
    key: ...

    callbacksForPlayer: callBackForPlayers
});
```

### Events

References to the <a href="#/ps5/api?id=access-to-the-player-instances">player instances</a> are needed to register callbacks.
There are two types of emitted events that can be listened to.

#### Video Element Events

The video element emits the basic event, such as a change of the state of the video (pause/play/buffering), or informs that the current time of the video has changed.

The method <code>addEventListener</code> of the video element needs to be called with any of the available <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank">media events</a>.

Some of the most important events are "playing", "pause", "waiting", "timeupdate", "seeking" and "seeked".

```js
HTMLVideoElement.addEventListener("timeupdate", function() { console.log("The video playback has advanced to: "+videoElement.currentTime+", with the duration: "+videoElement.duration) }, true);
```

#### <a id="customevents"></a>Custom Events


We also have custom events to handle some different kind of video events.
```js
HTMLVideoElement.addEventListener("customEvent", function(event) { console.log("Custom Event") });
```

##### bufferType

This event will be fired when a buffering event occurs and it specifies what type of buffering occurred (connection, seek, initial, background).
```js
// Accessing the type of the buffer
var bufferType = event.detail;
```

**detail** Contains a string indicating the type of buffering: connection, seek, initial or background.

```js
HTMLVideoElement.addEventListener("bufferType", function(e) { console.log("Buffer Type", e) });
```

##### nexplayererror

Sent when a NexPlayer error is fired. The **event** parameter has the **detail** property that contains the error message:

```js
// Accessing the error message
var errorMessage = event.detail;
```

##### onstatechange

This event is fired when the state of player is changed. The **event** parameter for the callback function has a property called **detail** that stores the current state of the player:

```js
// Accessing the current state of the player
var currentState = event.detail;
```

**detail** type is String and can have the following values:

1. Ready
2. Buffering
3. Playing
4. Paused
5. Ended

##### videofirstquartile

This event is fired when the 25% of the video's duration has been reached. The **event** parameter for the callback function has a property called **detail**
that stores the time of the quartile:

```js
// Accessing the time of the quartile
var firstQuartile = event.detail;
```

**detail** type is number and returns the quartile time

```js
HTMLVideoElement.addEventListener('videofirstquartile', function(e){
  console.log("VIDEO FIRST QUARTILE -----> ", e);
});
```

##### videomidpoint

This event is fired when the 50% of the video's duration has been reached. The **event** parameter for the callback function has a property called **detail** that stores the time of the quartile:

```js
// Accessing the time of the quartile
var midPoint = event.detail;
```

**detail** type is number and returns the quartile time

```js
HTMLVideoElement.addEventListener('videomidpoint', function(e){
  console.log("VIDEO MID POINT -----> ", e);
});
```

##### videothirdquartile

This event is fired when the 75% of the video's duration has been reached. The **event** parameter for the callback function has a property called **detail** that stores the time of the quartile:

```js
// Accessing the time of the quartile
var thirdQuartile = event.detail;
```

**detail** type is number and returns the quartile time

```js
HTMLVideoElement.addEventListener('videothirdquartile', function(e){
  console.log("VIDEO THIRD QUARTILE -----> ", e);
});
```

##### videoProgressTime

This event is fired when the (5%, 15%, 25%, 50%, 75%, 85%, 95%) of the video's duration has been reached. The **event** parameter for the callback function has a property called **detail**
that stores the percentage time:

**detail** type is string and returns the percentage time (5%, 15%, ...)

```js
HTMLVideoElement.addEventListener('videoProgressTime', function(e){
  console.log("VIDEO PROGRESS TIME -----> ", e.detail);
});
```

##### 60secondsin

This event is fired when the current video time is 60 or more seconds:
```js
// Accessing the time when the event is triggered
var sixtysecondsin = event.detail;
```

**detail** type is number and returns the quartile time

```js
HTMLVideoElement.addEventListener('60secondsin', function(e){
  console.log("60 SECONDS IN -----> ", e);
});
```

##### trickPlayStarted

This event is fired when the trick play value is changed:

```js
// Accessing the time when the event is triggered
var trickPlayTime = event.detail;
```

**detail** type is number and returns time when trick play started (currentTime when trick play value changed).

```js
HTMLVideoElement.addEventListener('trickPlayStarted', function(e){
  console.log("Trick play changed at time:", e.detail);
});
```

##### trickPlayTimeUpdate

This event is fired each time trick play time is changed (with a frequency of value times per second):


```js
// Accessing the time when the event is triggered
var trickPlayTime = event.detail;
```

**detail** type is number and returns the time where trick play is.

```js
HTMLVideoElement.addEventListener('trickPlayTimeUpdate', function(e){
  console.log("Trick play updated at time:", e.detail);
});
```

##### trickPlayEnded

This event is fired when trick play ends:
```js
// Accessing the time when the event is triggered
var trickPlayTime = event.detail;
```

**detail** type is number and returns the time where trick play is.

```js
HTMLVideoElement.addEventListener('trickPlayEnded', function(e){
  console.log("Trick play ended at time:", e.detail);
});
```

##### mounted

This event just notifies that the player has started the initialization. The listener must be added on the player HTML tag, usually called “player”.

```html
<div id="player_container">
  <div id="player"></div>
</div>
```

```js
document.getElementById('player').addEventListener('mounted', function() {/* Do something here */});

nexplayer.Setup({
  key: 'YOUR LICENSE KEY',
  div: document.getElementById('player'),
  ...
})
```

##### unmounted

This event is triggered after calling "nexplayer.UnMount()", therefore it indicates that the player is ready to be initialized again.

```html
<div id="player_container">
  <div id="player"></div>
</div>
```

```js
document.getElementById('player').addEventListener('unmounted', function() {/* Do something here */});

nexplayer.Setup({
  key: 'YOUR LICENSE KEY',
  div: document.getElementById('player'),
  ...
})
```

##### subtitlesready

This event is triggered when all the subtitles are available.

```js
HTMLVideoElement.addEventListener("subtitlesready", function (event) {

  // The subtitles are ready to be used
  console.log("Subtitles ready: ", nexplayerInstance.getSubtitles());
  // At this point it is posibble to select any subtitle available
  nexplayerInstance.setSubtitle(0);
});
```

#### Nexplayer Events

Advanced events such as a track change are available using the <code>on</code> method of NexPlayer.

```js
nexplayerInstance.on(nexplayer.Player.NexEvent.Track_Change, function() { console.log("The current track has changed") });
```

These events can be removed using the <code>off</code> method:

```js
nexplayerInstance.off(eventId);
```

#### Ads events

We also have events to handle some different kind of ads events.

We have the next list of ad events available:

* adtagstartloading Note: This event is not triggered when using IMA.
* adloaded
* addurationchange
* adimpression
* adpaused
* adresumed
* adskipped
* adfirstquartile
* admidpoint
* adthirdquartile
* adcomplete
* adclick
* advolumemuted
* advolumechanged
* adclosed
* aderror
* addestroyed

```js
var f = function() { console.log("this is an example") };
nexplayer.AdsEvents('event name', f);
```

To remove the event, do the following:

```js
nexplayer.RemoveAdsEvents('event name', f);
```

#### <a id="adscustomevents"></a>Ads custom events

* adstarted: Start an individual ad, contains the ad position in the block in the detail attribute.
* adblockstart: Contains the number of ads in the block in the detail attribute.
* adpodsinfo: Contains all ad pods information.
* adblockend: Event launched when an ad block (some ads in the same timestamp) ends.

```js
nexplayer.AdsEvents('custom event name', function (e) {console.log("this is an example", e.detail)});;
```

### Custom Actions

Advanced actions can be performed with a player instance. For the full action list, check <a href="#/ps5/api" target="_blank">NexPlayer API</a>

#### ABR

HLS and DASH streams contain several video bitrates in order to adjust the quality based on the network conditions. Changes in bitrate are done automatically when ABR (Adaptive Bitrate) is enabled (default behavior).

The currently selected track can be obtained with the method <code>getCurrentTrack</code>of NexPlayer™. It returns all the track information.

```js
nexplayerInstance.getCurrentTrack();
```
All the available tracks can be obtained with the method <code>getTracks </code> of NexPlayer™.

```js
nexplayerInstance.getTracks();
```

Setting a fixed track can be achieved by calling the method <code>setTrack</code> of NexPlayer™.

```js
// Sets the first track as the used one
nexplayerInstance.setTrack(nexplayerInstance.getTracks()[0].id);
```

A change in the current track can be detected with the NexPlayer™ <a href="#/ps5/api?id=callbacks" >callbacks</a>.

#### Subtitles


Information about the available subtitles can be retrieved with the <code>textTracks</code> attribute of the video element.

```js
videoElement.textTracks;
```

The active subtitles mode is set to <code>showing</code>. The currently selected subtitle can also be selected by setting the mode to showing. A subtitle can be deselected by setting the mode to <code>hidden</code>.

```js
videoElement.textTracks[0].mode = "showing"; //0 -> the id of the textTrack
```

#### Audio

Information about the current audio can be retrieved with the method <code>getCurrentAudioStream</code> of NexPlayer™. It returns all the audio information for that stream.

```js
nexplayerInstance.getCurrentAudioStream();
```

All the available audio tracks can be retrieved with the method <code>getAudioStreams</code> of NexPlayer™.

```js
nexplayerInstance.getAudioStreams();
```

The currently used audio stream can be set with the method <code>setAudioStream</code> of NexPlayer™, passing one of the IDs of <code>getAudioStreams</code>.

```js
// Sets the first audio stream as the used one
nexplayerInstance.setAudioStream(nexplayerInstance.getAudioStreams()[0].id);
```

#### Seek

Seeking to a certain time can be achieved by calling the method <code>seek</code> of the NexPlayer™ and passing the desired number of seconds.

```js
nexplayerInstance.seek(30);
```

#### Picture in Picture

Only supported by platforms that actually allow picture in picture API.

```js
var callBackWithPlayers = function (nexplayerInstance, videoElement) {
    videoElement.requestPictureInPicture();
  };

  nexplayer.Setup({
    key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
    div: document.getElementById('player'),
    src: 'VIDEO URL',
    callbacksForPlayer: callBackWithPlayers
  });

```

#### addRequestFilter

This property is a function that receives the request as parameter , where the following properties can be changed:

| Property | Type |
| --- | --- |
| headers | Object.<string, string> |
| body | String |

```js
var filter = function(request){
				request.headers['FieldName'] = 'FieldValue';
			};

nexplayer.Setup({
	key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
	div: document.getElementById('player'),
	src: 'VIDEO URL',
	callbacksForPlayer: 'YOUR CALLBACK VAR',
	drm:['YOUR DRM'],
	addRequestFilter: filter,
});

```

#### preferredAudioCodec

This property gives priority to a specific audio codec.

```js

nexplayer.Setup({
	key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
	div: document.getElementById('player'),
	src: 'VIDEO URL',
	callbacksForPlayer: 'YOUR CALLBACK VAR',
	drm:['YOUR DRM'],
	preferredAudioCodec: ['The priority codec as ac-3', 'mp4a.40.2'],
});

```
#### <a id="preferredvideocodec"></a>preferredVideoCodec

This property gives priority to a specific video codec.

```js

nexplayer.Setup({
	key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
	div: document.getElementById('player'),
	src: 'VIDEO URL',
	callbacksForPlayer: 'YOUR CALLBACK VAR',
	drm:['YOUR DRM'],
	preferredVideoCodec: ['The priority codec as H.265', 'avc1.4d481f'],
});

```

### Autoplay

This feature enables/disables autoplay. This can be configured in the player by adding the <b>autoplay</b> option:

```js
{
  div: document.getElementById('player'), // Mandatory
  src: 'URL video', // Mandatory
  autoplay: false
}
```

?> Please note that the default value of the <b>autoplay</b> parameter is true, so the player will start without any user action.


### Mute

This feature tells the player whether to start playback with the volume muted or not. This can be configured in the player by adding the <b>mutedAtStart</b> option:

```js
{
  div: document.getElementById('player'), // Mandatory
  src: 'URL video', // Mandatory
  mutedAtStart: true
}
```

?> Please note that the default value of the <b>mutedAtStart</b> parameter is false, so the player will start unmuted if <b>mutedAtStart</b> is not set to true.

### CDN seamless switch <a id="cdnseamless"></a>

?> Please note that this feature is currently **only available for live DASH** streams and the backup manifests MUST have the same properties as the original one (codecs, container format, timestamps, etc.).

It's possible to set one or multiple backup manifests so the player can switch to them in case the original fails. That way, if the original manifest throws a server error, the player will try to use the backup manifests and, if at least one of them is available, the player will keep playing using that manifest without any buffering or pause.

To use it, add the property *backupManifest* to the setup configuration object. This property is an array of strings, each string being an URL of a manifest.

```js
{
  ...
  backupManifest: [
    "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
    "https://this.is.an.example.com/manifest1/bbb_30fps.mpd",
    "https://this.is.an.example.com/manifest2/bbb_30fps.mpd",
    "https://this.is.an.example.com/manifest3/bbb_30fps.mpd"
  ],
  ...
}
```

It's also possible to set the number of retries before the player decides it's impossible to keep playing.

```js
{
  ...
  retryParameters: {
    streaming: {
      maxTries: 6
    },
    manifest: {
      maxTries: 6
    }
  }
  ...
}
```

*retryParameters.streaming.maxTries* is the number of tries the player will try to fetch a segment before the stream fails, while *retryParameters.manifest.maxTries* is the number of tries before a manifest fails and the player tries a different one. The default value of each one is *2*.

## Decreasing the Size of the Build

The nexplayer.js library is already minified, but to use even less space it's recommended to use gzip on the server where the library will be hosted. gzip is supported on the vast majority of servers.

The <a href="#/ps5/releases?">hosted versions</a> in our CDN use gzip.

## Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use.

This means that if a video is hosted in a different domain than the player, a header like <code>Access-Control-Allow-Origin: httрs://foo.mycompany.com </code> should be included in the response in order for it not to be blocked by the browser for security reasons. To allow all domains, set the header to <code>Access-Control-Allow-Origin: *</code>.

More information is available at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target = "_blank" >MDN Web Docs</a>.

## Upgrading to a New Version

When a specific version of the library is used, the URL of the hosted library should be upgraded. If the library is hosted on a custom server, replacing nexplayer.js is necessary. Here you can find the <a href="#/ps5/releases?" target = "_blank" >latest release</a>.

Every new release of NexPlayer is backwards compatible.
