<a id="api-top"> </a>

# NexPlayer API 

## Player


**Type**: global class
- setup:
 - [.enableABR()](#playerenableabr)
 - [.Init(key, div, videoElement, URL, nexDRMInformation, displayableinCanvas, protocolType, debugLog)](#init) ⇒ Promise
 - [.mutedAtStart()](#playermutedatstart)
 - [.newPlayer()](#playernewplayer)
 - [.useDefaultControls](#playerusedefaultcontrols)

- player.get[...] ⇒ return stream info:
 - [.getAudioStreams()](#getaudiostreams) ⇒ [Array.< AudioStream >](#audiostream-object)
 - [.getCurrentAudioStream()](#getcurrentaudiostream) ⇒ [AudioStream](#audiostream-object)
 - [.getCurrentTrack()](#getcurrenttrack) ⇒ [Track](#track-object)
 - [.getCurrentTime()](#getcurrenttime) ⇒ number
 - [.getDuration()](#getduration) ⇒ number
 - [.getProtocol()](#getprotocol) ⇒ number
 - [.getQualityLevels()](#getqualitylevels) ⇒ array
 - [.getTracks()](#gettracks) ⇒ [Array.< Track >](#track-object)

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
 - [.isUTC()](#isutc) ⇒ boolean

- player.toggle[...] ⇒ toggle on/off player features:
 - [.toogleControlBar()](#tooglecontrolbar)
 - [.toogleLanguageMenu()](#tooglelanguagemenu)
 - [.tooglePlayPause()](#toogleplaypause)

- Navigation ⇒ APIs for the navigation in the UI and video :
 - [.buttonClickFocus()](#buttonclickfocus)
 - [.buttonNextFocus()](#buttonnextfocus)
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
 - [.sendImpression()](#sendimpression)
 - [.setThumbnailResources(callback, vttURl, imageURL)](#setthumbnailresources)
 - [.addSrtSubtitles(subtitle)](#addsrtsubtitles)

- static:
 - [.NexProtocol](#nexprotocol): enum
 - [.NexEvent](#nexevent): enum
 - [.THUMB_TYPE](#thumbtype): enum

- Global TypeDef:
 - [.AudioStream](#audiostream) : object
 - [.NexDRMInformation](#nexdrminformation) : object
 - [.NexHeaders](#nexheaders) : object
 - [.Track](#track) : object



#### player.enableABR()

Enable the ABR to change automatically between tracks.

**Kind**: instance method of [<code>Player</code>](#Player)   

<a id="init"> </a> 
   #### player.Init(key, div, videoElement, URL, nexDRMInformation, displayableinCanvas, protocolType, debugLog) ⇒ Promise

**Kind**: instance method of [<code>Player</code>](#Player)

**Returns** <code>Promise</code> - that will be resolved when the player successfully initializes.

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | that validates the playback. |
| div | <code>HTMLDivElement</code> | the div container of the player. |
| videoElement | <code>HTMLVideoElement</code> | that will output the video. |
| URL | <code>string</code> | of the video to be played. |
| nexDRMInformation | <code>Array.<NexDRMInformation></code> | that contains an array of DRM information (by default it is null). |
| displayableinCanvas | <code>boolean</code> | inform if the videoElement will be used to generate external textures to be displayed in a canvas (by default it is false). |
| protocolType | <code>boolean</code> | define the protocol type (by default it is UNKNOWN and it will be obtained from the URL) |
| debug	 | <code>boolean</code> | set the output of extra logs (by default it is false). |

#### player.mutedAtStart()

Enable or disable the sound when the player loads.

**Kind**: instance method of [<code>Player</code>](#Player) .

#### player.newPlayer()

Constructs a NexPlayer.

#### player.useDefaultControls()

Assign basic actions to the remote controller keys.

**Kind** instance method of [<code>Player</code>](#Player) .

<a id="getaudiostreams"> </a>
   #### player.getAudioStreams() ⇒ Array.< AudioStream >

Get the available audio streams.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array< AudioStream > - the list of the available audio streams.

<a id="getcurrentaudiostream"> </a>
   #### player.getCurrentAudioStream() ⇒ AudioStream

Get the audio stream currently in use.

**Type**: instance method of [<code>Player</code>](#Player)   
**Returns**: Array< TrackInfo> - information about the current audio track.

<a id="getcurrenttrack"> </a>
   #### player.getCurrentTrack() ⇒ Track

Get the current track information.

**Returns** Array< TrackInfo> - information about the current video track.


<a id="getcurrenttime"> </a>
   #### player.getCurrentTime() ⇒ number

Returns the currentTime taking into account isUTC(). If isUTC() is **true**, getCurrentTime's returned value will be different from the time of the video element.

**Kind**: instance method of [<code>Player</code>](#Player) 

**Returns**: number - the current time of the video.

<a id="getduration"></a>
   #### player.getDuration() ⇒ number

Returns the duration taking into account isUTC(). If isUTC() is **true**, getDuration's returned value will be different from the duration of the video element.

**Kind** instance method of [<code>Player</code>](#Player)

**Returns** number - the duration of the video.

<a id="getprotocol"> </a>
   #### player.getProtocol() ⇒ number

Returns the stream's protocol ID.

**Kind**: instance method of [<code>Player</code>](#Player)


<a id="getqualitylevels"> </a>
   #### player.getQualityLevels() ⇒ array

Get the video quality levels array.


<a id="gettracks"> </a>
   #### player.getTracks() ⇒ Array.< Track >

Get all the video avaliable tracks (different qualities).

**Type**: instance method of [<code>Player</code>](#Player)     
**Returns**:: Array< Track > - all the tracks available.

<a id="setaudio"></a>
   #### player.setAudio(streamID)

Set the current audio stream.
**Kind**: instance method of [<code>Player</code>](#Player)

<a id="setaudiostream"></a>
#### player.setAudioStream(streamID)

Set the current audio stream.

**Kind**: instance method of [<code>Player</code>](#Player)   
**Export**:

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | ID of the audio stream to be used. |

<a id="setcurrenttrack"></a>
   #### player.setCurrentTrack(trackID)

Set the current track.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | ID of the track to be used. |

<a id="settrack"></a>
   #### player.setTrack(qualityLevel)

Set the video quality level.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| qualityLevel | <code>number</code> | index of the quality level. |

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
   #### player.addSrtSubtitle(subtitle)

Add a video subtitle int .srt format.

**Kind**: instance method of [<code>Player</code>](#Player)

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| subtitle | <code>array</code> | contains the subtitle source and its srclang. |


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

<a id="isutc"> </a>
  #### player.isUTC() ⇒ boolean

Indicates whether the video information (currentTime, duration, seekable range, etc.) of the video element is based on the present 
or on an absolute value that starts at midnight UTC, Jan 1, 1970. If this is true, you will need to take this into account when seeking 
through the currentTime of the video element. Some useful methods (like getCurrentTime, getDuration, and seek) are available to reduce 
the complexity in these cases. Note that this property only applies to live streams.

**Kind**: instance method of [<code>Player</code>](#Player)

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

<a id="buttonclickfocus"> </a>
  #### player.buttonClickFocus()

Execute a click action on the **focused** element of the UI.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="buttonnextfocus"> </a>
  #### player.buttonNextFocus()

Focus the next element of the UI.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="buttonpreviousfocus"> </a>
  #### player.buttonNextFocus()

Focus the previous element of the UI.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="downfocus"> </a>
  #### player.downFocus()

Focus the element of the UI situated directly below the element currently focused.

**Kind**: instance method of [<code>Player</code>](#Player)

<a id="downsubtitle"> </a>
  #### player.downsubtitle()

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
| subtilteRendererDiv | <code>SubtitleRendererDiv</code> | DIV to render some advanced subtitles |


<a id="on"> </a>
   #### player.on(callbackType, functionToBeCalled)

Adds a listener for Events.

**Kind**: instance method of [<code>Player</code>](#Player)      
**Export**:

| Param | Type | Description |
| --- | --- | --- |
| callbackType | <code>NexEvent</code> | Event to listen for |
| functionToBeCalled	 | <code>NexCallbackEvent</code> | 	Function called on each event |


<a id="sendimpression"> </a>
   #### player.sendImpression()

Send the impression details to the server (only for internal management).

**Kind**: instance method of [<code>Player</code>](#Player) 

<a id="setthumbnailresources"> </a>
   #### player.setThumbnailResources(callback, vttURI, imageURL)
  
   Set thumbnail resources. This method should be called before Init().

**Kind**: instance method of [<code>Player</code>](#Player) 

**Export**:

| Param | Type | Description |
| --- | --- | --- |
| callbackType | <code>NexEvent</code> | functionToBeCalled function called when the thumbnails are loaded. |
| functionToBeCalled	 | <code>NexCallbackEvent</code> | 	path to vtt thumbnails file. |
|imageURL| <code>string</code> | path to the image thumbnails file.


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
| OTHER | <code>number</code> | <code>4</code> | 

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

<a id="nexcallbackevent"></a>

#### NexCallbackEvent : <code>function</code>
Called when a NexEvent happens.

**Type**: global typedef  

<a id="nexcallback"></a>

#### NexCallback : <code>function</code>
Called when a FairPlay content needs to request the license.

**Type**: global typedef  

| Param | Description |
| --- | --- |
| event | when the webkitkeymessage event from FairPlay is called. |

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
| NexCallback | [<code>NexCallback</code>](#NexCallback) | NexCallback for FairPlay content. |

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
| language | <code>number</code> | language of the stream. |
| name | <code>number</code> | name of the stream. |
