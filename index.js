function superbowlWin(array) {
  let result = array.find( result => result.result === 'W')
  return !!result ? result.year : undefined
}