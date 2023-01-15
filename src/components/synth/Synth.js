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
  const oscillator10 = context.createOscillator();
  const oscillator15 = context.createOscillator();
  const oscillator20 = context.createOscillator();
  const oscillator25 = context.createOscillator();
  const oscillator30 = context.createOscillator();
  const oscillator40 = context.createOscillator();
  const oscillator45 = context.createOscillator();
  const oscillator50 = context.createOscillator();
  const oscillator55 = context.createOscillator();
  const oscillator60 = context.createOscillator();
  const oscillator65 = context.createOscillator();
  const oscillator70 = context.createOscillator();
  const oscillator80 = context.createOscillator();
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


  oscillator10.connect(gain10);
  oscillator15.connect(gain15);
  oscillator20.connect(gain20);
  oscillator25.connect(gain25);
  oscillator30.connect(gain30);
  oscillator40.connect(gain40);
  oscillator45.connect(gain45);
  oscillator50.connect(gain50);
  oscillator55.connect(gain55);
  oscillator60.connect(gain60);
  oscillator65.connect(gain65);
  oscillator70.connect(gain70);
  oscillator80.connect(gain80);
  gain10.connect(context.destination);
  gain15.connect(context.destination);
  gain20.connect(context.destination);
  gain25.connect(context.destination);
  gain30.connect(context.destination);
  gain40.connect(context.destination);
  gain45.connect(context.destination);
  gain50.connect(context.destination);
  gain55.connect(context.destination);
  gain60.connect(context.destination);
  gain65.connect(context.destination);
  gain70.connect(context.destination);
  gain80.connect(context.destination);
  gain10.gain.value = 0
  gain15.gain.value = 0
  gain20.gain.value = 0
  gain25.gain.value = 0
  gain30.gain.value = 0
  gain40.gain.value = 0
  gain45.gain.value = 0
  gain50.gain.value = 0
  gain55.gain.value = 0
  gain60.gain.value = 0
  gain65.gain.value = 0
  gain70.gain.value = 0
  gain80.gain.value = 0

  let keys = [
    { 'oscillator': oscillator10,
      'gain': gain10,
      'note': 'C'
    }, 
    {
      'oscillator': oscillator15,
      'gain': gain15,
      'note': 'C#'
    },
    {
      'oscillator': oscillator20,
      'gain': gain20,
      'note': 'D'
    },
    {
      'oscillator': oscillator25,
      'gain': gain25,
      'note': 'D#'
    },
    {
      'oscillator': oscillator30,
      'gain': gain30,
      'note': 'E'
    },
    {
      'oscillator': oscillator40,
      'gain': gain40,
      'note': 'F'
    },
    {
      'oscillator': oscillator45,
      'gain': gain45,
      'note': 'F#'
    },
    {
      'oscillator': oscillator50,
      'gain': gain50,
      'note': 'G'
    },
    {
      'oscillator': oscillator55,
      'gain': gain55,
      'note': 'G#'
    },
    {
      'oscillator': oscillator60,
      'gain': gain60,
      'note': 'A'
    },
    {
      'oscillator': oscillator65,
      'gain': gain65,
      'note': 'A#'
    },
    {
      'oscillator': oscillator70,
      'gain': gain70,
      'note': 'B'
    },
    {
      'oscillator': oscillator80,
      'gain': gain80,
      'note': 'C+'
    }
  ]

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