<a id="Player"></a>

## Player
**Kind**: global class  
**Struct**:   
**Export**:   

* [Player](#Player)
    * [new Player()](#new_Player_new)
    * _instance_
        * [.Init(key, div, videoElement, URL, nexDRMInformation, displayableinCanvas, protocolType, debugLog)](#Player_Init) ⇒ <code>Promise</code>
        * [.getTracks()](#Player_getTracks) ⇒ [<code>Array.&lt;Track&gt;</code>](#Track)
        * [.getCurrentTrack()](#Player_getCurrentTrack) ⇒ [<code>Track</code>](#Track)
        * [.setCurrentTrack(trackID)](#Player_setCurrentTrack)
        * [.enableABR()](#Player_enableABR)
        * [.getAudioStreams()](#Player_getAudioStreams) ⇒ [<code>Array.&lt;AudioStream&gt;</code>](#AudioStream)
        * [.getCurrentAudioStream()](#Player_getCurrentAudioStream) ⇒ [<code>AudioStream</code>](#AudioStream)
        * [.setAudioStream(streamID)](#Player_setAudioStream)
        * [.isLive()](#Player_isLive) ⇒ <code>boolean</code>
        * [.on(callbackType, functionToBeCalled)](#Player_on)
        * [.attachSubtitleRendererDiv(subtitleRendererDiv)](#Player_attachSubtitleRendererDiv)
        * [.create360View()](#Player_create360View)
        * [.FairPlayNexLicenseRequestLoaded(event)](#Player_FairPlayNexLicenseRequestLoaded)
        * [.FairPlayNexLicenseRequestFailed(event)](#Player_FairPlayNexLicenseRequestFailed)
        * [.setThumbnailResources(callback, vttURl, imageURL)](#Player_setThumbnailResources)
        * [.isUTC()](#Player_isUTC) ⇒ <code>boolean</code>
        * [.getCurrentTime()](#Player_getCurrentTime) ⇒ <code>number</code>
        * [.getDuration()](#Player_getDuration) ⇒ <code>number</code>
        * [.seek(value)](#Player_seek)
        * [.sendImpression()](#Player_sendImpression)
        * [.getProtocol()](#Player_getProtocol) ⇒ <code>number</code>
        * [.getThumbnailController()](#Player_getThumbnailController) ⇒ <code>ThumbController</code>
        * [.setThumbnailStep(step)](#Player_setThumbnailStep)
        * [.enablePreviewThumbnails(option)](#Player_enablePreviewThumbnails)
        * [.setSpeed(speed)](#Player_setSpeed)
        * [.getQualityLevels()](#Player_getQualityLevels) ⇒ <code>array</code>
        * [.setTrack(qualityLevel)](#Player_setTrack)
        * [.togglePlayPause()](#Player_togglePlayPause)
        * [.setSubtitle(index)](#Player_setSubtitle)
        * [.toggleFullScreen()](#Player_toggleFullScreen)
    * _static_
        * [.NexProtocol](#Player_NexProtocol) : <code>enum</code>
        * [.NexEvent](#Player_NexEvent) : <code>enum</code>
        * [.THUMB_TYPE](#Player_THUMB_TYPE) : <code>enum</code>

<a id="new_Player_new"></a>

### new Player()
Constructs a NexPlayer.

<a id="Player_Init"></a>

### player.Init(key, div, videoElement, URL, nexDRMInformation, displayableinCanvas, protocolType, debugLog) ⇒ <code>Promise</code>
Initializes the player.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>Promise</code> - that will be resolved when its successfully initializes.  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | that validets the playback. |
| div | <code>HTMLDivElement</code> |  |
| videoElement | <code>HTMLVideoElement</code> | that will output the video. |
| URL | <code>string</code> | of the video to be played. |
| nexDRMInformation | [<code>Array.&lt;NexDRMInformation&gt;</code>](#NexDRMInformation) | that contains an array of DRM information. By default it is null. |
| displayableinCanvas | <code>boolean</code> | that will inform if the videoElement will be used to generate external textures to be displayed in a canvas. By default it is false. |
| protocolType | <code>NexProtocol</code> | that will define the protocol type.  By default it is UNKNOWN and it will be obtained from the URL. |
| debugLog | <code>boolean</code> | that will set the output of extra logs. By default it is false. |

<a id="Player_getTracks"></a>

### player.getTracks() ⇒ [<code>Array.&lt;Track&gt;</code>](#Track)
Get all the video tracks.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: [<code>Array.&lt;Track&gt;</code>](#Track) - all the tracks available.  
**Export**:   
<a id="Player_getCurrentTrack"></a>

### player.getCurrentTrack() ⇒ [<code>Track</code>](#Track)
Get the current track information.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: [<code>Track</code>](#Track) - the current track.  
**Export**:   
<a id="Player_setCurrentTrack"></a>

### player.setCurrentTrack(trackID)
Set the current tack.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| trackID | <code>number</code> | ID of the track to be used. |

<a id="Player_enableABR"></a>

### player.enableABR()
Enable the ABR to change automatically between tracks.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   
<a id="Player_getAudioStreams"></a>

### player.getAudioStreams() ⇒ [<code>Array.&lt;AudioStream&gt;</code>](#AudioStream)
Get the available audio streams.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: [<code>Array.&lt;AudioStream&gt;</code>](#AudioStream) - the list of the available audio streams.  
**Export**:   
<a id="Player_getCurrentAudioStream"></a>

### player.getCurrentAudioStream() ⇒ [<code>AudioStream</code>](#AudioStream)
Get the audio stream currently in use.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: [<code>AudioStream</code>](#AudioStream) - the current audio track.  
**Export**:   
<a id="Player_setAudioStream"></a>

### player.setAudioStream(streamID)
Set the current audio stream.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| streamID | <code>number</code> | ID of the audio stream to be used. |

<a id="Player_isLive"></a>

### player.isLive() ⇒ <code>boolean</code>
Informs if the video is live or on demand (VOD).

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>boolean</code> - true if the video is live, false otherwise.  
<a id="Player_on"></a>

### player.on(callbackType, functionToBeCalled)
Adds a listener for an Event.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| callbackType | <code>NexEvent</code> | Event to listen. |
| functionToBeCalled | [<code>NexCallbackEvent</code>](#NexCallbackEvent) | Function called on each event. |

<a id="Player_attachSubtitleRendererDiv"></a>

### player.attachSubtitleRendererDiv(subtitleRendererDiv)
Adds a DIV to render certain subtitles in a more exact way.
This is optional and the native subtitles of the video element will be used if this is not set.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| subtitleRendererDiv | <code>subtitleRendererDiv</code> | DIV to render some advance subtitles. |

<a id="Player_create360View"></a>

### player.create360View()
Creates the 360 view.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   
<a id="Player_FairPlayNexLicenseRequestLoaded"></a>

### player.FairPlayNexLicenseRequestLoaded(event)
Called this when the FairPlay request is done

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a id="Player_FairPlayNexLicenseRequestFailed"></a>

### player.FairPlayNexLicenseRequestFailed(event)
Called this in case of a FairPlay request fail

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a id="Player_setThumbnailResources"></a>

### player.setThumbnailResources(callback, vttURl, imageURL)
Set thumbnails resources. This method should be called before Init().

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>NexCallbackEvent</code>](#NexCallbackEvent) | functionToBeCalled Function when thumbnails are loaded. |
| vttURl | <code>String</code> | path to vtt thumbnails file. |
| imageURL | <code>String</code> | path to image thumbnails file. |

<a id="Player_isUTC"></a>

### player.isUTC() ⇒ <code>boolean</code>
Indicates if the video information (currentTime, duration, seekable range, etc.) of the video element is based on the present or on an absolute value that
starts at midnight UTC, Jan 1, 1970.
If this is true, seeking through the currentTime of the video element, will need
to be done taking it into account.
Some useful methods, like getCurrentTime, getDuration and seek, are
available to reduce the complexity in these cases. Note that this property only
applies for live streams.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>boolean</code> - true if the video information is using UTC, false otherwise.  
<a id="Player_getCurrentTime"></a>

### player.getCurrentTime() ⇒ <code>number</code>
Returns the currentTime taking into account isUTC 
(in these cases it will be different from the currentTime of the video element).

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>number</code> - the current time of the video.  
<a id="Player_getDuration"></a>

### player.getDuration() ⇒ <code>number</code>
Returns the duration taking into account isUTC 
(in those cases it will be different from the duration of the video element).

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>number</code> - the duration of the video.  
<a id="Player_seek"></a>

### player.seek(value)
Sets the position of the playback.
(in those cases setting this will be different from the currentTime of the video element).

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | value that the player will seek to. |

<a id="Player_sendImpression"></a>

### player.sendImpression()
Send the impression details to the server, only for internal management.

**Kind**: instance method of [<code>Player</code>](#Player)  
<a id="Player_getProtocol"></a>

### player.getProtocol() ⇒ <code>number</code>
Returns the protocol type

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>number</code> - the duration of the video.  
<a id="Player_getThumbnailController"></a>

### player.getThumbnailController() ⇒ <code>ThumbController</code>
Returns the preview thumbnail controller

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>ThumbController</code> - Thumbnail controller  
<a id="Player_setThumbnailStep"></a>

### player.setThumbnailStep(step)
Set step for dynamic thumbnails

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| step | <code>number</code> | the seconds between two different thumbnails |

<a id="Player_enablePreviewThumbnails"></a>

### player.enablePreviewThumbnails(option)
Enable preview thumbnails. This method must be called before Init().

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>boolean</code> | the value that enable or not the thumbnails |

<a id="Player_setSpeed"></a>

### player.setSpeed(speed)
Set the video playback speed.

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| speed | <code>number</code> | the value of the speed |

<a id="Player_getQualityLevels"></a>

### player.getQualityLevels() ⇒ <code>array</code>
Get the video quality levels array

**Kind**: instance method of [<code>Player</code>](#Player)  
**Returns**: <code>array</code> - quality levels array info  
<a id="Player_setTrack"></a>

### player.setTrack(qualityLevel)
Set the video quality level

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| qualityLevel | <code>number</code> | index of the quality level |

<a id="Player_togglePlayPause"></a>

### player.togglePlayPause()
Toggle between play and pause.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   
<a id="Player_setSubtitle"></a>

### player.setSubtitle(index)
Set the video subtitle

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | index of the subtitles list |

<a id="Player_toggleFullScreen"></a>

### player.toggleFullScreen()
Toogle between full screen and not full screen

**Kind**: instance method of [<code>Player</code>](#Player)  
**Export**:   
<a id="Player_NexProtocol"></a>

### Player.NexProtocol : <code>enum</code>
**Kind**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| HLS | <code>number</code> | <code>0</code> | 
| DASH | <code>number</code> | <code>1</code> | 
| PROGRESSIVE_DOWNLOAD | <code>number</code> | <code>2</code> | 
| UNKNOWN | <code>number</code> | <code>3</code> | 
| SHAKA | <code>number</code> | <code>4</code> | 

<a id="Player_NexEvent"></a>

### Player.NexEvent : <code>enum</code>
**Kind**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Track_Change | <code>number</code> | <code>0</code> | 
| Fragment_Loading_Completed | <code>number</code> | <code>1</code> | 

<a id="Player_THUMB_TYPE"></a>

### Player.THUMB_TYPE : <code>enum</code>
**Kind**: static enum of [<code>Player</code>](#Player)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| STATIC_THUMBNAILS | <code>number</code> | <code>0</code> | 
| DYNAMIC_THUMBNAILS | <code>number</code> | <code>1</code> | 

<a id="NexCallbackEvent"></a>

## NexCallbackEvent : <code>function</code>
Called when a NexEvent happens.

**Kind**: global typedef  
<a id="NexCallback"></a>

## NexCallback : <code>function</code>
Called when a FairPlay content needs to request the license.

**Kind**: global typedef  

| Param | Description |
| --- | --- |
| event | when the webkitkeymessage event from FairPlay is called. |

<a id="NexHeaders"></a>

## NexHeaders : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| FieldName | <code>string</code> | of the HTTPHeaders. |
| FiledValue | <code>string</code> | of the HTTPHeaders. |

<a id="NexDRMInformation"></a>

## NexDRMInformation : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| NexDRMType | <code>string</code> | NexDRMType of the video. |
| NexDRMKey | <code>string</code> | NexDRMKey of the video. |
| NexHeaders | [<code>Array.&lt;NexHeaders&gt;</code>](#NexHeaders) | NexHeaders the video. |
| NexCallback | [<code>NexCallback</code>](#NexCallback) | NexCallback for FairPlay content. |

<a id="Track"></a>

## Track : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | width of the video. |
| height | <code>number</code> | height of the video. |
| bitrate | <code>number</code> | bitrate the video. |
| id | <code>number</code> | id the video. |

<a id="AudioStream"></a>

## AudioStream : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | id of stream. |
| language | <code>number</code> | language of the stream. |
| name | <code>number</code> | name of the stream. |

