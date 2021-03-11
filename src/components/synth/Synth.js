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

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  const oscillator1 = context.createOscillator();
  const gain = context.createGain()
  let octave = 4
  oscillator1.connect(gain);
  gain.connect(context.destination);
  gain.gain.value = 0
  oscillator1.start(0);

  this.play = function(note) {
    oscillator1.frequency.value = this.getNote(note)
    gain.gain.value = 1
  }

  this.stop = function() {
    gain.gain.value = 0
  }
     
  this.getNote = (noteString) => {
    // let noteArray = noteString.split('')
    // let octave = noteArray.pop()
    // noteString = noteArray.join('')
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

  this.octave = (targetOctave) => {
    octave = targetOctave
  }

  this.randomNote = () => {
    return Math.random() * 19980 + 20
  }

}

export default Synth