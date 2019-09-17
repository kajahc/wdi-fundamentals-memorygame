cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipcard(cardId){
checkForMatch();
if (cardsInPlay === 2) {
} else if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!")
  }else{ 
  	alert("Sorry, try again.")
  } 
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
flipcard();
flipcard([0]);
flipcard([2]);
