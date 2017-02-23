console.log("JS file is connected to HTML! Woo!")

var cards = ['queen','queen','king','king'];

var cardsInPlay = [];

var reset = function(){

	cardsInPlay = [];

	document.getElementById('game-board').textContent = "";

	cards = shuffle(cards);

	createCards();
};

document.getElementById('play').addEventListener('click', reset);

function shuffle(array) { //copied from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var gameBoard = document.getElementById('game-board');

var createCards = function (){

  for(var i = 0; i < cards.length; i++){

    var cardCreated = document.createElement('div');

	cardCreated.setAttribute('class', 'card'); 
    cardCreated.setAttribute('data-cards', cards[i]);

    cardCreated.addEventListener('click', isTwoCards);

    document.getElementById('game-board').appendChild(cardCreated);
  };
};

var isTwoCards = function(){

	if(this.getAttribute('data-cards') === 'queen'){
		this.innerHTML = '<img class = "cardPic" src = "queen-card.png" alt = "Queen">';
	}
	else {
		this.innerHTML = '<img class = "cardPic" src = "king-card.png" alt = "King">';	
	}

	cardsInPlay.push(this.getAttribute('data-cards'));

	if (cardsInPlay.length === 2){

		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	}
	else {
		alert("Sorry, try again.");
	}

	document.getElementById('play').textContent = "Play Again!";

}