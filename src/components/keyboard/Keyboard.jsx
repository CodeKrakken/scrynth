import React, { useEffect } from "react";

function Keyboard({ play, stop }) {

  useEffect(() => {
    function handleKeyDown(e) {
      play(e)
    }

    function handleKeyUp(e) {
      stop(e)
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [play, stop]);

  return <div>KEYBOARD</div>;

}

export default Keyboard
