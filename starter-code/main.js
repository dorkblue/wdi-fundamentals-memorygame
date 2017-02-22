console.log("JS file is connected to HTML! Woo!")

var cards = ['queen','queen','king','king'];

var cardsInPlay = [];

var reset = function(){

	cardsInPlay = [];

	document.getElementById('game-board').textContent = "";

	createCards();
};

document.getElementById('play').addEventListener('click', reset);



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