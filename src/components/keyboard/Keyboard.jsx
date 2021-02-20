import React from 'react'

function Keyboard({ playNote }) {
  return (
    <div>
      <button
        onClick={handleClick}>C4</button>
    </div>
  )

  function handleClick() {
    playNote()
  }
}

export default Keyboard