var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerChoice = null;

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

var updateGuessesLeft = function() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left " + guessesLeft;
};

var updateGuessedLetters = function() {
    document.querySelector('#guessedLetters').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};

var theAnswer = function() {
    this.computerChoice = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    updateGuessesLeft();
    updateGuessedLetters();
    theAnswer();
};

updateGuessesLeft();
theAnswer();

document.onkeyup = function(event){

    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessedLetters();

if (guessesLeft > 0){
    if (userGuess === computerChoice) {
        Wins++
        document.querySelector('#Wins').innerHTML = 'Wins: ' + Wins;
        reset();
      }
    }else if (guessesLeft === 0) {
        Losses++;
        document.querySelector('#Losses').innerHTML = 'Losses: ' + Losses;
        reset();
    }
};