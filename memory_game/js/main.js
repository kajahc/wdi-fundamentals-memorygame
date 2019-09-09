const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = ["cardOne", "cardTwo"];
console.log ("User flipped queen")
var cardOne = cards[0]
var cardTwo = cards[2]
console.log ("User flipped king")
cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");
cardsInPlay.length;
if  (cardsInPlay.length === 2) {
}	else if (cardsInPlay[0] === cardsInPlay[1]){alert("You found a match!");} 
	else {alert("Sorry, try again.");}