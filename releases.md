<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Latest
```
https://nexplayer.nexplayersdk.com/latest/tizen/nexplayer.js
```
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