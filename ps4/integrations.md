# Integrations 

## New Relic

This document describes the integration of a New Relic tracker and NexPlayer. 

### Quick start

The two following scripts must be included before NexPlayer does:

```js
    <!-- newrelic browser agent. REMEMBER TO REPLACE THIS SCRIPT WITH YOUR OWN BROWSER AGENT -->
    <script type="text/javascript" src="./agent.js"></script>

    <!-- newrelic tracker. Ask NexPlayer team for the library -->
    <script type="text/javascript" src="./newrelic-video-nexplayer.min.js"></script>
```

In order to make New Relic work the property 'useNewRelicTracker' must be set to true in the Setup:

```js
    var player = null;
    var video = null;

    // Pass this function to the Setup method as below
    var callBackWithPlayers = function (nexplayerInstance, videoElement) {

        // Retrieve the player and video instances
        player = nexplayerInstance;
        video = videoElement;
    };

    // Create and initialize the player
    nexplayer.Setup({
        key: 'YOUR LICENSE KEY', 
        div: document.getElementById('player'),     
        callbacksForPlayer: callBackWithPlayers,
        src: 'YOUR STREAM URL'
        useNewRelicTracker: true,
        // ...
    });
```

Adding these two scripts and the property is all it takes for New Relic to work along NexPlayer. Note that the "agent" script is a customer's own file while "newrelic-video-nexplayer.min.js" is provided by our team and must be requested in order to make use of it. No extra steps are needed in order to set the communication between the player and the tracker as that is already managed via the latter script.

### Methods

Custom data to be tracked can be added and removed using the following methods:
 - [addTrackerData()](ps5/api.md?id=addtrackerdata)
 - [removeTrackerData()](ps5/api.md?id#removetrackerdata)