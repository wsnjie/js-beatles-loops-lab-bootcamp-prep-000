// add solution here
function theBeatlesPlay(musicians, instruments){
var band = []
for (var i = 0; i < 4; i++){
    var bandmate = musicians[i]
    var playing = instruments[i]
  band.push(bandmate+"plays"+playing)}
return band
}
