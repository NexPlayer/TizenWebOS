<a id="api-top"> </a>

# NexPlayer API 

## nexplayer
 - [.Setup(configObj)](#setup)
 - [.ChangeSource({src: newSrc, drm: newDrm})](#changesource)

## Player


**Type**: global class
- setup:
 - [.enableABR()](#playerenableabr)


- player.get[...] ⇒ return stream info:
 - [.getAudioStreams()](#getaudiostreams) ⇒ [Array.< AudioStream >](#audiostream-object)
 - [.getCurrentAudioStream()](#getcurrentaudiostream) ⇒ [AudioStream](#audiostream-object)
 - [.getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
 - [.getCurrentTime()](#getcurrenttime) ⇒ number
 - [.getDuration()](#getduration) ⇒ number
 - [.getProtocol()](#getprotocol) ⇒ number
 - [.getQualityLevels()](#getqualitylevels) ⇒ array
 - [.getTracks()](#gettracks) ⇒ [Array.< Track >](#track-object)
 - [.getSubtitles()](#getsubtitles) ⇒ array
 - [.getCurrentSubtitle()](#getcurrentsubtitle) ⇒ number
 - [.getVersion()](#getversion) ⇒ string

- player.set[...] ⇒ change the player parameters:
 - [.setAudio(streamID)](#setaudio)
 - [.setAudioStream(streamID)](#setaudiostream) ⇒ deprecated
 - [.setCurrentTrack(trackID)](#setcurrenttrack)
 - [.setTrack(qualityLevel)](#settrack)
 - [.setSpeed(speed)](#setspeed)
 - [.setSubtitle(subID)](#setsubtitle)

- player.is[...] ⇒ boolean checks on the player state:
 - [.isControlBarOpen()](#iscontrolbaropen) ⇒ boolean
 - [.isLanguageMenuOpen()](#islanguagemenuopen) ⇒ boolean
 - [.isLive()](#islive) ⇒ boolean
 - [.isPlaybackBarFocused()](#isplaybackbarfocused) ⇒ boolean

- player.toggle[...] ⇒ toggle on/off player features:
 - [.toogleControlBar()](#tooglecontrolbar)
 - [.toogleLanguageMenu()](#tooglelanguagemenu)
 - [.tooglePlayPause()](#toogleplaypause)

- Navigation ⇒ APIs for the navigation in the UI and video :
 - [.downFocus()](#downfocus)
 - [.downSubtitle()](#downsubtitle)
 - [.focusOnButtonBar()](#focusonbuttonbar)
 - [.focusOnPlaybackBar()](#focusonplaybackbar)
 - [.upFocus()](#upfocus)
 - [.upSubtitle()](#upsubtitle)
 - [.seek(value)](#seek)

- Miscellaneous:
 - [.attachSubtitleRendererDiv(subtitleRendererDiv)](#attachsubtitlerendererdiv)
 - [.on(callbackType, functionToBeCalled)](#on)
 - [.addSrtSubtitles(subtitle)](#addsrtsubtitles)
 - [.play()](#play)
 - [.pause()](#pause)

- static:
 - [.NexProtocol](#nexprotocol): enum
 - [.NexEvent](#nexevent): enum
 - [.THUMB_TYPE](#thumbtype): enum

- Global TypeDef:
 - [.AudioStream](#audiostream) : object
 - [.NexDRMInformation](#nexdrminformation) : object
 - [.NexHeaders](#nexheaders) : object
 - [.Track](#track) : object


## Ads

Please, consult this 
<a href ="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=ads-events" target="_blank"> link </a> for information about using ad events.

- nexplayer.AdInstance().[...] :
 - [.play()](#play)
 - [.pause()](#pause)


- nexplayer.AdInstance().get[...] ⇒ return ads info :

 - [.getAdTitle()](#getadtitle) ⇒ string
 - [.getAdDescription()](#getaddescription) ⇒ string
 - [.getAdDuration()](#getadduration) ⇒ number
 - [.getAdCurrentTime()](#getadcurrenttime) ⇒ number
 - [.getAdRemainingTime()](#getadremainingtime) ⇒ number
 - [.getIsSkippableAd()](#getisskippablead) ⇒ boolean
 - [.getAdPause()](#getadpause) ⇒ boolean
 - [.getVolume()](#getvolume) ⇒ number
 - [.getMute()](#getmute) ⇒ boolean


 - nexplayer.AdInstance().set[...] ⇒ return ads info:
 
  - [.setVolume()](#setvolume)
  - [.setMute()](#setmute)


<a id="setup"> </a>
#### nexplayer.Setup(configObj)

Set NexPlayer settings using the configuration object as is indicated in this 
<a href ="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration" target="_blank"> link </a>

<a id="changesource"> </a>
#### nexplayer.ChangeSource({src: newSrc, drm: newDrm}))

Change the url stream of the video. It is possible to set a new url with new drm config if necessary.

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | of the video to be played. |
| drm | <code>Array.<NexDRMInformation></code> | that contains an array of DRM information (by default it is null). |

#### player.enableABR()

Enable the ABR to change automatically between tracks.

**Kind**: instance method of [<code>Player</code>](#Player)   


<a id="getaudiostreams"> </a>
   #### player.getAudioStreams() ⇒ Array.< AudioStream >

Get the available audio streams.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string<NexDRMInformation></code> | that contains an string with languages audio available (by default it is empty). |
| name | <code>string<NexDRMInformation></code> | that contains an string with name of audio files available (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array< AudioStream > - the list of the available audio streams.

<a id="getcurrentaudiostream"> </a>
   #### player.getCurrentAudioStream() ⇒ AudioStream

Get the audio stream currently in use.

AudioStream:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of the audio to be played. |
| language | <code>string<NexDRMInformation></code> | that contains an string with languages audio stream currently in use (by default it is empty). |
| name | <code>string<NexDRMInformation></code> | that contains an string with name of audio stream currently in use (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array< TrackInfo> - information about the current audio track.

<a id="getcurrenttrack"> </a>
   #### player.getCurrentTrack() ⇒ Track

Get the current track information.

Track:

| Property | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | that contains an number with width of current track |
| height | <code>number<NexDRMInformation></code> | that contains an number with height of current track |
| bitrate | <code>number<NexDRMInformation></code> | that contains an number with bitrate of current track |
| id | <code>number<NexDRMInformation></code> | of current track |

**Returns** Array< TrackInfo> - information about the current video track.


<a id="getcurrenttime"> </a>
   #### player.getCurrentTime() ⇒ number

Returns the current time of the video element.

**Kind**: instance method of [<code>Player</code>](#Player) 

**Returns**: number - the current time of the video.

<a id="getduration"></a>
   #### player.getDuration() ⇒ number

Returns the duration taking of the video element.

**Kind** instance method of [<code>Player</code>](#Player)

**Returns** number - the duration of the video.

<a id="getprotocol"> </a>
   #### player.getProtocol() ⇒ number

Returns the stream's protocol ID, the number correspond to the [NexProtocol](#nexprotocol) enum values.

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns** number - the protocol of video to be played.

<a id="getqualitylevels"> </a>
   #### player.getQualityLevels() ⇒ array

Get the video quality levels array.

This array contain the following information:

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | of this track |
| width | <code>number</code> | that contains an number with width of this track |
| height | <code>number</code> | that contains an number with height of this track |
| bitrate | <code>number</code> | that contains an number with bitrate of this track |

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns** array - contains all video quality levels.


<a id="gettracks"> </a>
   #### player.getTracks() ⇒ Array.< Track >

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

<a id="getsubtitles"> </a>
   #### player.getSubtitles() ⇒ array

Get the video subtitles info.

The returned array contains objects with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | is the identifier of each subtitle. It can be used to select the subtitle. |
| language | <code>string<NexDRMInformation></code> | that contains an string with subtitle stream (by default it is empty). |

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: Array - all the subtitles availables in the stream.

<a id="getcurrentsubtitle"> </a>
   #### player.getCurrentSubtitle() ⇒ number

Retrieve the number id of the current subtitle. If the returned value is -1 no subtitle is selected.

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: number - id of the current subtitle.

<a id="getversion"> </a>
   #### player.getVersion() ⇒ string

Retrieve the current version of the player.

**Type**: instance method of [<code>Player</code>](#Player)     

**Returns**:: string - identify the version of the player.

<a id="setaudio"></a>
   #### player.setAudio(streamID)

Set the current audio stream by using the UI.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | is the identifier of the audio stream to be selected. |

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="setaudiostream"></a>
#### player.setAudioStream(streamID)

Set the current audio stream.

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | is the identifier of the audio stream to be selected. |

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="setcurrenttrack"></a>
   #### player.setCurrentTrack(trackID)

Set the current track.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | is the identifier of the audio stream to be selected. |

<a id="settrack"></a>
   #### player.setTrack(qualityLevel)

Set the video quality level.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| qualityLevel | <code>number</code> | index of the track to be selected. |

<a id="setspeed"></a>
   #### player.setSpeed(speed)

Set the video playback speed.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | speed value. |

<a id="setsubtitle"></a>
   #### player.setSubtitle(index)

Set the video subtitles.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | index of the subtitles list. |


<a id="addsrtsubtitles"></a>
   #### player.addSrtSubtitle(src, language)

Add a video subtitle in .srt format.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | link or path to the subtitle file |
| language | <code>string</code> | name used to identify the subtitle |


<a id="play"></a>
   #### player.play()

Play the video.

**Kind**: instance method of [<code>Player</code>](#Player)
<a id="pause"></a>
   #### player.pause()

Pause the video.

**Kind**: instance method of [<code>Player</code>](#Player)


<a id="iscontrolbaropen"> </a>
   #### player.isControlBarOpen() ⇒ boolean

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the bar is showing. *false* otherwise.

<a id="islanguagemenuopen"> </a>
  #### player.isLanguageMenuOpen() ⇒ boolean

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the Language/Subtitle menu is showing. *false* otherwise.

<a id="islive"> </a>
  #### player.isLive() ⇒ boolean

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the video is live, *false* otherwise.

<a id="isplaybackbarfocused"> </a>
  #### player.isPlaybackBarFocus() ⇒ boolean

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns**: boolean - *true* if the seek bar of the video is currently focused, *false* otherwise.

<a id="tooglecontrolbar"> </a>
  #### player.toogleControlBar()

Shows or hides the bottom bar.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="tooglelanguagemenu"> </a>
  #### player.toogleLanguageMenu()

Opens or closes the language menu.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="toogleplaypause"> </a>
  #### player.tooglePlayPause()

Toggle the video playback between the play and pause states.

**Kind**: instance method of [<code>Player</code>](#Player)


<a id="downfocus"> </a>
  #### player.downFocus()

Focus the element of the UI situated directly below the element currently focused.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="downsubtitle"> </a>
  #### player.downSubtitle()

Changes the current subtitles to the previous one in the subtiltle track playlist.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="focusonbuttonbar"> </a>
  #### player.focusOnButtonBar()

Changes the focus to the play/pause button.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="focusonplaybackbar"> </a>
  #### player.focusOnPlaybackBar()

Changes the focus to the video's seekbar.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="upfocus"> </a>
  #### player.upFocus()

Focus the element of the UI situated directly above the element currently focused.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="upsubtitle"> </a>
  #### player.upSubtitle()

Changes the current subtitles to the following one in the subtiltle track playlist.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="seek"> </a>
  #### player.seek(value)

Sets the position of the playback taking into account isUTC(). If isUTC() is true, the seek value will be in a different format than the currentTime of the video element.

**Kind**: instance method of [<code>Player</code>](#Player)

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | value that the player will seek to. |


<a id="attachsubtitlerendererdiv"> </a>
   #### player.attachSubtitleRendererDiv(subtitleRendererDiv)

Adds a DIV to render certain subtitles in a more precise way. This is optional and the native subtitles of the video element will be used if this is not set.

**Kind**: instance method of [<code>Player</code>](#Player)      
**Export**:

| Param | Type | Description |
| --- | --- | --- |
| subtilteRendererDiv | <code>HTML5 div</code> | DIV to render some advanced subtitles |


<a id="on"> </a>
   #### player.on(callbackType, functionToBeCalled)

Adds a listener for Events.

**Kind**: instance method of [<code>Player</code>](#Player)      
**Export**:

| Param | Type | Description |
| --- | --- | --- |
| callbackType | <code>NexEvent</code> | Event to listen for |
| functionToBeCalled	 | <code>Function</code> | 	Function called on each event |


<a id="nexprotocol"></a>

#### Player.NexProtocol : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| HLS | <code>number</code> | <code>0</code> | 
| DASH | <code>number</code> | <code>1</code> | 
| PROGRESSIVE_DOWNLOAD | <code>number</code> | <code>2</code> | 
| UNKNOWN | <code>number</code> | <code>3</code> | 

<a id="nexevent"></a>

#### Player.NexEvent : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| Track_Change | <code>number</code> | <code>0</code> | 
| Fragment_Loading_Completed | <code>number</code> | <code>1</code> | 

<a id="thumbtype"></a>

#### Player.THUMB_TYPE : <code>enum</code>
**Type**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**:

| Name | Type | Default |
| --- | --- | --- |
| STATIC_THUMBNAILS | <code>number</code> | <code>0</code> | 
| DYNAMIC_THUMBNAILS | <code>number</code> | <code>1</code> |


<a id="nexheaders"></a>

#### NexHeaders : <code>Object</code>
**Type**: global typedef  
**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| FieldName | <code>string</code> | of the HTTPHeaders. |
| FiledValue | <code>string</code> | of the HTTPHeaders. |

<a id="nexdrminformation"></a>

#### NexDRMInformation : <code>Object</code>
**Type**: global typedef  
**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| NexDRMType | <code>string</code> | NexDRMType of the video. |
| NexDRMKey | <code>string</code> | NexDRMKey of the video. |
| NexHeaders | [<code>Array.&lt;NexHeaders&gt;</code>](#NexHeaders) | NexHeaders of the video. |

<a id="track"></a>

#### Track : <code>Object</code>
**Type**: global typedef     
**Properties**:  

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | width of the video. |
| height | <code>number</code> | height of the video. |
| bitrate | <code>number</code> | bitrate of the video. |
| id | <code>number</code> | id of the video. |

<a id="audiostream"></a>

#### AudioStream : <code>Object</code>
**Type**: global typedef  
**Properties**:  

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id of the stream. |
| language | <code>string</code> | language of the stream. |
| name | <code>string</code> | name of the stream. |

  
<a id="play"> </a>
   #### nexplayer.AdInstance().play() 

Play the ad

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)     

<a id="pause"> </a>
   #### nexplayer.AdInstance().pause() 

Pause the current ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  


<a id="getadtitle"> </a>
   #### nexplayer.AdInstance().getAdTitle() ⇒ string

Get the available title ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)     
**Returns**: String - the title ad to be played.

<a id="getaddescription"> </a>
   ####  nexplayer.AdInstance().getAdDescription() ⇒ string

Get the available description ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: String - the description ad to be played.

<a id="getadduration"> </a>
   ####  nexplayer.AdInstance().getAdDuration() ⇒ number

Get the available duration ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the duration ad to be played.

<a id="getadcurrenttime"> </a>
   ####  nexplayer.AdInstance().getAdCurrentTime() ⇒ number

Get the current time ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the current time ad to be played.

<a id="getadremainingtime"> </a>
   ####  nexplayer.AdInstance().getAdRemainingTime() ⇒ number

Get the remaining time ad.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: Number - the remaining time ad to be played.

<a id="getisskippablead"> </a>
   ####  nexplayer.AdInstance().getIsSkippablead() ⇒ boolean

Get

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the video can be skip. *false* if it is not.

<a id="getadpause"> </a>
   ####  nexplayer.AdInstance().getAdPause() ⇒ boolean

Get stating if the ad on stage is paused or not

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the ad on stage is paused *false* if it is not.

<a id="getvolume"> </a>
   ####  nexplayer.AdInstance().getVolume() ⇒ number

Get the volume of ad depending on what is on stage.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: number - is a number between 0 and 1. -1 is returned if this value is not available.

<a id="getmute"> </a>
   ####  nexplayer.AdInstance().getMute() ⇒ boolean

Get the mute state of ad depending on what is on stage.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
**Returns**: boolean - *true* if the ad can is mute. *false* if it is not.


<a id="setvolume"> </a>
   ####  nexplayer.AdInstance().setVolume() 

Set value should be a Number between 0 and 1.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  


<a id="setmute"> </a>
   ####  nexplayer.AdInstance().setMute() 

Set value should be a Boolean.

**Kind**: instance method of [<code>nexplayer.AdInstance()</code>](#Ads)  
