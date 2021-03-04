import React from 'react'

function Keyboard({ play, stop }) {
  return (
    <div>

      <button
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        C4
      </button>
      <input type="text" onKeyDown={myFunction} />

    </div>
  )

  function onKeyDown() {
    play()
  }

  function onKeyUp() {
    stop()
  }

  function myFunction(event) {
    var x = event.keyCode;
    if (x === 27) {  // 27 is the ESC key
      alert ("You pressed the Escape key!");
    }
    if (x === 90) {
      alert ('Z')
    }
  }
}

export default Keyboard