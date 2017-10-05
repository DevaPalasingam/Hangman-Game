var words = ["typewriter", "pager", "fax machine", "dial up", "phonebook", "floppy disk", "vhs"];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var guessedLetters = [];
var currentOutput = [];
var trysLeft = 12;
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


//Input: none | Output: random word from list................
function randomWord() {	
	var chosenWord;
	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log(chosenWord);
	return chosenWord;
}
//.............................................................



//Input: word | Then prints the proper amount of blanks..........
function printBlanks(printBlanks_input) {	//
	var wordLength = printBlanks_input.length;
	var blankArray = [];
	var printString = " ";
	
	for (var i = 0; i < wordLength; i++) {	//This loop will create an array with all the needed blanks and spaces
		if (printBlanks_input.charAt(i) === " ") {
			blankArray[i] = '\xa0\xa0\xa0';
		}
		else {
			blankArray[i] = " _ ";
		}
	}

	currentOutput = blankArray.slice(0);
	console.log(currentOutput);

	for (var e = 0; e < blankArray.length; e++) {	//This loop turns blankArray into a string
		printString = printString.concat(blankArray[e]);
	}

	document.querySelector("#blanks").innerHTML = printString;
}
//.............................................................


//Input: letter that user pressed | checks if it's one of the correct letters and checks if the letter has already been pressed
function checkUserLetter(inputLetter) {
	var newPrint = " ";
	var alreadyGuessed;

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
			currentOutput[k] = inputLetter;
		}
	}

	console.log(currentOutput);

	for (var e = 0; e < currentOutput.length; e++) {	//This loop turns currentOutput into a string
		newPrint = newPrint.concat(currentOutput[e]);
	}

	document.querySelector("#blanks").innerHTML = newPrint;

}

