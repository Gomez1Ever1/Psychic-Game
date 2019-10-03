var fullWords = ["Kratos", "Atreus", "Mimir", "Baldur", "Freya", "Brok", "Faye"];
var wins = 0;
var targetDiv =
    document.getElementById("answer");
var gameOver = true;
var gameWord = [];
function getWord() {
    let randNum =
        Math.floor(Math.random() * fullWord.length);
    Word =
        fullWord[randNum];
    gameOver = false;
    document.getElementById("startUpTxt").innerHTML = "display:none";
    gameWord = Word.toLowerCase().split("");
    for (let i = 0; i < Word.length; i++) {
        gameWord.push("-");
    }
}
function guesS() {
    var letTer = document.getElementById("#inPut").value;
    if (Word.includes(letTer)) {
        //for{let i=0; i<word.length;i++}
    }
    else { //-1 attempts
    }


}
if (Word.length === answer.length) {
    gameOver = true;
}
else {
    gameOver = false;
};
    //onkeyup to start the game here??
};








