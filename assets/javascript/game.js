var words = ["typewriter", "pager", "fax machine", "dial up", "phonebook", "floppy disk", "vhs"];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var guessedLetters = [];
var currentOutput = [];
var trysLeft = 5;
var secretWord;
var gameOver = false;

secretWord = randomWord();
printBlanks(secretWord);


//This function happens when user releases a key
document.onkeyup = function(event) {

	if (gameOver === true) {
		return;
	}

	//this for-loop checks if user pressed a valid letter
	for (var i = 0; i < letters.length; i++) {
		if (event.key === letters[i]) {
			checkUserLetter(event.key);
		}
	}

}








// Here is a place to put functions...........................

//this function will change the text to say game over
function endGame() {
	gameOver = true;
	document.querySelector("#blanks").innerHTML = "Game Over";
}
//........................................................


//Input: none | Output: random word from list................
function randomWord() {	
	var chosenWord;
	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log("chosen word: " + chosenWord);
	return chosenWord;
}
//.............................................................



//Input: word | Then prints the proper amount of blanks..........
function printBlanks(printBlanks_input) {
	var wordLength = printBlanks_input.length;
	var blankArray = [];
	var printString = " ";
	
	//This loop will create an array with all the needed blanks and spaces
	for (var i = 0; i < wordLength; i++) {	
		if (printBlanks_input.charAt(i) === " ") {
			blankArray[i] = '\xa0\xa0\xa0';
		}
		else {
			blankArray[i] = " _ ";
		}
	}

	currentOutput = blankArray.slice(0);
	console.log("current output: " + currentOutput);

	//This loop turns blankArray into a string
	for (var e = 0; e < blankArray.length; e++) {	
		printString = printString.concat(blankArray[e]);
	}

	document.querySelector("#blanks").innerHTML = printString;
}
//.............................................................


//Input: letter that user pressed | checks if it's one of the correct letters and checks if the letter has already been pressed
function checkUserLetter(inputLetter) {
	var newPrint = " ";
	var guessCorrect = false;

	//this loop checks to see if the letter has already been pressed
	for (var i = 0; i < guessedLetters.length; i++) {
		//leaves the function if the letter has already been pressed
		if (inputLetter === guessedLetters[i]) {
			return;
		}
	}

	//this will check if the letter is correct and will change the current output
	for (var k = 0; k < secretWord.length; k++) {
		if (inputLetter === secretWord.charAt(k)) {
			guessedLetters.push(inputLetter);
			console.log("guessed letters: " + guessedLetters);
			currentOutput[k] = inputLetter;
			guessCorrect = true;
		}
	}

	//this will check and decrement number of tries if guess is wrong
	if (guessCorrect === false) {
		guessedLetters.push(inputLetter);
		console.log("guessed letters: " + guessedLetters);
		trysLeft--;
		console.log("tries left: " + trysLeft);
	}

	if (trysLeft <= 0) {
		endGame();
		return;
	}

	console.log("current output: " + currentOutput);

	//This loop turns currentOutput into a string
	for (var e = 0; e < currentOutput.length; e++) {	
		newPrint = newPrint.concat(currentOutput[e]);
	}

	document.querySelector("#blanks").innerHTML = newPrint;

}
//............................................................


