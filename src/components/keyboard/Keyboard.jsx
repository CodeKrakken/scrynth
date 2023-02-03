import React from "react";
import Synth from '../synth/Synth';
import './keyboard.css'

const synth = new Synth()

export default function Keyboard() {

  const keyCodes = {
    notes   : {
      90 : 'C' ,  6: 'C' ,  83 : 'C#',  1: 'C#',
      88 : 'D' ,  7: 'D' ,  68 : 'D#',  2: 'D#',
      67 : 'E' ,  8: 'E' ,  86 : 'F' ,  9: 'F' ,
      71 : 'F#',  5: 'F#',  66 : 'G' , 11: 'G' ,
      72 : 'G#',  4: 'G#',  78 : 'A' , 45: 'A' ,
      74 : 'A#', 38: 'A#',  77 : 'B' , 46: 'B' ,
     188 : 'C+', 43: 'C+'    
    },
    octaves : [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48],
    waveShapes   :  { 
      81: 'sine',
      87: 'triangle',
      69: 'sawtooth', 
      82: 'square'
    }
  }
  
  let playingNotes = []

  function handleKeyDown(e) {
    
    if (e.keyCode in keyCodes.notes && !playingNotes.includes(e.keyCode)) {
      playingNotes.push(e.keyCode)
      synth.play(keyCodes.notes[e.keyCode], playingNotes.length)
    }

    if (keyCodes.octaves.includes(e.keyCode)) {
      synth.changeAttribute('octave', keyCodes.octaves.indexOf(e.keyCode))
    }

    if (e.keyCode in keyCodes.waveShapes) {
      synth.changeAttribute('waveType', keyCodes.waveShapes[e.keyCode])
    }
  }

  function handleKeyUp(e) {
    if (playingNotes.includes(e.keyCode)) {
      playingNotes = playingNotes.filter(note => note !== e.keyCode)
      synth.stop(keyCodes.notes[e.keyCode])
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  document.addEventListener('touchstart', handleKeyDown);
  document.addEventListener('touchend', handleKeyUp)

  const keys = [
    ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, '0', ''],
    ['Q', 'W', 'E', 'R', '', '', '', '', ''],
    ['S', 'D', '', 'G', 'H', 'J', ''],
    ['Z','X','C','V','B','N','M', ',']
  ] 

  return (
    <div id="keyboard">
      {keys.map(row => 
        <div className="keyboard-row">
          {
            row.map((key, i) => 
              <span className={`circle-outer${!key ? ' invisible' : ''}`}>
                <span className="circle-inner">
                  {key}
                </span>
              </span>
            )
          }
        </div>
      )}
    </div>
  )
}
