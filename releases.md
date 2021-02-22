<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 3.3.5
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.5_20210219/nexplayer.js
```
* **[Improved]** Solved visual bug related with subtitles on PS5. 

Date: Feb 19th 2021

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

Date: Feb 16th 2021

#### Version 3.3.3
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.3_20210129/nexplayer.js
```
* **[Added]** WebOS 3.X support including 2017 and older LG smart TVs. 
* **[Improved]** Resolved issues regarding TTML subtitles displaying badly and slow playback caused by CC. 

Date: Jan 29th 2021

#### Version 3.2.2
```
https://nexplayer.nexplayersdk.com/HTML5/3.2.2_20201123/nexplayer.js
```
* **[Improved]** Resolved subtitles issue when using a large vtt file as external subtitles in TVs.

Date: Nov 23rd 2020

#### Version 3.3.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.1_20200928/nexplayer.js
```
* **[Improved]** Resolved issue when playing multiple ads during midrolls. Sometimes the main video wasn't playing back again and the screen was just black.

Date: Sep 28th 2020

#### Version 3.3.0
```
https://nexplayer.nexplayersdk.com/HTML5/3.3.0_20200923/nexplayer.js
```
* **[Improved]** Fixed issue when initializing the player again after the ads.

Date: Sep 23rd 2020

#### Version 3.2.1
```
https://nexplayer.nexplayersdk.com/HTML5/3.2.1_20200918/nexplayer.js
```
* **[Added]** PlayStation 5 support. It is needed a JSON file, provided by us, in order to use the player in this platform. This JSON file must be hosted in the root of the domain where the application is hosted. For example, if the app is hosted in https://example.com/app the JSON file must be accessible from the path https://example.com/userAppId.json

Date: Sep 18th 2020

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