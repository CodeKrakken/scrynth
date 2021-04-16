import React from "react";
import Synth from '../synth/Synth';
import './keyboard.css'

const synth = new Synth()

function Keyboard() {
  const noteCodes = {
    90: 'C', 6: 'C',
    83: 'C#', 1: 'C#',
    88: 'D', 7: 'D',
    68: 'D#', 2: 'D#',
    67: 'E', 8: 'E',
    86: 'F', 9: 'F',
    71: 'F#', 5: 'F#',
    66: 'G', 11: 'G',
    72: 'G#', 4: 'G#',
    78: 'A', 45: 'A',
    74: 'A#', 38: 'A#',
    77: 'B', 46: 'B',
    188: 'C+', 43: 'C+'
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

  const waveCodes = { 81: 'sine',
                      87: 'triangle',
                      69: 'square',
                      82: 'sawtooth' }
  
  let currentNoteCodes = []

  function handleKeyDown(e) {
    if (e.keyCode in noteCodes) {
      currentNoteCodes.push(e.keyCode)
      synth.play(noteCodes[e.keyCode])
      // document.getElementById(e.keyCode)
    }

    if (e.keyCode in octaveCodes) {
      synth.changeAttribute('octave', octaveCodes[e.keyCode])
    }

    if (e.keyCode in waveCodes) {
      synth.changeAttribute('waveType', waveCodes[e.keyCode])
    }
  }

  function handleKeyUp(e) {
    if (currentNoteCodes.includes(e.keyCode)) {
      synth.stop(noteCodes[e.keyCode])
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  return (
    <div id="keyboard">
      <div className="keyboard-row">
        <span className="circle-outer">
          <span className="circle-inner">
            `
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            1
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            2
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            3
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            4
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            5
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            6
          </span>
        </span>        
        <span className="circle-outer">
          <span className="circle-inner">
            7
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            8
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            9
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            0
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
      </div>
      <div className="keyboard-row">
        <span className="circle-outer">
          <span className="circle-inner">
            Q
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            W
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            E
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            R
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
      </div>
      <div className="keyboard-row">
        <span className="circle-outer">
          <span className="circle-inner">
            S
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            D
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            G
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            H
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            J
          </span>
        </span>
        <span className="circle-outer invisible">
          <span className="circle-inner">
          </span>
        </span>
      </div>
      <div className="keyboard-row">
        <span className="circle-outer">
          <span className="circle-inner">
            Z
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            X
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            C
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            V
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            B
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            N
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            M
          </span>
        </span>
        <span className="circle-outer">
          <span className="circle-inner">
            ,
          </span>
        </span>
      </div>
    </div>
  )
}

export default Keyboard
