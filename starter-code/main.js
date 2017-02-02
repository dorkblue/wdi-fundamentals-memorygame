console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo){
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
}

