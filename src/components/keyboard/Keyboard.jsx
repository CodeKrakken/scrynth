import React, { useEffect } from "react";
import Synth from '../synth/Synth';
const synth = new Synth()

function Keyboard() {

  useEffect(() => {
    function handleKeyDown(e) {
      synth.play(e.keyCode)
      console.log(e.keyCode)
    }

    function handleKeyUp(e) {
      synth.stop(e)
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, []);

  return <div>KEYBOARD</div>;

}

export default Keyboard
