<a id="releases-top"> </a>

# Releases

Each version of the SDK is hosted in a CDN to allow faster and more efficient developments. Optionally, the library can be downloaded and hosted on a custom server.

#### Version 1.2.6

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.6_20220705/nexplayer.js
```
> :warning: Since this version it is mandatory to use a WebMAF version higger or equal than 2.6.0.

**New features:**
- Implemented <a href="#/ps4/api?id=videoProgressTimeEvent"> videoProgressTime </a> event.
- Now <a href="#/ps4/api?id=audiostream"> audioStream </a> object includes a name property with a unique name to differentiate the tracks in case they have same language.

**Bug fixes:**
- Fixed issue when using the property adsParamsToEncode. When a value in the ad URL parameters was duplicated the ad URL was cut off.

Date: July 5th 2022

#### Version 1.2.5

```
https://nexplayer.nexplayersdk.com/NexHTML5/1.2.5_20211025/nexplayer.js
```

**Bug fixes:**
- Subtitles tracks were not being notified correctly when they were detected. Now, it is only necessary to listen to <a href="#/ps4/api?id=player-events">"newsubtitlesdataloaded"</a>  event to be notified when a new subtitle is loaded.

Date: October 25th 2021

#### Version 1.2.4

**New features:**
- Implemented garbage collection for thumbnails in order to get rid of out of memory errors. Chunks that are out of the thumbnails loading range are removed from the loaded chunks array.

Date: September 23rd 2021

#### Version 1.2.3

**New features:**
- Added property "adsParamsToEncode" that must provide an Array of strings specifying the parameters in the ad URL to be encoded. For example: ["video_url_to_fetch"]
- Added new methods in order to fetch properties status (more info <a href="#/ps4/api?id=getters-2">here</a>):

    * **getCurrentContentType()**: string → returns the the type of the current asset (“Ad”, “Main content” or “None”).
    * **getCurrentTime()**: number → returns the current time of the video.
    * **getPlaybackRate()**: number → returns the playback rate/speed of the video.
    * **getProtocol()**: NexProtocol  → returns the protocol of the stream used:
    * **getVersion()**: string → returns the version of the SDK.
    * **isCurrentAssetAd()**: boolean → indicates whether the current asset playing is an ad or not;
    * **isCurrentAssetMuted()**: boolean → returns whether the ad or the main content is muted or not.

- Added a new event, “bufferType”. this new event will be fired when a buffering event occurs and it specifies what type of buffering occurred ("Connection", "Seek", "Initial", "Background"). More info about events <a href="#/ps4/api?id=playerevents">here</a>.

**Bug fixes:**
- Fixed non-resolving promises which lead to out of memory errors when fetching thumbnails

Date: August 10th 2021

#### Version 1.2.2

**Bug fixes:**
  - Renamed Frame object "canvas" property to "thumbnail".
  - Fixed permanent pending promise when fetching thumbnails that lead to "undefined" resolutions.

Date: July 30th 2021

#### Version 1.2.1

**Bug fixes:**
  - Fixed thumbails width and height properties as they were swapped.

Date: July 29th 2021

#### Version 1.2.0

New features:
  - Added SSAI support for PS4. It can be used through the property 'ssaiMediaTailor'.

    Property:
    * ssaiMediaTailor:
    {
      baseURL: string, //Base URL for Video and Ads
      playbackURL: string, //Video URL to be attached to the baseURL
      adsParams:
      {
        "param1": string, //Ad URL to be attached to the baseURL
      }
    }

  - Thumbnail enhancements. The method getThumbnailAt(time) now returns a promise instead of a
  thumbnail.

    * getThumbnailAt(time) // returns a Promise awaiting the corresponding thumbnail in a specific
    time value

Date: July 23rd 2021

#### Version 1.1.9

**New features:**
  - Added New Relic support for PS4. It can be used through the property 'useNewRelicTracker'.
  A tracker library and agent must be included for this feature to work. Ask NexPlayer team for it.
  Custom data methods have also been added:

    Property:
    * useNewRelicTracker: boolean, // true when enabling New Relic, false when not

    Methods:
    * addTrackerData(key: string, value: any)
    * removeTrackerData(key: string, value: any)
  - Added milestone management for trailers and scrubbing.
  A stream will be considered as a trailer when using the following property in the Setup:
    * trailer: boolean, // true when stream should be considered a trailer, false when not
  - 60 seconds in event added. When the video current time is at least 60 seconds, this
  event gets triggered. This just happens once for each player instance. Usage:
    * addEventListener('60secondsin', function)
  - Added PS4 SDK protection using an external app ID.
  - Thumbnail enhancements. Vtts can now reference another Vtt inside them.
  Two new methods for thumbnail retrieval have been added:
    * getThumbnails() // returns the current loaded thubmnails
    * getThumbnailAt(time) // returns the corresponding thumbnail in a specific time value

Date: May 25th 2021

#### Version 1.1.8

**New features**:
  - Setup can be called prior to Unmount in order to reduce the delay when restarting
  the player. The configuration provided in the last Setup call is saved and will be
  used to initialize the player as soon as Unmount ends.
  - CC style has been changed to use text shadows instead of a background colour.
  - Increased log interval when waiting for player to unmount and reduced the time until
  the player considers failure when destroying itself.

Date: April 20th 2021

#### Version 1.1.7

**New features**:
  - UnMount function has changed its return type. Now returns a Promise which is resolved when the player
  is the destroyed completely, as well as the method destroy of the player:

    * destroy(): Promise<any>;
    * export declare var UnMount: (div: HTMLDivElement) => Promise<any>;

  Check the <a href="#/ps4/api?id=unmount">API</a> for more info.

**Bug fixes:**
  - Seeking becomes broken after we destroy the player while 'seeking' previous content.
  - No cc on live streams for PS4.
  - Overlapping captions are shown multiple times when using WebVTT subtitles on VOD.

Date: March 30th 2021

#### Version 1.1.6

**New features:**
  - New player event "newsubtitlesdataloaded". It is fired when new text track are detected. Currently, embedded CC text track
  is detected later so this event can be fired several times. You should use this event for retrieving the current text tracks of the stream.
  - Added "stalled" event. It is fired when no more data is buffered and the player can't continue the playback.

**Bug fixes:**
  - Fixed issue regarding the delayed CC on VoD content.
  - Embedded CC cea 608/708 working on live streams.
  - Text missing when using embedded CC cea 608/708.
  - "seeked" event is working again.
  - Player's state "playing" is only reported when it is actually playing.

Date: March 18th 2021

#### Version 1.1.5

  - Added support for static and chunked thumbnails. Include the following property in Nexplayer's SetUp:
    > Static:
        thumbnails:
        {
            canvas: document.getElementById("canvas_id"),
            urlVtt: "url_string",
            urlImg: "url_string",
        }
        * canvas: HTML Canvas element where thumbnails will be displayed on.
        * urlVtt: Thumbnail VTT URL containing each thumbnail's time interval and coordinates.
        * urlImg: Thumbnail sprite URL containing multiple thumbnails stiched together.
    > Chunked:
        thumbnails:
        {
            canvas: document.getElementById("canvas_id"),
            urlVtt: "url_string",
            chunkLimit: 3,
            chunkTotal: 30,
        }
        * canvas: HTML Canvas element where thumbnails will be displayed on.
        * urlVtt: Thumbnail VTT URL containing each thumbnail's time interval and image URL.
        * chunkLimit (optional): Maximum number of thumbnail chunks to load at a time. Default: 1.
        * chunkTotal (optional): Total number of chunks to split the thumbnails' array into. Default: 1.

**Bug fixes:**
  - Improved algorithm that filters the subtitles cues which removes the delay observed
  on the subtitles shown.

Date: March 9th 2021

#### Version 1.1.4

**New features:**
  - Added property "detail" into the events objects for offering backwards compatibility with the legacy SDK.

Date: March 4th 2021

#### Version 1.1.3

**New features:**
  - New events regarding the progression of the video:
    - "videofirstquartile": fired when the video reaches the point 25% of the total duration.
    - "videomidpoint": fired when the video reaches the point 50% of the total duration.
    - "videothirdquartile": fired when the video reaches the point 75% of the total duration.
  - All of these events will contain the property "quartileTime" in the property "_data" of the event received:

```js
    nexplayer.PlayerEvents("videofirstquartile", function (e) {
      console.log(" VIDEO FIRST QUARTILE --------------------", e._data.quartileTime);
    });
```

Date: February 26th 2021

#### Version 1.1.2

- Official release containing all the features and bug fixes from the previous versions.

Date: February 23rd 2021

#### Version 1.1.1

**Bug fixes:**
- Fixed state issue.

Date: February 18th 2021

#### Version 1.1.0

**Bug fixes:**
  - DURATION_CHANGE event is triggered when the duration of the stream
  is retrieved. The event will contain the duration of the video.
  - getCurrentSubtitle() method now returns a number. It represents the index of the
  current activated subtitle, -1 if no subtitle is activated.
  - BUFFERING event is triggered when player changes to buffering state.
  - videometrics object related error shouldn't be appearing. We can't confirm
  as we couldn't reproduce it even once.

**New features:**
  - SEEKING event added. It is triggered when the player starts seeking.
  - SEEKED event added. It is triggered when the player finishes seeking.
  - isSeeking() method. It returns a boolean indicating if the player
  is currently seeking.
  - New volume methods are implemented for the player and the adsManager:
  setVolume(value:number), getVolume():number,
  setMute(mute:boolean) and getMute(): boolean.

Date: February 17th 2021


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