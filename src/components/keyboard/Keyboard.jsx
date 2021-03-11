import React from "react";
import Synth from '../synth/Synth';
const synth = new Synth()

function Keyboard() {
  const keyCodes = {
    90: 'C4',
    83: 'C#4',
    88: 'D4',
    68: 'D#4',
    67: 'E4',
    86: 'F4',
    71: 'F#4',
    66: 'G4',
    72: 'G#4',
    78: 'A4',
    74: 'A#4',
    77: 'B4',
    188: 'C5'
  }

  function handleKeyDown(e) {
    if (e.keyCode in keyCodes) {
      synth.play(keyCodes[e.keyCode])
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
