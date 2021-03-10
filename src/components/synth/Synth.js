function Synth() {
  this.notes = {
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
  }

  this.keyCodes = {
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

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  const oscillator1 = context.createOscillator();
  const gain = context.createGain()
  oscillator1.connect(gain);
  gain.connect(context.destination);
  gain.gain.value = 0
  oscillator1.start(0);

  this.play = function(keyCode) {
    if (keyCode in this.keyCodes) {
      oscillator1.frequency.value = this.getNote(this.keyCodes[keyCode])
      gain.gain.value = 1
    }
  }

  this.stop = function() {
    gain.gain.value = 0
  }
     
  this.getNote = (noteString) => {
    let noteArray = noteString.split('')
    let octave = noteArray.pop()
    noteString = noteArray.join('')
    console.log(noteString)
    let transposition = octave - 8
    let frequency = this.notes[noteString]
    for ( let i = 0 ; i < Math.abs(transposition) ; i++ ) {
      transposition > 0 ?
      frequency = frequency * 2 :
      frequency = frequency / 2
    }
    const roundedFrequency = +frequency.toFixed(2)
    return roundedFrequency;
  }

  this.randomNote = () => {
    return Math.random() * 19980 + 20
  }

}

export default Synth