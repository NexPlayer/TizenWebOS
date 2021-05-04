<a id="api-top"> </a>

# NexPlayer API 

***

## Nexplayer

***

#### Methods

 - [Setup(configObj)](#setup)
 - [ChangeSource({src: newSrc, drm: newDrm})](#changesource)

***

## Player

**Type**: global class

#### Methods

##### Miscellaneous


 - [play()](#play)
 - [pause()](#pause)
 - [on(callbackType, functionToBeCalled)](#on)
 - [enableABR()](#playerenableabr)
 - [addTrackerData()](#addtrackerdata)
 - [removeTrackerData()](#removetrackerdata)

##### Navigation


 - [downFocus()](#downfocus)
 - [downSubtitle()](#downsubtitle)
 - [focusOnButtonBar()](#focusonbuttonbar)
 - [focusOnPlaybackBar()](#focusonplaybackbar)
 - [upFocus()](#upfocus)
 - [upSubtitle()](#upsubtitle)
 - [seek(value)](#seek)
 - [seekLive()](#playerseekLive)

##### Player state


 - [isControlBarOpen()](#iscontrolbaropen) ⇒ boolean
 - [isLanguageMenuOpen()](#islanguagemenuopen) ⇒ boolean
 - [isLive()](#islive) ⇒ boolean
 - [isPlaybackBarFocused()](#isplaybackbarfocused) ⇒ boolean

##### Toggle


 - [toggleControlBar()](#togglecontrolbar)
 - [toggleLanguageMenu()](#togglelanguagemenu)
 - [togglePlayPause()](#toggleplaypause)

#### Getters


 - [getAudioStreams()](#getaudiostreams) ⇒ [Array\<AudioStream\>](#audiostream)
 - [getCurrentAudioStream()](#getcurrentaudiostream) ⇒ [AudioStream](#audiostream)
 - [getCurrentSubtitle()](#getcurrentsubtitle) ⇒ number
 - [getCurrentTime()](#getcurrenttime) ⇒ number
 - [getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
 - [getDuration()](#getduration) ⇒ number
 - [getMediaElement()](#getmediaelement) ⇒ HTMLVideoElement
 - [getPlayBackRate()](#getplaybackrate) ⇒ number
 - [getProtocol()](#getprotocol) ⇒ number
 - [getQualityLevels()](#getqualitylevels) ⇒ array
 - [getSubtitles()](#getsubtitles) ⇒ array
 - [getTracks()](#gettracks) ⇒ [Array\<Track\>](#track)
 - [getURL()](#geturl) ⇒ string
 - [getVersion()](#getversion) ⇒ string

#### Setters


 - [setAudio(streamID)](#setaudio)
 - [setAudioStream(streamID)](#setaudiostream) ⇒ deprecated
 - [setCurrentTrack(trackID)](#setcurrenttrack)
 - [setSpeed(speed)](#setspeed)
 - [setSubtitle(subID)](#setsubtitle)
 - [setTrack(qualityLevel)](#settrack)

#### Static enums


 - [NexProtocol](#nexprotocol): enum
 - [NexEvent](#nexevent): enum
 - [THUMB_TYPE](#thumbtype): enum

#### Global Typedefs


 - [AudioStream](#audiostream) : object
 - [NexDRMInformation](#nexdrminformation) : object
 - [NexHeaders](#nexheaders) : object
 - [Track](#track) : object

***


## Ads

Please, consult this <a href ="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=ads-events" target="_blank"> link </a> for information on how to use ad events.

#### Methods

 - [play()](#adplay)
 - [pause()](#adpause)

#### Getters


 - [getAdCurrentTime()](#getadcurrenttime) ⇒ number
 - [getAdDescription()](#getaddescription) ⇒ string
 - [getAdDuration()](#getadduration) ⇒ number
 - [getAdPause()](#getadpause) ⇒ boolean
 - [getAdRemainingTime()](#getadremainingtime) ⇒ number
 - [getAdTitle()](#getadtitle) ⇒ string
 - [getIsSkippableAd()](#getisskippablead) ⇒ boolean
 - [getMute()](#getmute) ⇒ boolean
 - [getVolume()](#getvolume) ⇒ number

#### Setters


  - [setMute(state)](#setmute)
  - [setVolume(value)](#setvolume)

***



## Nexplayer



### Methods

***

#### <a id="setup"></a> nexplayer.Setup(configObj)

Set NexPlayer settings using the configuration object as is indicated in this <a href ="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration" target="_blank">link</a>.

#### <a id="changesource"></a> nexplayer.ChangeSource({src: newSrc, drm: newDrm}))

Change the url stream of the video. It is possible to set a new url with new drm config if necessary.

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | of the video to be played. |
| drm | <code>Array.<NexDRMInformation></code> | that contains an array of DRM information (by default it is null). |



## Player

***



### Methods

***

#### Miscellaneous

***

   #### <a id="play"></a> player.play()

Play the video.

**Type**: instance method of [<code>Player</code>](#Player)

   #### <a id="pause"></a> player.pause()

Pause the video.

**Type**: instance method of [<code>Player</code>](#Player)

   #### <a id="on"></a> player.on(callbackType, functionToBeCalled)

Adds a listener for Events.

**Type**: instance method of [<code>Player</code>](#Player)      
**Export**:

| Param              | Type                  | Description                   |
| ------------------ | --------------------- | ----------------------------- |
| callbackType       | <code>NexEvent</code> | Event to listen for           |
| functionToBeCalled | <code>Function</code> | Function called on each event |

#### <a id="enableabr"></a> player.enableABR()

Enable the ABR to change automatically between tracks.

**Type**: instance method of [<code>Player</code>](#Player)   

   #### <a id="addtrackerdata"></a> player.addTrackerData(key, value)

Adds custom data into New Relic's tracker if initialized.

**Type**: instance method of [<code>Player</code>](#Player)  
**Export**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | Data variable name |
| value | <code>any</code>    | Data value         |

   #### <a id="removetrackerdata"></a> player.removeTrackerData(key)

Removes custom data from New Rellic's tracker if initialized.

**Type**: instance method of [<code>Player</code>](#Player)  
**Export**:

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | Data variable name |





#### Navigation

***

  #### <a id="downfocus"></a> player.downFocus()

Focus the element of the UI situated directly below the element currently focused.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="downsubtitle"></a> player.downSubtitle()

Changes the current subtitles to the previous one in the subtiltle track playlist.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="focusonbuttonbar"></a> player.focusOnButtonBar()

Changes the focus to the play/pause button.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="focusonplaybackbar"></a> player.focusOnPlaybackBar()

Changes the focus to the video's seekbar.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="upfocus"></a> player.upFocus()

Focus the element of the UI situated directly above the element currently focused.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="upsubtitle"></a> player.upSubtitle()

Changes the current subtitles to the following one in the subtiltle track playlist.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="seek"></a> player.seek(value)


Set the currentTime property of the attached video element. (if isUTC is true, the seek value will be in a different format than the currentTime of the video element).

**Type**: instance method of [<code>Player</code>](#Player) 

| Param | Type  | Description                                    |
| ----- | ----- | ---------------------------------------------- |
| event | Event | value in seconds that the player will seek to. |

```js
//Non-live video 
player.seek(120) // It seeks into minute 2:00 in the video (120 secs), must be a positive number ranging from 0 to the full duration of the video in seconds
//Live video
player.seek(-120) // It jumps back 2 minutes (120 secs) from the current live time, must be a negative number ranging from minus {the DVR window size} to 0
```

#### <a id="seeklive"></a> player.seekLive()

Jump to the livestream current time from the current position (if isUTC is true, the seek value will be in a different format than the currentTime of the video element). only works in livestream.

**Type**: instance method of [<code>Player</code>](#Player) 





#### Player states

***

   #### <a id="iscontrolbaropen"></a> player.isControlBarOpen() ⇒ boolean

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the bar is showing. *false* otherwise.

  #### <a id="islanguagemenuopen"></a> player.isLanguageMenuOpen() ⇒ boolean

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the Language/Subtitle menu is showing. *false* otherwise.

  #### <a id="islive"></a> player.isLive() ⇒ boolean

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the video is live, *false* otherwise.

  #### <a id="isplaybackbarfocused"></a> player.isPlaybackBarFocus() ⇒ boolean

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the seek bar of the video is currently focused, *false* otherwise.





#### Toggle

***

  #### <a id="togglecontrolbar"></a> player.toggleControlBar()

Shows or hides the bottom bar.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="togglelanguagemenu"></a> player.toggleLanguageMenu()

Opens or closes the language menu.

**Type**: instance method of [<code>Player</code>](#Player)

  #### <a id="toggleplaypause"></a> player.togglePlayPause()

Toggle the video playback between the play and pause states.

**Type**: instance method of [<code>Player</code>](#Player)



### Getters

***

   #### <a id="getaudiostreams"></a> player.getAudioStreams() ⇒ Array.< AudioStream >

Get the available audio streams.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string<NexDRMInformation></code> | that contains an string with languages audio available (by default it is empty). |
| name | <code>string<NexDRMInformation></code> | that contains an string with name of audio files available (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array\<AudioStream\> - the list of the available audio streams.

   #### <a id="getcurrentaudiostream"></a> player.getCurrentAudioStream() ⇒ AudioStream

Get the audio stream currently in use.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string<NexDRMInformation></code> | that contains an string with languages audio stream currently in use (by default it is empty). |
| name | <code>string<NexDRMInformation></code> | that contains an string with name of audio stream currently in use (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array\<TrackInfo\> - information about the current audio track.

   #### <a id="getcurrentsubtitle"></a> player.getCurrentSubtitle() ⇒ number

Retrieve the number id of the current subtitle. If the returned value is -1 no subtitle is selected.

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: number - id of the current subtitle.

   #### <a id="getcurrenttime"></a> player.getCurrentTime() ⇒ number

Returns the current time of the video element.

**Type**: instance method of [<code>Player</code>](#Player) 

**Returns**: number - the current time of the video.

   #### <a id="getcurrenttrack"></a> player.getCurrentTrack() ⇒ Track

Get the current track information.

Track:

| Property | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | that contains an number with width of current track |
| height | <code>number<NexDRMInformation></code> | that contains an number with height of current track |
| bitrate | <code>number<NexDRMInformation></code> | that contains an number with bitrate of current track |
| id | <code>number<NexDRMInformation></code> | of current track |

**Returns** Array\<TrackInfo\> - information about the current video track.

   #### <a id="getduration"></a> player.getDuration() ⇒ number

Returns the duration taking of the video element.

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: number - the duration of the video.

   #### <a id="getmediaelement"></a> player.getMediaElement() ⇒ HTMLVideoElement

Returns the player's video element.

**Type**: instance method of [<code>Player</code>](#Player)

**Returns**: HTMLVideoElement- video element playing the stream.

   #### <a id="getprotocol"></a> player.getPlaybackRate() ⇒ number

Returns the video's playback rate.

**Type**: instance method of [<code>Player</code>](#Player)

**Returns** number - video's playback rate.

   #### <a id="getprotocol"></a> player.getProtocol() ⇒ number

Returns the stream's protocol ID, the number correspond to the [NexProtocol](#nexprotocol) enum values.

**Type**: instance method of [<code>Player</code>](#Player)

**Returns** number - the protocol of video to be played.


   #### <a id="getqualitylevels"></a> player.getQualityLevels() ⇒ array

Get the video quality levels array.

This array contain the following information:

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of this track |
| width | <code>number</code> | that contains an number with width of this track |
| height | <code>number</code> | that contains an number with height of this track |
| bitrate | <code>number</code> | that contains an number with bitrate of this track |

**Type**: instance method of [<code>Player</code>](#Player)

**Returns** array - contains all video quality levels.

   #### <a id="getsubtitles"></a> player.getSubtitles() ⇒ array

Get the video subtitles info.

The returned array contains objects with the following properties:

| Property | Type                                   | Description                                                  |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| id       | <code>number</code>                    | is the identifier of each subtitle. It can be used to select the subtitle. |
| language | <code>string<NexDRMInformation></code> | that contains an string with subtitle stream (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: Array - all the subtitles availables in the stream.

   #### <a id="gettracks"></a> player.getTracks() ⇒ Array.< Track >

Get all the video avaliable tracks (different qualities).

This array contain the next information:

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of all tracks |
| width | <code>number</code> | that contains an number with width of all tracks |
| height | <code>number</code> | that contains an number with height of all tracks |
| bitrate | <code>number</code> | that contains an number with bitrate of all tracks |

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: Array< Track > - all the video avaliable tracks and its different levels of quality.

   #### <a id="geturl"></a> player.getURL() ⇒ string

Returns the current stream's URL.

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: string - stream URL.

   #### <a id="getversion"></a> player.getVersion() ⇒ string

Retrieve the current version of the player.

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: string - identify the version of the player.



### Setters

***

   #### <a id="setaudio"></a> player.setAudio(streamID)

Set the current audio stream by using the UI.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | is the identifier of the audio stream to be selected. |

**Type**: instance method of [<code>Player</code>](#Player)

#### <a id="setaudiostream"></a> player.setAudioStream(streamID)

Set the current audio stream.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | is the identifier of the audio stream to be selected. |

**Type**: instance method of [<code>Player</code>](#Player)


   #### <a id="setcurrenttrack"></a> player.setCurrentTrack(trackID)

Set the current track.

**Type**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | is the identifier of the audio stream to be selected. |

   #### <a id="setspeed"></a> player.setSpeed(speed)

Set the video playback speed.

**Type**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| speed | <code>number</code> | speed value. |

   #### <a id="setsubtitle"></a> player.setSubtitle(index)

Set the video subtitles. Use -1 for deactivating the subtitles.

**Type**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| index | <code>number</code> | index of the subtitles list. |

   #### <a id="settrack"></a> player.setTrack(qualityLevel)

Set the video quality level.

**Type**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| qualityLevel | <code>number</code> | index of the track to be selected. |



### Static enums

***

#### <a id="nexprotocol"></a> Player.NexProtocol : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| HLS | <code>number</code> | <code>0</code> |
| DASH | <code>number</code> | <code>1</code> |
| PROGRESSIVE_DOWNLOAD | <code>number</code> | <code>2</code> |
| UNKNOWN | <code>number</code> | <code>3</code> |

#### <a id="nexevent"></a> Player.NexEvent : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default | Explanation |
| --- | --- | --- | --- |
| Track_Change | <code>number</code> | <code>0</code> | Fired when the player changes the current track.|
| Fragment_Loading_Completed | <code>number</code> | <code>1</code> | Fired when a new fragment has been loaded.|
| Buffering | <code>number</code> | <code>2</code> | Fired when the buffer state changes. Check payload for state. |

#### <a id="thumbtype"></a> Player.THUMB_TYPE : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| STATIC_THUMBNAILS | <code>number</code> | <code>0</code> |
| DYNAMIC_THUMBNAILS | <code>number</code> | <code>1</code> |

### Global typedefs

***

#### <a id="audiostream"></a> AudioStream : <code>Object</code>
**Type**: global typedef  
**Properties**:  

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id of the stream. |
| language | <code>string</code> | language of the stream. |
| name | <code>string</code> | name of the stream. |

#### <a id="nexdrminformation"></a> NexDRMInformation : <code>Object</code>

**Type**: global typedef  
**Properties**:

| Name       | Type                                                 | Description              |
| ---------- | ---------------------------------------------------- | ------------------------ |
| NexDRMType | <code>string</code>                                  | NexDRMType of the video. |
| NexDRMKey  | <code>string</code>                                  | NexDRMKey of the video.  |
| NexHeaders | [<code>Array.&lt;NexHeaders&gt;</code>](#NexHeaders) | NexHeaders of the video. |

#### <a id="nexheaders"></a> NexHeaders : <code>Object</code>

**Type**: global typedef  
**Properties**:

| Name       | Type                | Description         |
| ---------- | ------------------- | ------------------- |
| FieldName  | <code>string</code> | of the HTTPHeaders. |
| FiledValue | <code>string</code> | of the HTTPHeaders. |

#### <a id="track"></a> Track : <code>Object</code>

**Type**: global typedef     
**Properties**:  

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| width   | <code>number</code> | width of the video.   |
| height  | <code>number</code> | height of the video.  |
| bitrate | <code>number</code> | bitrate of the video. |
| id      | <code>number</code> | id of the video.      |



## Ads

***


### Methods

***

   #### <a id="adplay"></a> nexplayer.AdInstance().play() 

Play the ad

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)     

   #### <a id="adpause"></a> nexplayer.AdInstance().pause() 

Pause the current ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  



### Getters

***

   ####  <a id="getadcurrenttime"></a> nexplayer.AdInstance().getAdCurrentTime() ⇒ number

Get the current time ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the current time ad to be played.

   ####  <a id="getaddescription"></a> nexplayer.AdInstance().getAdDescription() ⇒ string

Get the available description ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: String - the description ad to be played.

   ####  <a id="getadduration"></a> nexplayer.AdInstance().getAdDuration() ⇒ number

Get the available duration ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the duration ad to be played.

   ####  <a id="getadpause"></a> nexplayer.AdInstance().getAdPause() ⇒ boolean

Get stating if the ad on stage is paused or not

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the ad on stage is paused *false* if it is not.

   ####  <a id="getadremainingtime"></a> nexplayer.AdInstance().getAdRemainingTime() ⇒ number

Get the remaining time ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the remaining time ad to be played.

   #### <a id="getadtitle"></a> nexplayer.AdInstance().getAdTitle() ⇒ string

Get the available title ad.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)     
**Returns**: String - the title ad to be played.

   ####  <a id="getisskippablead"></a> nexplayer.AdInstance().getIsSkippablead() ⇒ boolean

Returns whether the ad can be skipped or not.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the video can be skip. *false* if it is not.

   ####  <a id="getmute"></a> nexplayer.AdInstance().getMute() ⇒ boolean

Get the mute state of an ad depending on what is on stage.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the ad can is mute. *false* if it is not.

   ####  <a id="getvolume"></a> nexplayer.AdInstance().getVolume() ⇒ number

Get the volume of ad depending on what is on stage.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: number - is a number between 0 and 1. -1 is returned if this value is not available.



### Setters

***

   ####  <a id="setmute"></a> nexplayer.AdInstance().setMute(state) 

Set value should be a Boolean. True for muting and false for unmuting.

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  

   ####  <a id="setvolume"></a> nexplayer.AdInstance().setVolume(value)

Set value should be a Number between 0 (minimum volume) and 1 (maximum volume).

**Type**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  