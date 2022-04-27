<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 4.3.1

```
https://nexplayer.nexplayersdk.com/HTML5/4.3.1_20220422/nexplayer.js
```
* **[Added]** Support DAI with IMA.
* **[Added]** Implemented retry property.
* **[Added]** Implemented <a href="https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest#pageUrl">pageUrl</a> for IMA. More info <a href="./#/ps5_xbox_tizen_webos_usage?id=setup"> here </a>
* **[Added]** Implemented Verimatrix watermark.

Date: March 22nd 2022

#### Version 4.2.0

* **[Added]** Support multiple external subtitles.
* **[Added]** Support for SRT subtitles.
* **[Added]** Method [getBandwidthEstimate()](ps5_xbox_tizen_webos_usage.md?id=getbandwidthestimate).
* **[Improved]** Changed [player.getVersion()](ps5_xbox_tizen_webos_usage.md?id=getversion) to static method [nexplayer.getVersion()](ps5_xbox_tizen_webos_usage.md?id=nexplayer-getversion).
* **[Improved]** Fixed loading issue when the playlist is desynchronized on HLS.

Date: March 2nd 2022

#### Version 4.1.3.1

* **[Improved]** Fixed issue related to DRM with headers.

Date: February 21th 2022

#### Version 4.1.3

* **[Improved]** Fixed issue related to audio tracks changing automatically.
* **[Improved]** Fixed reload method with live videos.
* **[Improved]** Fixed IMA.
* **[Improved]** Improved logic to discard the external subtitles are too large.

Date: February 16th 2022

#### Version 4.1.1.1

This version is a hotfix on version 4.1.1 and does not include 4.1.2 changes.

* **[Improved]** Fixed exception when playing ads on a TV that does not support navigator.connection API.

Date: February 3rd 2022

#### Version 4.1.2

* **[Improved]** Improve <a href="./#/ps5_xbox_tizen_webos_usage?id=destroy">destroy</a> method.
* **[Improved]** Improve the cue data management.
* **[Added]** Support for AES-128 on Tizen, WebOS, and Xbox.

Date: February 2nd 2022

#### Version 4.1.1

* **[Improved]** Fixed bugs related to <a href="./#/ps5_xbox_tizen_webos_usage?id=adsevents">AdsEvents</a>, <a href="./#/ps5_xbox_tizen_webos_usage?id=removeadsevents">RemoveAdsEvents</a> and <a href="./#/ps5_xbox_tizen_webos_usage?id=iscurrentassetad">isCurrentAssetAd</a> functions.
* **[Improved]** Fixed bug when destroying and creating the player and adding ads events
* **[Improved]** Blocked play and seek during ads playback.
* **[Improved]** AdInstance reset when destroying the player.
* **[Improved]** Detect the size of the external subtitles and ignore them if necessary. If the external subtitles are ignored and there are internal subtitles available the internal ones are activated.

Date: January 30th 2022

#### Version 4.1.0

* **[Improved]** Improved external subtitles' algorithm to avoid freezing on old devices when reading large files.
* **[Improved]** Improved ad event's behaviour. Now it's possible to remove the event listeners at any time.
* **[Added]** New <a href="./#/ps5_xbox_tizen_webos_usage?id=load">load</a> and <a href="./#/ps5_xbox_tizen_webos_usage?id=reload">reload</a> methods to change between videos and recover from failures without reinitializing the player.
* **[Deprecated]** <a href="./#/ps5_xbox_tizen_webos_usage?id=setup">reinitializeAfterAds</a> property from the Setup method has been deprecated and its usage does nothing.

Date: January 19th 2022

<a id="version-404"> </a>

#### Version 4.0.3
* **[Improved]** Fixed ads issues on live. Ads are scheduled correctly on live.
* **[Improved]** Ads are resized correctly to the player size and filtered by bandwidth.
* **[Improved]** Fixed playback freezing on WebOS and Tizen.
* **[Added]** Check for 4k support on WebOS devices. 4k tracks are dropped if the device does not support 4k even if the codecs are supported by MediaSource.

Date: January 7th 2022

#### Version 4.0.2

* **[Improved]** Fixed issue where some previous cue data appear in the next cue change
* **[Improved]** General ad improvements.
* **[Improved]** Now the event listeners that weren't being removed are properly removed on destroy.
* **[Improved]** Optimized some methods to avoid high CPU consumption.
* **[Added]** <a href="./#/ps5_xbox_tizen_webos_usage?id=bitrateconfig">Bitrate config</a> parameter to the setup

Date: December 16th 2021

#### Version 4.0.1

* **[Improved]** Fixed issues with subtitles activation behaviour.
* **[Improved]** Added error controls to the destroy method.
* **[Improved]** Fixed bug related to the seek method on live streams and the seek range available.
* **[Added]** Added support for escaped sequences on subtitles.
* **[Added]** Implement <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayerdecodedatadata">decodeData</a> function.

Date: November 23th 2021

#### Version 4.0.0

* **[Improved]** Fixed current tracks' bitrate property returning null for HLS streams.
* **[Improved]** Fixed seek not working when including static thumbnails.
* **[Improved]** Fixed subtitles activation/deactivation issue with live streams.
* **[Improved]** Fixed subtitles' style not displayed correctly, i.e. tags like \<i> were being displayed as they are and the text was not displayed as italics.
* **[Improved]** Fixed <a href="./#/ps5_xbox_tizen_webos_usage?id=off">off</a> method not being defined
* **[Improved]** Fixed thumbnails bug on fullscreen.


* **[Added]** Implemented adding ads in runtime.
* **[Added]** Implemented error event.
* **[Added]** Implemented method for adding VAST ads.
* **[Added]** SSAI implementation using AWS MediaTailor.
* **[Added]** Support for EMSG metadata boxes used for DAI. Only for fMP4 fragments.
* **[Added]** Parameter to control IMA's ads load timeout.
* **[Added]** PlayReady DRM with HLS. Be aware of the possible restrictions on each platform.
* **[Added]** Seeking on live improved. It possible to seek throughout the range that can be retrieved using seekRange() method.
* **[Added]** Thumbnails garbage collection in order to release memory.

Date: October 25th 2021

#### Version 3.4.6.1

* **[Improved]** Fixed issue with destroy method not working with some configurations.

Date: October 14th 2021

#### Version 3.4.6

* **[Improved]** Fixed issue with subtitles not working with IMA.
* **[Improved]** Fixed the time counter of trick play that is shown while the UI is deactivated.

Date: October 6th 2021

#### Version 3.4.5.1

* **[Improved]** Fixed bugs related to VMAP and VAST ads.
* **[Improved]** Babel regeneratorRuntime not defined issue fixed.
* **[Added]** Error messages implemented for thumbnails.

Date: October 4th 2021

#### Version 3.4.5

* **[Improved]** General improvements.

Date: September 9th 2021

#### Version 3.4.4

* **[Improved]** Fixed bug with VMAP ads that contain bumpers.
* **[Improved]** Fixed issue that caused the player to stay black after an ad finishes.
* **[Improved]** Fixed bug regarding the ads triggered when using the property "resumePosition" from the "Setup" method.
* **[Improved]** Fixed pause issue after the ads are completed.

Date: August 24th 2021

#### Version 3.4.3

* **[Added]** Implemented new property for encoding parameters of the VAST URLs. <a href="./#/ps5_xbox_tizen_webos_usage?id=setup">"adsParamsToEncode"</a>.
* **[Improved]** Fixed playback after preroll ads.
* **[Improved]** getDroppedFrames() method improved. Now returns accurate number of dropped frames.

Date: August 9th 2021

#### Version 3.4.2

* **[Added]** A UI for ads is now available using the property <a href="./#/ps5_xbox_tizen_webos_usage?id=setup">"showAdsUI"</a>.
* **[Added]** Added new methods in order to fetch properties status (more info <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-api">here</a>):
    * **getCurrentContentType()**: string → returns the the type of the current asset (“ad”, “mainContent” or “none”).
    * **getCurrentTime()**: number → returns the current time of the video.
    * **getDroppedFrames()**: number → returns the number of frames dropped or NaN if not available or no frames were dropped.
    * **getPlaybackRate()**: number → returns the playback rate/speed of the video.
    * **getProtocol()**: NexProtocol  → returns the protocol of the stream used: 
    * **getVersion()**: string → returns the version of the SDK.
    * **isCurrentAssetAd()**: boolean → indicates whether the current asset playing is an ad or not; 
    * **isCurrentAssetMuted()**: boolean → returns whether the ad or the main content is muted or not.
* **[Added]** Added a new event, <a href="./#/ps5_xbox_tizen_webos_usage?id=buffertype">"bufferType"</a>. this new event will be fired when a buffering event occurs and it specifies what type of buffering occurred (connection, seek, initial, background).

* **[Improved]** Fixed non-resizing ads when using IMA.
* **[Improved]** Fixed non-skipping ads when using IMA.


Date: August 3rd 2021 

#### Version 3.4.1

* **[Improved]** Fixed trickplay errors.
* **[Improved]** Fixed ads errors and improved ads behavior.


Date: July 27th 2021 

#### Version 3.4.0

* **[Added]** Playlist ad format is now supported. 
* **[Added]** Remote buttons handlers have been implemented.
* **[Added]** IMA and PAL ad libraries are now supported. More information on how to use them <a href="./#/ps5_xbox_tizen_webos_usage?id=ads">here</a>.
* **[Added]** Implemented method for removing the listeners of ad events. More information on how to use these methods <a href="./#/ps5_xbox_tizen_webos_usage?id=removeadsevents">here</a>.
* **[Added]** Implemented "off" method for player events removal. More information on how to use it <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer-events">here</a>.

* **[Improved]** Black screen after ads has been fixed.
* **[Improved]** Fixed unresponsive UI when no ads are triggered.
* **[Improved]** Playback now continues when the license server is down.
* **[Improved]** Changed "FiledValue" to "FieldValue" due to a mispelling.
* **[Improved]** Fixed non-triggering events when linear inline ads were being played.


Date: July 20th 2021 

#### Version 3.3.11

* **[Added]** Chunking properties are internally calculated depending on the number of thumbnails provided. Thus, "thumbChunking" property has been removed.
* **[Added]** Added "mount" and "unmount" events in order to check when the player is initialized or destroyed. More information <a href="./#/ps5_xbox_tizen_webos_usage?id=mounted">here</a>.
* **[Added]** Added IsReady() method in order to check if the player is ready to mount or not. More information <a href="./#/ps5_xbox_tizen_webos_usage?id=isready">here</a>.

* **[Improved]** Changed staticThumbnailsVTT to staticThumbnails and useDynamicThumbnails to dynamicThumbnails. "staticThumbnailsImg" property has been removed.
* **[Improved]** Normalized event names throughout all projects. "adended" is now "adcomplete" and "adblockstarted" is now "adblockstart". 
* **[Improved]** Fixed non-finite value issue when seeking multiple times via controller.
* **[Improved]** Fixed VTT parsing error which led the URL to be corrupted.
* **[Improved]** Fixed error when seeking to 0 on VODs.


Date: July 1st 2021 

#### Version 3.3.10

* **[Added]** Implemented trickplay(value). Check more details <a href="./#/ps5_xbox_tizen_webos_usage?id=trickplay">here</a>.
* **[Added]** Start time improvement. It can be used through the property <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration">"improveStartTime"</a>.
* **[Added]** Callbacks for handling external subtitles and thumbnails errors. More information <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration">here</a>.

* **[Improved]** Fixed "file not found" error.
* **[Improved]** Fixed crash after mid-roll and pre-roll ads on Tizen.


Date: June 14th 2021 

#### Version 3.3.9

* **[Added]** Milestone management for trailers and scrubbing. It can be used through the property <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration">"trailer"</a>
* **[Added]** 60 seconds in event added. Check more details <a href="./#/ps5_xbox_tizen_webos_usage?id=custom-events">here</a>.

* **[Improved]** Changed getThumbnailAt(time) to return a Promise instead of a thumbnail. Check more details <a href="./#/ps5_xbox_tizen_webos_usage?id=getthumbnailat">here</a>.
* **[Improved]** Fixed crash due to providing non-finite double values.


Date: May 31st 2021 

#### Version 3.3.8

* **[Added]** Implemented getThumbnailAt(time) and getThumbnails() functions. Check more details <a href="./#/ps5_xbox_tizen_webos_usage?id=getthumbnailat">here</a>.
* **[Added]** When choosing subtitles, playback stops until leaving the UI.

* **[Improved]** Enhanced thumbnail fetch when hovering.
* **[Improved]** staticThumbnailsVTT can now provide a VTT reference instead of an actual VTT.


Date: May 14th 2021 

#### Version 3.3.7

* **[Added]** Added the possibility to specify the codec priority. It can be used through a new property, 
<a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration"> "preferredAudioCodec"</a>, in the nexplayer Setup method.

* **[Added]** A custom-sized initial buffer can now be set by passing the desired number of seconds to achieve. It can be used through a new property, 
<a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration"> "startingBufferLength"</a>, in the nexplayer Setup method.

* **[Added]** Custom data can now be added to New Relic's tracker. Removing data can also be done. Check NexPlayer's API for more details.

* **[Improved]** Prevented subtitles from updating while seeking.
* **[Improved]** Restart video button now works when video ends.
* **[Improved]** Video now ends before any postroll starts playing.


Date: April 27th 2021 

#### Version 3.3.6.1

* **[Added]** Changed destroy method to return a Promise. UnMount should be use when this Promise is resolved to fully destroy the player.

* **[Improved]** Fixed ABR issue.
* **[Improved]** Fixed file not found issue.
* **[Improved]** Fixed non-finite value issue on seek.

Date: March 12th 2021 

#### Version 3.3.6

* **[Added]** Video progress events for the 25%, 50%, 75% of the video's duration. Check more details <a href="./#/ps5_xbox_tizen_webos_usage?id=custom-events">here</a>.
* **[Added]** Possibility to use a chunking algorithm in order to improve the efficiency of the thumbnails. It can be used through a new property, 
<a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration"> "thumbChunking"</a>, in the nexplayer Setup method.

* **[Added]** New Relic tracker. It can be used through the property <a href="./#/ps5_xbox_tizen_webos_usage?id=nexplayer%e2%84%a2-configuration">"useNewRelicTracker"</a>

* **[Added]** Seek bar is not shown in live content.

Date: March 9th 2021 

#### Version 3.3.5

* **[Improved]** Solved visual bug related with subtitles on PS5. 

Date: February 19th 2021

#### Version 3.3.4

* **[Added]** DRM request filter. 
* **[Added]** Support for static thumbnails using only a VTT file.
* **[Added]** Implemented getURL(), getPlaybackRate() and getMediaElement() functions.
* **[Improved]** Fixed language UI bug.
* **[Improved]** Fixed UI play button bug.
* **[Improved]** Resolved issues regarding VAST ads.
* **[Improved]** Resolved issues regarding subtitles file size.

Date: February 16th 2021

#### Version 3.3.3

* **[Added]** WebOS 3.X support including 2017 and older LG smart TVs. 
* **[Improved]** Resolved issues regarding TTML subtitles displaying badly and slow playback caused by CC. 

Date: January 29th 2021

#### Version 3.2.2

* **[Improved]** Resolved subtitles issue when using a large vtt file as external subtitles in TVs.

Date: November 23rd 2020

#### Version 3.3.1

* **[Improved]** Resolved issue when playing multiple ads during midrolls. Sometimes the main video wasn't playing back again and the screen was just black.

Date: September 28th 2020

#### Version 3.3.0

* **[Improved]** Fixed issue when initializing the player again after the ads.

Date: September 23rd 2020

#### Version 3.2.1

* **[Added]** PlayStation 5 support. It is needed a JSON file, provided by us, in order to use the player in this platform. This JSON file must be hosted in the root of the domain where the application is hosted. For example, if the app is hosted in https://example.com/app the JSON file must be accessible from the path https://example.com/userAppId.json

Date: September 18th 2020

#### Version 3.2.0

* **[Added]** Implemented support for fallback ad feature.

#### Version 3.1.3

* **[Improved]** Filter out .WEBM files for the ads in PS5, because they contain VP8 codec that is not supported in this platform. 

#### Version 3.1.2

* **[Improved]** Implemented fix for the issue on Tizen 2020 devices related to the ads. For using this workaround is necessary to use the property "reinitializeAfterAds: true" in the nexplayer Setup method.

#### Version 3.1.1

* **[Improved]** Fixed error that avoids ads events to be fired when multiples ads are available.

#### Version 3.1.0

* **[Improved]** Subtitles styling.


#### Version 3.0.3

* **[Added]** Added 'addEventListener' method on AdInstance() object. It is possible to subscribe for HTML video events for the ads. See <a href="./#/ps5_xbox_tizen_webos_usage?id=miscellaneous">Ads Method</a> at Advance Usage.

#### Version 3.0.2

* **[Added]** Added 'onstatechange' event. See  <a href="./#/ps5_xbox_tizen_webos_usage?id=custom-events">Custom Events</a> at Advance Usage.

#### Version 3.0.1

* **[Improved]** Subtitles management improve. Now subtitles are not managed by the browser and they can have the same style in different browsers.


#### Version 3.0.0

* **[Improved]** Update Shaka external module to version 3.0.0


#### Version 2.3.13

* **[Improved]** Fixed issue that made the lives streams not start at the live edge, but at the limit of the availability window
* **[Improved]** Change the NexEvent.Buffering behaviour. It now receives as parameter an object containing the state of the buffer. True for buffering, false for finishing loading.


#### Version 2.3.12

* **[Improved]** Fixed crash when the VMAP XML is empty
* **[Added]** Added NexEvent.Buffering. Please, check it at the API document

#### Version 2.3.11

* **[Improved]** Bug fixes in Xbox

#### Version 2.3.10

* **[Improved]** Bug fixes in Xbox

#### Version 2.3.9

* **[Improved]** Bug fixes in Xbox

#### Version 2.3.8

* **[Improved]** Bug fixes in Xbox

#### Version 2.3.7

* **[Improved]** Fixed problem with subtitles being activated without user interaction
* **[Improved]** Fixed bug when unmounting the player. Now it is released correctly


#### Version 2.3.6

* **[Improved]** Fixed crash when VAST XML response is empty 
* **[Improved]** Not sending ad breaks events when their VAST XML response is empty 

#### Version 2.3.5

* **[Improved]** Fixed bug whereby midroll ads not playing when the playback head reaches them


#### Version 1.3.6

* **[Added]** Added Widevine and Playready support (Only supported by Tizen 4.0 (2018) or newer versions)
* **[Improved]** Bug fixes


#### Version 1.3.5

* **[Added]** Added Default Settings for Remote Controller
* **[Added]** New UI Features
* **[Improved]** Documentation snippets can be easily copied
* **[Improved]** Better screen size adjustment
* **[Improved]** Fix TTML display issue with DASH
* **[Improved]** Fix webVTT display issue in Custom size
* **[Improved]** Player Seeking behavior
* **[Improved]** Fix AES encryption issue
* **[Improved]** DASH module update
* **[Improved]** Bug fixes

#### Version 1.3.4

* **[Improved]** Bug fixes

#### Version 1.3.3

* **[Added]** New Remote Controller APIs
* **[Added]** support WebVTT subtitles for HLS
* **[Added]** Auto play option
* **[Added]** Muted at start option
* **[Added]** Disable full screen option
* **[Added]** Default language option in player initialization
* **[Improved]** Buffer management with live HLS
* **[Improved]** New subtitles and language menu in default UI
* **[Improved]** UI update
* **[Improved]** Software update
* **[Improved]** Bug fixes


#### Version 1.3

* **[Added]** Online license management (setting the customer key is now necessary)
* **[Added]** ABR track selection
* **[Added]** Playback speed controls
* **[Added]** UnMount method to close the container and reuse it for a different video
* **[Improved]** Responsiveness of the sample code and the player UI when the container is resized
* **[Improved]** Resiliency for decoding errors while using HLS
* **[Improved]** General stability
* **[Improved]** Improvement to playback of DASH and HLS streams
* **[Improved]** Extended documentation with examples

#### Version 1.2

* **[Added]** CMAF on HLS
* **[Added]** Support attributes on the video tag
* **[Added]** Custom HTTP headers also without DRM
* **[Improved]** TTML with images support with DASH
* **[Improved]** Sample UI improvements

#### Version 1.0

* **[Added]** Initial release of the player
