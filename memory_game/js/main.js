cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log("User flipped " + cards[0]);
cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log("User flipped " + cards[2]);

if (cardsInPlay === 2) {
	//what code goes here? What do we want the function to do?
} else if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!")
  }else{ 
  	alert("Sorry, try again.")
  } 
