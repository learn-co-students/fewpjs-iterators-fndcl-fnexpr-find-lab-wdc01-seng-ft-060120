const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let yearObject = array.find(function(e) {return e.result === "W"})
  if (yearObject){
  return yearObject.year}
  else{return undefined}
}