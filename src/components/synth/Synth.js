export default function Synth() {

  const context = new AudioContext();
  context.resume()

  const playingNotes = {
    octave  : 4,
    waveType: 'sine'
  }

  const notes = {
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
    'B' : 7902.13,
    'C+': 8372.02
  }

  const keys = Object.keys(notes).map(note => {

    const key = {
      oscillator: context.createOscillator(),
      gain: context.createGain(),
      note: note
    }

    key.oscillator.connect(key.gain)
    key.gain.connect(context.destination)
    key.gain.gain.value = 0
    key.oscillator.start(0)

    return key
  })
    
  this.play = (note) => {
    let nextOscillatorIndex = keys.findIndex(oscillator => oscillator.note === note)
    keys[nextOscillatorIndex].oscillator.type = playingNotes['waveType']
    keys[nextOscillatorIndex].oscillator.frequency.value = this.getFrequency(note)
    keys[nextOscillatorIndex].gain.gain.value = 1
  }

  this.stop = function(noteToStop) {
    let oscillatorToStopIndex = keys.findIndex(oscillator => oscillator.note === noteToStop)
    keys[oscillatorToStopIndex].gain.gain.value = 0
  }
     
  this.getFrequency = (noteString) => {
    let transposition = playingNotes['octave'] - 8
    let frequency = notes[noteString]
    for ( let i = 0 ; i < Math.abs(transposition) ; i++ ) {
      transposition > 0 ?
      frequency = frequency * 2 :
      frequency = frequency / 2
    }
    const roundedFrequency = +frequency.toFixed(2)
    return roundedFrequency;
  }

  this.changeAttribute = (targetAttribute, targetValue) => {
    playingNotes[targetAttribute] = targetValue
    this.changePlayingNotes()
  }

  this.changePlayingNotes = () => {
    keys.forEach(oscillator => {
      if(oscillator.gain.gain.value > 0) {
        this.play(oscillator.note)
      }
    })
  }

  this.randomNote = () => {
    return Math.random() * 19980 + 20
  }

}
