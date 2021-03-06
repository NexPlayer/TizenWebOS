<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 3.4.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.4.0_20210720/nexplayer.js
```
* **[Added]** Playlist ad format is now supported. 
* **[Added]** Remote buttons handlers have been implemented.
* **[Added]** IMA and PAL ad libraries are now supported. More information on how to use them <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=ads">here</a>.
* **[Added]** Implemented "removeEventListener" methods for ad events removal. More information on how to use these methods <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=ads-events">here</a>.
* **[Added]** Implemented "off" methods for player events removal. More information on how to use it <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=nexplayer-events">here</a>.

* **[Improved]** Black screen after ads has been fixed.
* **[Improved]** Fixed unresponsive UI when no ads are triggered.
* **[Improved]** Playback now continues when the license server is down.
* **[Improved]** Changed "FiledValue" to "FieldValue" due to a mispelling.
* **[Improved]** Fixed non-triggering events when linear inline ads were being played.


Date: July 20th 2021 

#### Version 3.3.11
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.11_20210701/nexplayer.js
```
* **[Added]** Chunking properties are internally calculated depending on the number of thumbnails provided. Thus, "thumbChunking" property has been removed.
* **[Added]** Added "mount" and "unmount" events in order to check when the player is initialized or destroyed. More information <a href="https://nexplayer.github.io/TizenWebOS/#/API?id=isready">here</a>.
* **[Added]** Added IsReady() method in order to check if the player is ready to mount or not. More information <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=player-destroy">here</a>.

* **[Improved]** Changed staticThumbnailsVTT to staticThumbnails and useDynamicThumbnails to dynamicThumbnails. "staticThumbnailsImg" property has been removed.
* **[Improved]** Normalized event names throughout all projects. "adended" is now "adcomplete" and "adblockstarted" is now "adblockstart". 
* **[Improved]** Fixed non-finite value issue when seeking multiple times via controller.
* **[Improved]** Fixed VTT parsing error which led the URL to be corrupted.
* **[Improved]** Fixed error when seeking to 0 on VODs.


Date: July 1st 2021 

#### Version 3.3.10
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.10_20210614/nexplayer.js
```
* **[Added]** Implemented trickplay(value). Check more details <a href="https://nexplayer.github.io/TizenWebOS/#/API?id=trickplay">here</a>.
* **[Added]** Start time improvement. It can be used through the property <a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration">"improveStartTime"</a>.
* **[Added]** Callbacks for handling external subtitles and thumbnails errors. More information <a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration">"here"</a>.

* **[Improved]** Fixed "file not found" error.
* **[Improved]** Fixed crash after mid-roll and pre-roll ads on Tizen.


Date: June 14th 2021 

#### Version 3.3.9
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.9_20210531/nexplayer.js
```
* **[Added]** Milestone management for trailers and scrubbing. It can be used through the property <a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration">"trailer"</a>
* **[Added]** 60 seconds in event added. Check more details <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=custom-events">here</a>.

* **[Improved]** Changed getThumbnailAt(time) to return a Promise instead of a thumbnail. Check more details <a href="https://nexplayer.github.io/TizenWebOS/#/API?id=getthumbnailat">here</a>.
* **[Improved]** Fixed crash due to providing non-finite double values.


Date: May 31st 2021 

#### Version 3.3.8
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.8_20210517/nexplayer.js
```
* **[Added]** Implemented getThumbnailAt(time) and getThumbnails() functions. Check more details <a href="https://nexplayer.github.io/TizenWebOS/#/API?id=getthumbnailat">here</a>.
* **[Added]** When choosing subtitles, playback stops until leaving the UI.

* **[Improved]** Enhanced thumbnail fetch when hovering.
* **[Improved]** staticThumbnailsVTT can now provide a VTT reference instead of an actual VTT.


Date: May 14th 2021 

#### Version 3.3.7
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.7_20210426/nexplayer.js
```
* **[Added]** Added the possibility to specify the codec priority. It can be used through a new property, 
<a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration"> "preferredAudioCodec"</a>, in the nexplayer Setup method.

* **[Added]** A custom-sized initial buffer can now be set by passing the desired number of seconds to achieve. It can be used through a new property, 
<a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration"> "startingBufferLength"</a>, in the nexplayer Setup method.

* **[Added]** Custom data can now be added to New Relic's tracker. Removing data can also be done. Check NexPlayer's API for more details.

* **[Improved]** Prevented subtitles from updating while seeking.
* **[Improved]** Restart video button now works when video ends.
* **[Improved]** Video now ends before any postroll starts playing.


Date: April 27th 2021 

#### Version 3.3.6.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.6.1_20210312/nexplayer.js
```
* **[Added]** Changed destroy method to return a Promise. UnMount should be use when this Promise is resolved to fully destroy the player.

* **[Improved]** Fixed ABR issue.
* **[Improved]** Fixed file not found issue.
* **[Improved]** Fixed non-finite value issue on seek.

Date: March 12th 2021 

#### Version 3.3.6
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.6_20210309/nexplayer.js
```
* **[Added]** Video progress events for the 25%, 50%, 75% of the video's duration. Check more details <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=custom-events">here</a>.
* **[Added]** Possibility to use a chunking algorithm in order to improve the efficiency of the thumbnails. It can be used through a new property, 
<a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration"> "thumbChunking"</a>, in the nexplayer Setup method.

* **[Added]** New Relic tracker. It can be used through the property <a href="https://nexplayer.github.io/TizenWebOS/#/gettingstarted?id=nexplayer%e2%84%a2-configuration">"useNewRelicTracker"</a>

* **[Added]** Seek bar is not shown in live content.

Date: March 9th 2021 

#### Version 3.3.5
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.5_20210219/nexplayer.js
```
* **[Improved]** Solved visual bug related with subtitles on PS5. 

Date: February 19th 2021

#### Version 3.3.4
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.4_20210216/nexplayer.js
```
* **[Added]** DRM request filter. 
* **[Added]** Support for static thumbnails using only a VTT file.
* **[Added]** Implemented getURL(), getPlaybackRate() and getMediaElement() functions.
* **[Improved]** Fixed language UI bug.
* **[Improved]** Fixed UI play button bug.
* **[Improved]** Resolved issues regarding VAST ads.
* **[Improved]** Resolved issues regarding subtitles file size.

Date: February 16th 2021

#### Version 3.3.3
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.3_20210129/nexplayer.js
```
* **[Added]** WebOS 3.X support including 2017 and older LG smart TVs. 
* **[Improved]** Resolved issues regarding TTML subtitles displaying badly and slow playback caused by CC. 

Date: January 29th 2021

#### Version 3.2.2
```
https://nexplayer.nexplayersdk.com/HTML5/3.2.2_20201123/nexplayer.js
```
* **[Improved]** Resolved subtitles issue when using a large vtt file as external subtitles in TVs.

Date: November 23rd 2020

#### Version 3.3.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.1_20200928/nexplayer.js
```
* **[Improved]** Resolved issue when playing multiple ads during midrolls. Sometimes the main video wasn't playing back again and the screen was just black.

Date: September 28th 2020

#### Version 3.3.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.0_20200923/nexplayer.js
```
* **[Improved]** Fixed issue when initializing the player again after the ads.

Date: September 23rd 2020

#### Version 3.2.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.2.1_20200918/nexplayer.js
```
* **[Added]** PlayStation 5 support. It is needed a JSON file, provided by us, in order to use the player in this platform. This JSON file must be hosted in the root of the domain where the application is hosted. For example, if the app is hosted in https://example.com/app the JSON file must be accessible from the path https://example.com/userAppId.json

Date: September 18th 2020

#### Version 3.2.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.2.0_20200831/nexplayer.js
```
* **[Added]** Implemented support for fallback ad feature.

#### Version 3.1.3
```
https://nexplayer.nexplayersdk.com/HTML5/3.1.3_20200818/nexplayer.js
```
* **[Improved]** Filter out .WEBM files for the ads in PS5, because they contain VP8 codec that is not supported in this platform. 

#### Version 3.1.2
```
https://nexplayer.nexplayersdk.com/HTML5/3.1.2_20200813/nexplayer.js
```
* **[Improved]** Implemented fix for the issue on Tizen 2020 devices related to the ads. For using this workaround is necessary to use the property "reinitializeAfterAds: true" in the nexplayer Setup method.

#### Version 3.1.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.1.1_20200720/nexplayer.js
```
* **[Improved]** Fixed error that avoids ads events to be fired when multiples ads are available.

#### Version 3.1.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.1.0_20200714/nexplayer.js
```
* **[Improved]** Subtitles styling.


#### Version 3.0.3
```
https://nexplayer.nexplayersdk.com/HTML5/3.0.3_20200706/nexplayer.js
```
* **[Added]** Added 'addEventListener' method on AdInstance() object. It is possible to subscribe for HTML video events for the ads. See <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=miscellaneous">Ads Method</a> at Advance Usage.

#### Version 3.0.2
```
https://nexplayer.nexplayersdk.com/HTML5/3.0.2_20200703/nexplayer.js
```
* **[Added]** Added 'onstatechange' event. See  <a href="https://nexplayer.github.io/TizenWebOS/#/advanceusage?id=custom-events">Custom Events</a> at Advance Usage.

#### Version 3.0.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.0.1_20200701/nexplayer.js
```
* **[Improved]** Subtitles management improve. Now subtitles are not managed by the browser and they can have the same style in different browsers.


#### Version 3.0.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.0.0_20200630/nexplayer.js
```
* **[Improved]** Update Shaka external module to version 3.0.0


#### Version 2.3.13
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.13_20200626/nexplayer.js
```
* **[Improved]** Fixed issue that made the lives streams not start at the live edge, but at the limit of the availability window
* **[Improved]** Change the NexEvent.Buffering behaviour. It now receives as parameter an object containing the state of the buffer. True for buffering, false for finishing loading.


#### Version 2.3.12
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.12_20200625/nexplayer.js
```
* **[Improved]** Fixed crash when the VMAP XML is empty
* **[Added]** Added NexEvent.Buffering. Please, check it at the API document

#### Version 2.3.11
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.11_20200622/nexplayer.js
```
* **[Improved]** Bug fixes in Xbox

#### Version 2.3.10
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.10_20200622/nexplayer.js
```
* **[Improved]** Bug fixes in Xbox

#### Version 2.3.9
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.9_20200619/nexplayer.js
```
* **[Improved]** Bug fixes in Xbox

#### Version 2.3.8
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.8_20200619/nexplayer.js
```
* **[Improved]** Bug fixes in Xbox

#### Version 2.3.7
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.7_20200617/nexplayer.js
```
* **[Improved]** Fixed problem with subtitles being activated without user interaction
* **[Improved]** Fixed bug when unmounting the player. Now it is released correctly


#### Version 2.3.6
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.6_20200616/nexplayer.js
```
* **[Improved]** Fixed crash when VAST XML response is empty 
* **[Improved]** Not sending ad breaks events when their VAST XML response is empty 

#### Version 2.3.5
```
https://nexplayer.nexplayersdk.com/HTML5/2.3.5_20200610/nexplayer.js
```
* **[Improved]** Fixed bug whereby midroll ads not playing when the playback head reaches them


#### Version 1.3.6
```
https://nexplayer.nexplayersdk.com/tizen/1.3.6/nexplayer.js
```
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