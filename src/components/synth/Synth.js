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
    'B' : 7902.13,
    'C+': 8372.02
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  let octave = 4
  const oscillator1 = context.createOscillator();
  const oscillator2 = context.createOscillator();
  const gain1 = context.createGain()
  const gain2 = context.createGain()
  oscillator1.connect(gain1);
  oscillator2.connect(gain2);
  gain1.connect(context.destination);
  gain2.connect(context.destination);
  gain1.gain.value = 0
  gain2.gain.value = 0
  const oscillators = [
    { 'oscillator': oscillator1,
      'gain': gain1,
      'note': undefined
    }, {

  }
    [oscillator2, gain2]
  ]
  oscillator1.start(0);
  oscillator2.start(0);

  this.play = function(note) {
    let nextOscillator = oscillators.find(oscillator => oscillator.length === 2)
    if (nextOscillator !== undefined) {
      nextOscillator[0].frequency.value = this.getFrequency(note)
      nextOscillator.push(note)
      nextOscillator[1].gain.value = 1
    }
  }

  this.stop = function(noteToStop) {
    let indexToStop = oscillators.findIndex((oscillator) => oscillator[2] === noteToStop)
    console.log(indexToStop)
    oscillators[indexToStop][1].gain.value = 0
    oscillators[indexToStop].pop()
  }
     
  this.getFrequency = (noteString) => {
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
    oscillators.forEach(oscillator => {
      if(oscillator[1].gain.value === 1) {
        this.play(oscillator[2])
      }
    })
  }

  this.randomNote = () => {
    return Math.random() * 19980 + 20
  }

}

export default Synth