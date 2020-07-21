const testVar = {}

function isW(x) { 
  return x.result === 'W';
}

function superbowlWin(array) {
  if(array.find(x => x.result === 'W') === undefined){
    return undefined;
  } else{
  let x = array.find(x => x.result === 'W');
  return x["year"];   
  } 
}
// mdn Array.find;