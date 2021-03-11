import React from "react";
import Synth from '../synth/Synth';
const synth = new Synth()

function Keyboard() {
  const noteCodes = {
    90: 'C',
    83: 'C#',
    88: 'D',
    68: 'D#',
    67: 'E',
    86: 'F',
    71: 'F#',
    66: 'G',
    72: 'G#',
    78: 'A',
    74: 'A#',
    77: 'B',
    188: 'C+'
  }

  const octaveCodes = {
    192: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
    48: 10
  }

  function handleKeyDown(e) {
    console.log(e)
    if (e.keyCode in noteCodes) {
      synth.play(noteCodes[e.keyCode])
    }

    if (e.keyCode in octaveCodes) {
      synth.octave(octaveCodes[e.keyCode])
    }
  }

  function handleKeyUp() {
    synth.stop()
  }

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  return <div>KEYBOARD</div>;

}

export default Keyboard
