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
  
  return (
    <div>
      scrynth
      <Keyboard play={play} stop={stop} />
    </div>
  );

  function play() {
    gain.gain.value = 1
  }

  function stop() {
    gain.gain.value = 0
  }
}

export default App;
