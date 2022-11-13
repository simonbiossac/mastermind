
const maxLine = 20;
const nbtrou = 4;
var nbColors = 8;
var sc = 0;
var nbtest = 0;
var multipletestelement = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


var ColorsGenerator = function() {
  var array = ["red","blue","yellow","pink","white","gray","orange","green"];
  shuffleArray(array);
  var longeur = array.length - nbtrou;
  for (var i = 0; i < longeur; i++) {
    var pickElement = array[Math.floor(Math.random() * nbtrou)];
    const index = array.indexOf(pickElement);
    if (index > -1) { // only splice array when item is found
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  return array
}

var ScoreDetection = function(private, currentrow){
    sc = 0;
  for (var i = 0; i < private.length; i++) { // Pour chaque element dans le code Secret [4]
    for (var j = 0; j < currentrow.length; j++) {
    if (private[i] === currentrow[j]) {
        sc +=1
        if (private[i] === currentrow[i]) {
          sc +=9;
        }
      }
    }
  }
  return sc
}


var Game = function(){ //DECLARE LA FONCTION
  var Secret = ColorsGenerator()
  while (sc !== 40) { //Tant que le score n'est pas égale à 40 on continue
    actualRow = ColorsGenerator()
    ScoreDetection(Secret,actualRow)
    console.log(ScoreDetection(Secret,actualRow));
    console.log(Secret + '\n' +actualRow);

    nbtest++
    // console.log(sc);
  }
  console.log("GG : la suite est bien " + actualRow +" . Nombre d'essais : "+ nbtest);
  return nbtest
}


Game()
