var fullWords = ["Kratos", "Atreus", "Mimir", "Baldur", "Freya", "Brok", "Faye"];
var wins = 0;
var targetDiv = document.getElementById("answer");

function getRandom(arr) {
    var randNum = Math.floor(Math.random() * arr.length);
    return arr[index];
};
var Word = getRandom(fullWords);

if (document.onkeyup("")) {
    document.getElementById(targetDiv).textContent(Word);

}





