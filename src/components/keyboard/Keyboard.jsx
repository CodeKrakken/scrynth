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
    </div>
  )

  function onKeyDown() {
    play()
  }

  function onKeyUp() {
    stop()
  }
}

export default Keyboard