
const ratio = 1.0594630943592953
function pitchShift(freq, steps) {
  let thisRatio = ratio
  for (let i = 0; i < steps; i++) {
    thisRatio = thisRatio * ratio
    console.log(thisRatio)
  }
  console.log(freq * thisRatio)
}
pitchShift(440, 12)