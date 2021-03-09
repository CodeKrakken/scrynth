import { Component, useEffect } from 'react'
import React from 'react'

class Synth extends Component {
  state = {
    notes: {
      'C' : 4186.01,
      'C#': 4434.92,
      'D' : 4698.63,
      'D#': 4978.03,
      'E' : 5274.04,
      'F' : 5587.65,
      'F#': 5919.91,
      'G' : 6271.93,
      'G#': 6644.88,
      'A' : 7040.00,
      'A#': 7458.62,
      'B' : 7902.13
    },
    
  }

  // useEffect(() => {
  //   if(playing changes) {
  //     oh who cares
  //   }
  // }, [playing]);
  
  getNote = (noteString) => {
    let noteArray = noteString.split('')
    let note = noteArray[0]
    let octave = parseInt(noteArray[1], 10);
    let transposition = octave - 8
    let frequency = this.state.notes[note]
    console.log(Math.abs(transposition))
    for ( let i = 0 ; i < Math.abs(transposition) ; i++ ) {
      transposition > 0 ?
      frequency = frequency * 2 :
      frequency = frequency / 2
    }
    const roundedFrequency = +frequency.toFixed(2)
    return roundedFrequency;
  }

  render = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator1 = context.createOscillator();
    const gain = context.createGain()
    let playing = this.props.playing
    oscillator1.connect(gain);
    gain.connect(context.destination);
    playing ? gain.gain.value = 1 : gain.gain.value = 0
    console.log(playing)
    oscillator1.start(0);
    return (
      <div>
        SYNTH
      </div>
    ) 
  }
}

export default Synth