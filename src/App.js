import './App.css';
import Keyboard from './components/keyboard/Keyboard'

function App() {

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  const oscillator1 = context.createOscillator();
  const gain = context.createGain()
  oscillator1.connect(gain);
  gain.connect(context.destination);
  gain.gain.value = 0
  oscillator1.start(0);
  let playing = false
  
  return (
    <div>
      scrynth
      <Keyboard playNote={playNote} />
    </div>
  );

  function playNote() {
    playing ? gain.gain.value = 0 : gain.gain.value = 1
    playing = !playing
  }
}

export default App;
