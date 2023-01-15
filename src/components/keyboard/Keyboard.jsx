import React from "react";
import Synth from '../synth/Synth';
import './keyboard.css'

const synth = new Synth()

export default function Keyboard() {

  const keycodes = {
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
      69: 'square',
      82: 'sawtooth' 
    }
  }
  
  const playingNotes = []

  function handleNoteStart(e) {
    
    if (e.keyCode in keycodes.notes) {
      playingNotes.push(e.keyCode)
      synth.play(keycodes.notes[e.keyCode])
    }

    if (keycodes.octaves.includes(e.keyCode)) {
      synth.changeAttribute('octave', keycodes.octaves.indexOf(e.keyCode))
    }

    if (e.keyCode in keycodes.waveShapes) {
      synth.changeAttribute('waveType', keycodes.waveShapes[e.keyCode])
    }
  }

  function handleNoteEnd(e) {
    if (playingNotes.includes(e.keyCode)) {
      synth.stop(keycodes.notes[e.keyCode])
    }
  }

  document.addEventListener('keydown', handleNoteStart);
  document.addEventListener('keyup', handleNoteEnd);
  document.addEventListener('touchstart', handleNoteStart);
  document.addEventListener('touchend', handleNoteEnd)

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
