console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');

var createCards = function (noOfCards){
  for(var i = 1; i <= noOfCards; i++){
    var cardCreated = document.createElement('div');
    cardCreated.setAttribute('class', 'card');

    document.getElementById('game-board').appendChild(cardCreated);
  };
};

/*if (cardOne === cardTwo){
	alert("You've found a match!");
}

if (cardThree === cardFour){
	alert("You've found a match!");
}

if (cardOne !== cardFour){
	alert("Sorry, try again.");
}

if (cardOne !== cardThree){
	alert("Sorry, try again.");
}

if (cardTwo !== cardFour){
	alert("Sorry, try again.");
}

if (cardTwo !== cardThree){
	alert("Sorry, try again.");
}*/

