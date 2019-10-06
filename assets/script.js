
var fullWords = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var gameOver = true;
var guessesLeft = 10;
var letTer;
var myGuesses = [];
var spanWs2 = document.getElementById("ws2");
var spanLoss = document.getElementById("loss");
var spanGuess = document.getElementById("gleft");
var spanList = document.getElementById("myguess");
gameStart();
document.addEventListener("keyup", matchLetter);
creatingElement(wins, spanWs2);
creatingElement(guessesLeft, spanGuess)
creatingElement(losses, spanLoss);
creatingElement(myGuesses, spanList)
// Function to build DOM Elements
function creatingElement(variable, content) {
    content.textContent = variable;
}
function getWord() {
    let randNum =
        Math.floor(Math.random() * fullWords.length);
    word =
        fullWords[randNum].toLowerCase();
    gameOver = false;
    console.log(word)
}
function updateGuess() {
    creatingElement(guessesLeft, spanGuess)
    guessesLeft--;
    myGuesses.push(letTer);
    creatingElement(myGuesses, spanList);
    if (gameOver == false && guessesLeft === 0) {
        gameStart();
        losses++;
    }
    else {

    }

}
function matchLetter() {
    letTer = event.key;

    if (word.includes(letTer)) {
        updateGuess();
        wins++;
        gameOver = true;
        gameStart()
        creatingElement(wins, spanWs2);
        alert("Right answer brother!")
    }
    else {
        alert("Wrong answer Chum!");
        updateGuess();

        creatingElement(losses, spanLoss);
    };
}
function gameStart() {
    if (gameOver = true) {
        getWord();
        gameOver = false
        guessesLeft = 10;
    }
}

