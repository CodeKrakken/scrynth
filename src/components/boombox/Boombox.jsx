import React from 'react'

function Boombox() {

  return (
    <div>
      <div id="boombox">
        <div class="boombox-handle"></div>
        <div class="boombox-body">
          <section class="master-controls">
            <input type="range" id="volume" class="control-volume" min="0" max="2" value="1" list="gain-vals" step="0.01" data-action="volume" />
            <datalist id="gain-vals">
              <option value="0" label="min" />
              <option value="2" label="max" />
            </datalist>
            <label for="volume">VOL</label>
            <input type="range" id="panner" class="control-panner" list="pan-vals" min="-1" max="1" value="0" step="0.01" data-action="panner" />
            <datalist id="pan-vals">
              <option value="-1" label="left" />
              <option value="1" label="right" />
            </datalist>
            <label for="panner">PAN</label>
            <button class="control-power" role="switch" aria-checked="false" data-power="on">
              <span>On/Off</span>
            </button>
          </section>
          <section class="tape">
            <audio src="outfoxing.mp3" type="audio/mpeg" crossorigin="anonymous" ></audio>
            <button data-playing="false" onClick={play()} class="tape-controls-play" role="switch" aria-checked="false">
              <span>Play/Pause</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  )

  // const playButton = document.querySelector('.tape-controls-play');

//   // play pause audio
  function play() {
    if(!audioCtx) {
      init();
    }

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (this.dataset.playing === 'false') {
      audioElement.play();
      this.dataset.playing = 'true';
    // if track is playing pause it
    } else if (this.dataset.playing === 'true') {
      audioElement.pause();
      this.dataset.playing = 'false';
    }

    let state = this.getAttribute('aria-checked') === "true" ? true : false;
    this.setAttribute( 'aria-checked', state ? "false" : "true" );

  

  // if track ends
    // audioElement.addEventListener('ended', () => {
    //   playButton.dataset.playing = 'false';
    //   playButton.setAttribute( "aria-checked", "false" );
    // }, false);

    function init() {

      console.clear();

      // instigate our audio context

      // for cross browser
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      let audioCtx;

      // load some sound
      const audioElement = document.querySelector('audio');
      let track;

      audioCtx = new AudioContext();
      track = audioCtx.createMediaElementSource(audioElement);

      // volume
      const gainNode = audioCtx.createGain();

      const volumeControl = document.querySelector('[data-action="volume"]');
      volumeControl.addEventListener('input', function() {
        gainNode.gain.value = this.value;
      }, false);

    // panning
      const pannerOptions = { pan: 0 };
      const panner = new StereoPannerNode(audioCtx, pannerOptions);

      const pannerControl = document.querySelector('[data-action="panner"]');
      pannerControl.addEventListener('input', function() {
        panner.pan.value = this.value;
      }, false);

    // connect our graph
      track.connect(gainNode).connect(panner).connect(audioCtx.destination);
    }
// Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons
  }
}

export default Boombox
