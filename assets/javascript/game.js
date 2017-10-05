var words = ["typewriter", "pager", "fax machine", "dial up", "phonebook", "floppy disk", "VHS"];

var guessedLetters = [];
var trysLeft = 12;
var secretWord;

secretWord = randomWord();
printBlanks(secretWord);










// Here is a place to put functions...........................


//Input: none | Output: random word from list................
function randomWord() {	
	var chosenWord;
	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log(chosenWord);
	return chosenWord;
}


//Input: word | Then prints the proper amount of blanks..........
function printBlanks(printBlanks_input) {	//
	var wordLength = printBlanks_input.length;
	var blankArray = [];
	var printString = " ";
	
	for (var i = 0; i < wordLength; i++) {	//This loop will create an array with all the needed blanks and spaces
		if (printBlanks_input.charAt(i) === " ") {
			blankArray[i] = '\xa0\xa0';
		}
		else {
			blankArray[i] = " _";
		}
	}

	for (var e = 0; e < blankArray.length; e++) {	//This loop turns blankArray into a string
		printString = printString.concat(blankArray[e]);
	}

	document.querySelector("#blanks").innerHTML = printString;
}

