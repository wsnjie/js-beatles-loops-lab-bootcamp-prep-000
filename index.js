// add solution here
function theBeatlesPlay(musicians, instruments){
var band = []
for (var i = 0; i < 4; i++){
    var bandmate = musicians[i]
    var playing = instruments[i]
  band.push(bandmate+" plays "+playing)}
return band
}
function johnLennonFacts(array){
  var i = 4
  while (i > 0) {
i=--i
array[i]=array[i]+"!!!"
  }
  return array
}
