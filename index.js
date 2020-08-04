
function superbowlWin(record) {
let object = record.find(function(r) { return r.result === "W"})
if (object){
return object.year
}

}




