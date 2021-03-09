import './App.css';
import Keyboard from './components/keyboard/Keyboard'
import Synth from './components/synth/Synth'

function App() {
  let playing = false
  
  return (
    <div>
      <Keyboard play={play} stop={stop} />
      <Synth playing={playing} />
    </div>
  );

  function play() {
    // gain.gain.value = 1
    playing = true
    console.log(playing)
  }

  function stop() {
    // gain.gain.value = 0
    playing = false
    console.log(playing)
  }
}

export default App;
