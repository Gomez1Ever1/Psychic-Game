var fullWords = ["Kratos", "Atreus", "Mimir", "Baldur", "Freya", "Brok", "Faye"];
var wins = 0;
var targetDiv = document.getElementById("answer");
var gameOver = true;
var blankWord = []
function gameStart() {
    if (gameOver = true) {
        var randNum = Math.floor(Math.random() * fullWord.length);
        Word = fullWord[randNum];
        gameOver = false;
        document.getElementById("startUpTxt").textContent = "";
        return Word;
    }
    else {
        for (let i = 0; i < Word.length; i++) {
            blankWord.push("_");
            targetDiv.innerHTML(blankWord);
            function() {
                var x = document.getElementById("#inPut");
                //function that uses.value to turn the value of any input 
                //into part of a variable. will be used to verify next conditional.
                x.value
            }
            if (Word.includes(myInput)) {
                //pushes the content of the input to the targetDiv
            }
            else { //-1 attempts

            }
            if (Word.length === answer.length) {
                gameOver = true;
            }
            else {
                gameOver = false;
            };
            //onkeyup to start the game here??
        }
    }
};








