// Create and array of words
const word = ['Steel Vengeance', 'Valravn', 'Millennium Force', 'Blue Streak', 'Cedar Creek Mine Ride', 'Corkscrew', 'GateKeeper', 'Gemini', 'Iron Dragon', 'Magnum XL-200', 'Maverick', 'Raptor', 'Rougarou', 'Top Thrill Dragster', 'Wicked Twister']
// Choose word randomly
var randNum = Math.floor(Math.random() * word.length)
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// DOM

var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main

// Create underscores based on length of word
let generateUnderscore = () => {
	for(let i = 0; i < choosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

// Get users guess
document.addEventListener('keypress', (event) => {
	let keyWord = String.fromCharCode(event.keyCode);
// if users guess is right
	if(choosenWord.indexOf(keyword) > -1) {
	// add to right words array
		rightWord.push(keyword);

	// replace underscore with right letter
		underscores[choosenWord.indexOf(keyword)] = keyword;
			docUnderScore[0].innerHTML = underScore.join(' ');
			docRightGuess[0].innerHTML = rightGuess.join(' ');
	// Check to see if user word matches guesses
		if(underScore.join('') == choosenWord) {
			alert('You Win');
		}
	}
	else {
		wrongWord.push(keywrod);
			wrongGuess[0].innerHTML
	}
});



generateUnderscore();
// check if guess is right
// if right push to right array
// if wrong push to wrong array