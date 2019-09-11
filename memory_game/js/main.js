console.log("User flipped queen");
console.log("User flipped king"); 
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];	
var cardOne = cards[0];
cardsInPlay.push(cardOne);
	console.log("User flipped " + cards[0]);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo)
	console.log ("User flipped " + cards[3]);
{if (cardsInPlay.length === 2); 
else if (cards[0] === cards[1] || cards[2] === cards[3]) 
	 {alert("You found a match!");} 
else (cards[0] === cards[2] || cards[1] === cards[3]) 
	{alert("Sorry, try again.");}
}	
 

