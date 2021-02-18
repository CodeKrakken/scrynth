'use strict'
import Keyboard from './Keyboard';
let keyboard

describe('keyboard', function() {
  beforeEach(function() {
    keyboard = new Keyboard
  })

  it('can be initialised', function() {
    expect(keyboard).toBeDefined()
  })

  it('has an array for note objects', function() {
    expect(keyboard.state.notes).toBeDefined()
  })

  it('has an array for each note of the scale', function() {
    expect(Object.keys(keyboard.state.notes).length).toEqual(12)
  })

  it('can retrieve a frequency by note and octave', function() {
    expect(keyboard.getNote('C8')).toEqual(4186.01)
  })

  it('can calculate the frequency of a C9 according to its knowledge of a C8', function() {
    expect(keyboard.getNote('C9')).toEqual(8372.02)
  })

  it('can calculate the frequency of a B0 according to knowledge of a B8', function() {
    expect(keyboard.getNote('B0')).toEqual(30.87)
  })
})