<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 4.4.5.1

```
https://nexplayer.nexplayersdk.com/HTML5/4.4.5.1_20221129/nexplayer.js
```

* **[Improved]** Fixed subtitles not being displayed after pre-roll ads using IMA.

Date November 29th 2022


#### Version 4.4.3.3

* **[Added]** Implemented setting for enabling and disabling the usage of VPAID ads. [enableVpaid](ps5/api?id=setup) is a boolean that allows the player to execute VPAID ads, otherwise, the player will play other media that is available in the ad.

Date November 4th 2022

#### Version 4.4.5

* **[Improved]** Fixed parsing of HLS streams with EXT-X-BYTERANGE tags.
* **[Improved]** Fixed issue using 'adsMode' and 'ssaiMediaTailor' properties. 'adsMode' decides what kind of ad module will be used, so in case the 'ssaiMediaTailor' property is provided it will only work if 'adsMode' is set to 'ssai'.
* **[Improved]** Fixed issue with IMA DAI streams. Now the last ad skipped is displayed in case the player seeks to the end of the video.
* **[Added]** Created an [event](ps5/api?id=subtitlesready) to detect when the subtitles are available.
* **[Added]** Detection of the device maximum resolution supported and restriction of the video tracks with greater resolution than the maximum allowed.
* **[Added]** Support for low latency on Smart TVs and video consoles. The minimum Chrome version supported is version 66.
* **[Added]** APIs to retrieve [availabilityStartTime](ps5/api?id=getAvailabilityStartTime), [publishTime](ps5/api?id=getPublishTime) and [timeShiftBufferDepth](ps5/api?id=getTimeShiftBufferDepth) information from the manifests.

Date October 18th 2022

#### Version 4.4.3.2

* **[Improved]** Fixed issue when resuming a VOD and reaching a mid-roll ad.

Date September 2nd 2022

#### Version 4.4.4

* **[Improved]** Optimized manifest parse algorithm for HLS.
* **[Improved]** Fixed ABR not working if startingBitrate property is used.
* **[Improved]** Fixed SSAI with some streams that weren't working.
* **[Improved]** Now ads are not displayed multiple times when using DAI with IMA.
* **[Improved]** Fixed UI when using IMA.
* **[Added]** [Stall detected event](ps5/api.md?id=nexevent).

Date September 1st 2022

#### Version 4.4.3.1

* **[Improved]** Fixed CC issue on Xbox related to subtitles being parsed wrongly on the HTMLVideoElement.

Date August 16th 2022

#### Version 4.4.3

* **[Improved]** Fixed video errors when using pre-roll ads.

Date July 22nd 2022

#### Version 4.4.2

* **[Improved]** Fixed buffering and repeating frames issue on live streams with audio and video time differences.
* **[Improved]** DAI streams now are working with IMA DAI SDK.
* **[Improved]** Fixed frozen playback when using resumePosition.
* **[Improved]** Fixed bug related to the ads when using the resumePosition feature.
* **[Improved]** Fixed bug related to the ads where the ads did not resume the content after ending.
* **[Improved]** The adError event with IMA now works as expected.
* **[Improved]** Trick play behavior.
* **[Improved]** Trick play now is disabled during ads.
* **[Added]** Support for Hisense TVs, please note that each device could have different capabilities.

Date: July 14th 2022

#### Version 4.4.1

* **[Improved]** Fixed playback error on PS5 when multiple #EXT-X-KEY HLS tags are present in a manifest.
* **[Improved]** Fixed subtitles being changed automatically after ads when using IMA.
* **[Improved]** Fixed [seekLive()](ps5/api.md?id=seeklive) with long live streams.
* **[Improved]** Fixed buffering issue when the times of audio and video playlists are not perfectly synchronized.
* **[Improved]** Fixed issue on Hisense where subtitles were disappearing after seeking.
* **[Added]** Now the [adstarted](ps5/api.md?id=adscustomevents) event sends the content id, its placement, and the ad break's duration when using IMA.
* **[Added]** Implemented a new parameter [preferredVideoCodec](ps5/api.md?id=preferredvideocodec) to select the preferred video codec.
* **[Added]** Added support for HLS' Byte-Range manifest format.
* **[Added]** Implemented [CDN seamless switch for DASH](ps5/api.md?id=cdnseamless) when there's a failure in the original CDN.

Date: June 27th 2022

#### Version 4.3.1.5

* **[Improved]** Fixed issue when using the property <a href="./#/ps5/api?id=setup">adsParamsToEncode</a>. When a value in the ad URL parameters was duplicated the ad URL was cut off.

Date: July 4th 2022
#### Version 4.3.1.4

* **[Added]** Added the label information from the manifest into the <a href="https://nexplayer.github.io/TizenWebOS/#/ps5/api?id=audiostream">AudioStream</a> object.

Date: June 24th 2022
#### Version 4.3.1.3

* **[Improved]** Fixed the audio track change, now is immediate.

Date: June 21st 2022
#### Version 4.3.1.2

* **[Added]** Added [event videoProgressTime](ps5/api.md?id=customevents) triggered when the player reaches 5, 15, 85, and 95% of the video.

Date: June 13th 2022
#### Version 4.3.1.1

* **[Improved]** Fixed player behavior on long seek.
* **[Added]** Implemented [getCurrentSegmentContainer()](ps5/api.md?id=getCurrentSegmentContainer) method.
* **[Added]** Additional information through "adstarted" event for default ads mode.

Date: April 28th 2022

#### Version 4.3.1

* **[Added]** Support DAI with IMA.
* **[Added]** Implemented retry property.
* **[Added]** Implemented <a href="https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest#pageUrl">pageUrl</a> for IMA. More info <a href="./#/./ps5/api?id=setup">here</a>.
* **[Added]** Implemented Verimatrix watermark.

Date: April 22nd 2022

#### Version 4.2.0

* **[Added]** Support multiple external subtitles. In order to add the support for multiple text tracks, had to change the property "externalSubtitles" of the <a href="https://nexplayer.github.io/TizenWebOS/#/ps5/api?id=setup">"Setup"</a>, to use it you should pass an array of objects with the format specified <a href="https://nexplayer.github.io/TizenWebOS/#/ps5/api?id=externalsubtitleobject">here</a>.
* **[Added]** Support for SRT subtitles.
* **[Added]** Method [getBandwidthEstimate()](ps5/api.md?id=getbandwidthestimate).
* **[Improved]** Changed [player.getVersion()](ps5/api.md?id=getversion) to static method [nexplayer.getVersion()](ps5/api.md?id=nexplayer-getversion).
* **[Improved]** Fixed loading issue when the playlist is desynchronized on HLS.

Date: March 2nd 2022

#### Version 4.1.3.1

* **[Improved]** Fixed issue related to DRM with headers.

Date: February 21st 2022

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

* **[Improved]** Improve <a href="./#/ps5/api?id=destroy">destroy</a> method.
* **[Improved]** Improve the cue data management.
* **[Added]** Support for AES-128 on Tizen, WebOS, and Xbox.

Date: February 2nd 2022

#### Version 4.1.1

* **[Improved]** Fixed bugs related to <a href="./#/ps5/api?id=adsevents">AdsEvents</a>, <a href="./#/ps5/api?id=removeadsevents">RemoveAdsEvents</a> and <a href="./#/ps5/api?id=iscurrentassetad">isCurrentAssetAd</a> functions.
* **[Improved]** Fixed bug when destroying and creating the player and adding ads events.
* **[Improved]** Blocked play and seek during ads playback.
* **[Improved]** AdInstance reset when destroying the player.
* **[Improved]** Detect the size of the external subtitles and ignore them if necessary. If the external subtitles are ignored and there are internal subtitles available the internal ones are activated.

Date: January 30th 2022

#### Version 4.1.0

* **[Improved]** Improved external subtitles' algorithm to avoid freezing on old devices when reading large files.
* **[Improved]** Improved ad event's behaviour. Now it's possible to remove the event listeners at any time.
* **[Added]** New <a href="./#/ps5/api?id=load">load</a> and <a href="./#/ps5/api?id=reload">reload</a> methods to change between videos and recover from failures without reinitializing the player.
* **[Deprecated]** <a href="./#/ps5/api?id=setup">reinitializeAfterAds</a> property from the Setup method has been deprecated and its usage does nothing.

Date: January 19th 2022

<a id="version-404"> </a>

#### Version 4.0.3
* **[Improved]** Fixed ads issues on live. Ads are scheduled correctly on live.
* **[Improved]** Ads are resized correctly to the player size and filtered by bandwidth.
* **[Improved]** Fixed playback freezing on WebOS and Tizen.
* **[Added]** Check for 4K support on WebOS devices. 4K tracks are dropped if the device does not support 4k even if the codecs are supported by MediaSource.
* **[Removed]** Removed adding ads in runtime method.

Date: January 7th 2022

#### Version 4.0.2

* **[Improved]** Fixed issue where some previous cue data appear in the next cue change.
* **[Improved]** General ad improvements.
* **[Improved]** Now the event listeners that weren't being removed are properly removed on destroy.
* **[Improved]** Optimized some methods to avoid high CPU consumption.
* **[Added]** <a href="./#/ps5/api?id=bitrateconfig">Bitrate config</a> parameter to the setup.

Date: December 16th 2021

#### Version 4.0.1

* **[Improved]** Fixed issues with subtitles activation behaviour.
* **[Improved]** Added error controls to the destroy method.
* **[Improved]** Fixed bug related to the seek method on live streams and the seek range available.
* **[Added]** Added support for escaped sequences on subtitles.
* **[Added]** Implement <a href="./#/ps5/api?id=nexplayerdecodedatadata">decodeData</a> function.

Date: November 23rd 2021

#### Version 4.0.0

* **[Improved]** Fixed current tracks' bitrate property returning null for HLS streams.
* **[Improved]** Fixed seek not working when including static thumbnails.
* **[Improved]** Fixed subtitles activation/deactivation issue with live streams.
* **[Improved]** Fixed subtitles' style not displayed correctly, i.e. tags like \<i> were being displayed as they are and the text was not displayed as italics.
* **[Improved]** Fixed <a href="./#/ps5/api?id=off">off</a> method not being defined.
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

* **[Added]** Implemented new property for encoding parameters of the VAST URLs <a href="./#/ps5/api?id=setup">"adsParamsToEncode"</a>.
* **[Improved]** Fixed playback after preroll ads.
* **[Improved]** getDroppedFrames() method improved. Now returns accurate number of dropped frames.

Date: August 9th 2021

#### Version 3.4.2

* **[Added]** A UI for ads is now available using the property <a href="./#/ps5/api?id=setup">"showAdsUI"</a>.
* **[Added]** Added new methods in order to fetch properties status (more info <a href="./#/ps5/api">here</a>):
    * **getCurrentContentType()**: string → returns the the type of the current asset (“ad”, “mainContent” or “none”).
    * **getCurrentTime()**: number → returns the current time of the video.
    * **getDroppedFrames()**: number → returns the number of frames dropped or NaN if not available or no frames were dropped.
    * **getPlaybackRate()**: number → returns the playback rate/speed of the video.
    * **getProtocol()**: NexProtocol  → returns the protocol of the stream used.
    * **getVersion()**: string → returns the version of the SDK.
    * **isCurrentAssetAd()**: boolean → indicates whether the current asset playing is an ad or not.
    * **isCurrentAssetMuted()**: boolean → returns whether the ad or the main content is muted or not.
* **[Added]** Added a new event, <a href="./#/ps5/api?id=buffertype">"bufferType"</a>. this new event will be fired when a buffering event occurs and it specifies what type of buffering occurred (connection, seek, initial, background).

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
* **[Added]** IMA and PAL ad libraries are now supported. More information on how to use them <a href="./#/ps5/api?id=ads">here</a>.
* **[Added]** Implemented method for removing the listeners of ad events. More information on how to use these methods <a href="./#/ps5/api?id=removeadsevents">here</a>.
* **[Added]** Implemented "off" method for player events removal. More information on how to use it <a href="./#/ps5/api?id=nexplayer-events">here</a>.

* **[Improved]** Black screen after ads has been fixed.
* **[Improved]** Fixed unresponsive UI when no ads are triggered.
* **[Improved]** Playback now continues when the license server is down.
* **[Improved]** Changed "FiledValue" to "FieldValue" due to a mispelling.
* **[Improved]** Fixed non-triggering events when linear inline ads were being played.


Date: July 20th 2021

#### Version 3.3.11

* **[Added]** Chunking properties are internally calculated depending on the number of thumbnails provided. Thus, "thumbChunking" property has been removed.
* **[Added]** Added "mount" and "unmount" events in order to check when the player is initialized or destroyed. More information <a href="./#/ps5/api?id=mounted">here</a>.
* **[Added]** Added IsReady() method in order to check if the player is ready to mount or not. More information <a href="./#/ps5/api?id=isready">here</a>.

* **[Improved]** Changed staticThumbnailsVTT to staticThumbnails and useDynamicThumbnails to dynamicThumbnails. "staticThumbnailsImg" property has been removed.
* **[Improved]** Normalized event names throughout all projects. "adended" is now "adcomplete" and "adblockstarted" is now "adblockstart".
* **[Improved]** Fixed non-finite value issue when seeking multiple times via controller.
* **[Improved]** Fixed VTT parsing error which led the URL to be corrupted.
* **[Improved]** Fixed error when seeking to 0 on VODs.


Date: July 1st 2021

#### Version 3.3.10

* **[Added]** Implemented trickPlay(value). Check more details <a href="./#/ps5/api?id=trickplay">here</a>.
* **[Added]** Start time improvement. It can be used through the property <a href="./#/ps5/api?id=setup">"improveStartTime"</a>.
* **[Added]** Callbacks for handling external subtitles and thumbnails errors. More information <a href="./#/ps5/api?id=setup">here</a>.

* **[Improved]** Fixed "file not found" error.
* **[Improved]** Fixed crash after mid-roll and pre-roll ads on Tizen.


Date: June 14th 2021

#### Version 3.3.9

* **[Added]** Milestone management for trailers and scrubbing. It can be used through the property <a href="./#/ps5/api?id=setup">"trailer"</a>
* **[Added]** 60 seconds in event added. Check more details <a href="./#/ps5/api?id=custom-events">here</a>.

* **[Improved]** Changed getThumbnailAt(time) to return a Promise instead of a thumbnail. Check more details <a href="./#/ps5/api?id=getthumbnailat">here</a>.
* **[Improved]** Fixed crash due to providing non-finite double values.


Date: May 31st 2021

#### Version 3.3.8

* **[Added]** Implemented getThumbnailAt(time) and getThumbnails() functions. Check more details <a href="./#/ps5/api?id=getthumbnailat">here</a>.
* **[Added]** When choosing subtitles, playback stops until leaving the UI.

* **[Improved]** Enhanced thumbnail fetch when hovering.
* **[Improved]** staticThumbnailsVTT can now provide a VTT reference instead of an actual VTT.


Date: May 14th 2021

#### Version 3.3.7

* **[Added]** Added the possibility to specify the codec priority. It can be used through a new property,
<a href="./#/ps5/api?id=setup"> "preferredAudioCodec"</a>, in the nexplayer Setup method.

* **[Added]** A custom-sized initial buffer can now be set by passing the desired number of seconds to achieve. It can be used through a new property,
<a href="./#/ps5/api?id=setup"> "startingBufferLength"</a>, in the nexplayer Setup method.

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

* **[Added]** Video progress events for the 25%, 50%, 75% of the video's duration. Check more details <a href="./#/ps5/api?id=custom-events">here</a>.
* **[Added]** Possibility to use a chunking algorithm in order to improve the efficiency of the thumbnails. It can be used through a new property,
<a href="./#/ps5/api?id=setup"> "thumbChunking"</a>, in the nexplayer Setup method.

* **[Added]** New Relic tracker. It can be used through the property <a href="./#/ps5/api?id=setup">"useNewRelicTracker"</a>

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

<a id=version-321></a>

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

* **[Improved]** Fixed error that avoids ads events to be fired when multiple ads are available.

#### Version 3.1.0

* **[Improved]** Subtitles styling.


#### Version 3.0.3

* **[Added]** Added 'addEventListener' method on AdInstance() object. It is possible to subscribe for HTML video events for the ads. See <a href="./#/ps5/api?id=miscellaneous">Ads Method</a> at Advance Usage.

#### Version 3.0.2

* **[Added]** Added 'onstatechange' event. See  <a href="./#/ps5/api?id=custom-events">Custom Events</a> at Advance Usage.

#### Version 3.0.1

* **[Improved]** Subtitles management improve. Now subtitles are not managed by the browser and they can have the same style in different browsers.


#### Version 3.0.0

* **[Improved]** Update Shaka external module to version 3.0.0


#### Version 2.3.13

* **[Improved]** Fixed issue that made the lives streams not start at the live edge, but at the limit of the availability window.
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



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

#### Third Party Licenses

This is a summary of all third party licenses. NexPlayer licenses will be provided upon purchase.

```
promise-polyfill (https://github.com/taylorhakes/promise-polyfill):

Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

React (https://github.com/facebook/react):

MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Redux (https://github.com/reactjs/redux):

The MIT License (MIT)

Copyright (c) 2015-present Dan Abramov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

away (https://www.npmjs.com/package/away)

screenfull.js (https://github.com/sindresorhus/screenfull.js):

MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

element-resize-detector (https://github.com/wnr/element-resize-detector):

The MIT License (MIT)

Copyright (c) 2016 Lucas Wiener

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

script.js (https://github.com/ded/script.js)

rmp-vast (https://github.com/radiantmediaplayer/rmp-vast#license):

The MIT License (MIT)


Shaka player (https://github.com/google/shaka-player):

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

```