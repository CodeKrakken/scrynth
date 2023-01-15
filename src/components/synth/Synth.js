export default function Synth() {

  const context = new AudioContext();
  context.resume()

  const settings = {
    octave  : 4,
    waveShape: 'sine'
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
      note: note,
      frequency: notes[note]
    }

    key.oscillator.connect(key.gain)
    key.gain.connect(context.destination)
    key.gain.gain.value = 0
    key.oscillator.start(0)

    return key
  })
    
  this.play = (note) => {
    const i = keys.findIndex(key => key.note === note)
    keys[i].oscillator.type = settings.waveShape
    keys[i].oscillator.frequency.value = calculateFrequency(keys[i].frequency)
    keys[i].gain.gain.value = 1
  }

  this.stop = (note) => {
    const i = keys.findIndex(key => key.note === note)
    keys[i].gain.gain.value = 0
  }

  this.changeAttribute = (a, v) => {

    settings[a] = v

    keys.forEach(key => {
      if(key.gain.gain.value > 0) {
        this.play(key.note)
      }
    })
  }
     
  const calculateFrequency = (frequency) => {
    let transposition = settings.octave - 8

    for ( let i = 0 ; i < Math.abs(transposition) ; i++ ) {
      transposition > 0 ?
      frequency = frequency * 2 :
      frequency = frequency / 2
    }
    
    return +frequency.toFixed(2)
  }

}
