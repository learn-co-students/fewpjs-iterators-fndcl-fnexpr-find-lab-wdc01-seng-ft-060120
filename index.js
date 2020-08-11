const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  let result = array.find( obj => obj.result === 'W' )
  return result && result.year
}