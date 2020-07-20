const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (superbowlObj) => {
  const findWin = superbowlObj.find(year => year.result === "W")
  return !!findWin ? findWin.year : undefined
}