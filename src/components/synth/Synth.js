export default function Synth() {
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
  
  const context = new AudioContext();
  const playingNotes = {
    'octave' : 4,
    'waveType': 'sine'
  }

  const gain10 = context.createGain()
  const gain15 = context.createGain()
  const gain20 = context.createGain()
  const gain25 = context.createGain()
  const gain30 = context.createGain()
  const gain40 = context.createGain()
  const gain45 = context.createGain()
  const gain50 = context.createGain()
  const gain55 = context.createGain()
  const gain60 = context.createGain()
  const gain65 = context.createGain()
  const gain70 = context.createGain()
  const gain80 = context.createGain()

  let keys = [
    { 
      'oscillator': context.createOscillator(),
      'gain': gain10,
      'note': 'C'
    }, 
    {
      'oscillator': context.createOscillator(),
      'gain': gain15,
      'note': 'C#'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain20,
      'note': 'D'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain25,
      'note': 'D#'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain30,
      'note': 'E'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain40,
      'note': 'F'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain45,
      'note': 'F#'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain50,
      'note': 'G'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain55,
      'note': 'G#'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain60,
      'note': 'A'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain65,
      'note': 'A#'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain70,
      'note': 'B'
    },
    {
      'oscillator': context.createOscillator(),
      'gain': gain80,
      'note': 'C+'
    }
  ]

  keys.forEach(key => {
    key.oscillator.connect(key.gain)
    key.gain.connect(context.destination)
    key.gain.gain.value = 0
  })
  
  // gain10.gain.value = 0
  // gain15.gain.value = 0
  // gain20.gain.value = 0
  // gain25.gain.value = 0
  // gain30.gain.value = 0
  // gain40.gain.value = 0
  // gain45.gain.value = 0
  // gain50.gain.value = 0
  // gain55.gain.value = 0
  // gain60.gain.value = 0
  // gain65.gain.value = 0
  // gain70.gain.value = 0
  // gain80.gain.value = 0

  keys.forEach(key => {
    key.oscillator.start(0)
  })

  this.play = function(note) {
    context.resume()
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