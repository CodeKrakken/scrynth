'use strict'
import Scrynth from './Scrynth';
let scrynth

describe('scrynth', function() {
  beforeEach(function() {
    scrynth = new Scrynth
  })

  it('can be initialised', function() {
    expect(scrynth).toBeDefined()
  })

  it('has an array for note objects', function() {
    expect(scrynth.notes).toBeDefined()
  })

  it('has an array for each note of the scale', function() {
    expect(Object.keys(scrynth.notes).length).toEqual(12)
  })

  it('can retrieve a frequency by note and octave', function() {
    expect(scrynth.getNote('C8')).toEqual(4186.01)
  })

  it('can calculate the frequency of a C9 according to its knowledge of a C8', function() {
    expect(scrynth.getNote('C9')).toEqual(8372.02)
  })

  it('can calculate the frequency of a B0 according to knowledge of a B8', function() {
    expect(scrynth.getNote('B0')).toEqual(30.87)
  })
})