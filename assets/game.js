var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

var userGuess = event.key;

function updateWins() {
    document.getElementById("wins").innerHTML = "Wins:" + wins;
}

function updateLosses() {
    document.getElementById("losses").innerHTML = "Losses:" + losses;
}

updateWins();
updateLosses(); 

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.getElementById("myGuess").textContent = "You guessed " + userGuess;

if (userGuess === computerGuess) {
    alert("Correct!");
    wins++;
    updateWins();
} else {
    console.log("Wrong...");
    losses++;
    updateLosses();
}

};
