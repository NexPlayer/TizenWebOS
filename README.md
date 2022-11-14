<a id="introduction-top"> </a>

<img width="30%" text-align="center" src="./assets/logo.png" alt="logo of docsify-awesome repository" >

# NexPlayer SDK for Tizen, WebOS, Hisense, Xbox and PlayStation

NexPlayer™ provides a media player for Smart TVs operating on Tizen, WebOS and Hisense and for consoles such as Xbox, PlayStation 4 and PlayStation 5. It includes support for HLS, DASH, and progressive download.

The default UI is easily customizable to fit the user's personal preferences (e.g. icons, colors, etc).

<section class="abstractTable">
  <div class="gridColumn">
    <div class="titleCell">VIDEO DELIVERY FORMATS</div>
    <div class="contentCell">
      <div>HLS </div>
      <div>DASH </div>
    </div>
    <div class="titleCell">AD INSERTION</div>
    <div class="contentCell">
      <div>VAST, VPAID, VMAP, Playlist </div>
      <div>Pre-Roll, Mid-Roll, Post-Roll </div>
      <div>Integrated Client-Side Ad Insertion </div>
      <div><p>IMA SDK for Client-Side Ad Insertion<sup><a href="#/README?id=bn2" id="ref2">1</a></sup></p> </div>
      <div><p>PAL SDK for Client-Side Ad Insertion<sup><a href="#/README?id=bn2" id="ref2">1</a></sup></p> </div>
      <div>Server-Side Ad Insertion </div>
      <div><p>IMA DAI SDK for Server-Side Ad Insertion<sup><a href="#/README?id=bn2" id="ref2">1</a></sup></p> </div>
    </div>
    <div class="titleCell">METADATA</div>
    <div class="contentCell">
      <div>ID3 Tags</div>
    </div>
  </div>
  <div class="gridColumn">
    <div class="titleCell">FEATURES</div>
    <div class="contentCell">
      <div>Integrated UI </div>
      <div>Multiple audio/video tracks </div>
      <div>ABR and UHD video (4K and 8K) </div>
      <div>Trick Play </div>
      <div>Time-shifting </div>
      <div>DVR Live Streaming </div>
      <div>Picture-in-picture </div>
      <div>Fully Customizable UI </div>
    </div>
  </div>
  <div class="gridColumn">
    <div class="titleCell">PLAYBACK</div>
    <div class="contentCell">
      <div>VOD </div>
      <div>Live </div>
    </div>
    <div class="titleCell">SUBTITLES & CC</div>
    <div class="contentCell">
      <div>WebVTT </div>
      <div>SRT </div>
      <div>CEA 608/708 </div>
      <div>TTML </div>
    </div>
    <div class="titleCell">CONTENT PROTECTION</div>
    <div class="contentCell">
      <div>Widevine DRM </div>
      <div>PlayReady DRM </div>
      <div>Custom HTTP headers</div>
      <div>CENC </div>
    </div>
  </div>
</section>

<blockquote id="bn2"> <sup><a href="#/README?id=ref2">1</a></sup> These libraries are not supported in Xbox </blockquote>

## Platform support

NexPlayer supports several platforms and models:

<table style="display: table">
  <tbody>
    <tr>
      <th class="titleBlocks" scope="row">Platform </th>
      <th class="titleBlocks" scope="row">Minimum model and year</th>
      <th class="titleBlocks" scope="row">Supported content</th>
    </tr>
    <tr>
      <td  scope="row"><a href="https://developer.samsung.com/smarttv/develop/specifications/tv-model-groups.html">Samsung Tizen</a></td>
      <td  scope="row"><span>Tizen 2.3 (2015)</span> </td>
      <td  scope="row"><span>DASH/HLS + PlayReady/Widevine</span></td>
    </tr>
    <tr>
       <td  scope="row"> <a href="https://webostv.developer.lge.com/discover/specifications/supported-media-formats/">LG WebOS</a></td>
      <td  scope="row">WebOS 3.0 (2016)</td>
      <td  scope="row">DASH/HLS + PlayReady/Widevine</td>
    </tr>
    <tr>
      <td  scope="row">Hisense</td>
      <td  scope="row"><span><a href="https://nexplayersdk.com/contact/" target=”_blank”>Contact us</a></span></td>
      <td  scope="row"><span>DASH/HLS + PlayReady/Widevine<sup><a href="#/README?id=bn1" id="ref1">1</a></sup></span></td>
    </tr>
    <tr>
      <td  scope="row">PlayStation 4</td>
      <td  scope="row"><span>Original (2013)</span></td>
      <td  scope="row"><span>DASH + PlayReady<sup><a href="#/README?id=bn2" id="ref2">2</a></sup>, HLS Clear</span></td>
    </tr>
    <tr>
      <td  scope="row">PlayStation 5</td>
      <td  scope="row"><span>Standard/Digital (2020)</span></td>
      <td  scope="row"><span>DASH/HLS + PlayReady</span></td>
    </tr>
    <tr>
      <td  scope="row">Xbox One</td>
      <td  scope="row"><span>Original (2013)</span></td>
      <td  scope="row"><span>DASH/HLS + PlayReady</span></td>
    </tr>
    <tr>
      <td  scope="row">Xbox Series S/X</td>
      <td  scope="row"><span>Original (2020)</span></td>
      <td  scope="row"><span>DASH/HLS + PlayReady</span></td>
    </tr>
  </tbody>
</table>
<blockquote id="bn1"> <sup><a href="#/README?id=ref1">1</a></sup> Please, note that each Hisense device has its own restrictions regarding the DRM support. </blockquote>
<blockquote id="bn2"> <sup><a href="#/README?id=ref2">2</a></sup> PS4 only supports security levels up to SL 2000 </blockquote>
