export default function Synth() {

  const context = new AudioContext();
  context.resume()

  const settings = {
    octave  : 0,
    waveShape: 'sine'
  }

  // const notes = {
  //   'C' : 4186.01,
  //   'C#': 4434.92,
  //   'D' : 4698.63,
  //   'D#': 4978.03,
  //   'E' : 5274.04,
  //   'F' : 5587.65,
  //   'F#': 5919.91,
  //   'G' : 6271.93,
  //   'G#': 6644.88,
  //   'A' : 7040.00,
  //   'A#': 7458.62,
  //   'B' : 7902.13,
  //   'C+': 8372.02
  // }

  const ratio   = 1.05946274243760910195
  let frequency = 16.35
  let notes     = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C+']
  
  const keys = notes.map(((note, i) => {
    if (i) { frequency *= ratio }
    
    const key = {
      oscillator: context.createOscillator(),
      gain: context.createGain(),
      note: note,
      frequency: frequency
    }

    key.oscillator.connect(key.gain)
    key.gain.connect(context.destination)
    key.gain.gain.value = 0
    key.oscillator.start(0)

    return key
  }))
    
  this.play = (note) => {
    const i = keys.findIndex(key => key.note === note)
    keys[i].oscillator.type = settings.waveShape
    keys[i].oscillator.frequency.value = transpose(keys[i].frequency)
    console.log(transpose(keys[i].frequency))
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
     
  const transpose = (frequency) => {

    for ( let i = 0 ; i < settings.octave; i++ ) {
      frequency *= 2
    }
    return +frequency.toFixed(2)
  }

}
