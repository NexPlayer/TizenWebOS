# Timed Metadata

NexPlayer supports timed metadata for HLS and DASH content. The information is available in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/TextTrack" target="_blank">TextTrack </a> array of the video element.

The following code is a sample to retrieve the metadata from the streams. It logs the active cues from the TexTrack corrsponding to the metadata.

```js
var callBackWithPlayers = function (nexplayerInstance, videoElement) {
  videoElement.addEventListener('loadedmetadata', function(event) {
    if (videoElement.textTracks){
      showTimedMetadata(videoElement);
    }
  });
};

nexplayer.Setup({
  key: 'REPLACE THIS WITH YOUR CUSTOMER KEY',
  div: document.getElementById('player'),
  src: 'VIDEO URL',
  callbacksForPlayer: callBackWithPlayers
});

var showTimedMetadata = function(videoElement) { 
  videoElement.textTracks.addEventListener("addtrack", function (e) {
    console.log("Add track", e.track);
    for (let i = 0; i < e.currentTarget.length; i ++) {  
      if (e.currentTarget[i].kind === "metadata") {
        // If the new TextTrack's kind is metadata change its mode to "hidden".
        // Otherwise, the mode is set to "disabled" and the "cuechange" events won't be received.
          e.currentTarget[i].mode = "hidden";
          e.currentTarget[i].addEventListener("cuechange", function (cueChangeEvent) {
            let activeCues = cueChangeEvent.currentTarget.activeCues;
          });
        }
      }
  });	
};
```

### ID3 Tags

NexPlayer supports timed metadata for HLS and DASH content. The information is available in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/TextTrack" target="_blank">TextTrack </a> array of the video element.

#### ID3

ID3 is transported through .ts segments, usually in HLS.

### EMSG

This type of metadata is contained in fMP4 segments (DASH & HLS). You can consult more information <a href="https://aomediacodec.github.io/id3-emsg/" target="_blank">here</a>.
