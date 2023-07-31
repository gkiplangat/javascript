// Declare variables
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

// variables to store what is fetched from the HTML plage
let gameStatusEl = document.getElementById("gamestatusEl");
let cardsEl = document.getElementById("cards-el");
let totalEl = document.getElementById("total-el");

// tests
//console.log(gameStatusEl)
//console.log(cardsEl)
//console.log(totalEl)

function startGame() {
  gameStarted = true;
  cardsEl.textContent = "Cards: " + cards;
  totalEl.textContent = "Sum: " + sum;
  checkGameStatus();
}
function newCard() {
    let newCard = getRandomNumber();
    cards.push(newCard);
    if (sum > 21) {
        return sum;
    } else {
        sum += newCard;
    }
  cardsEl.textContent = "Cards: " + cards;
  totalEl.textContent = "Sum: " + sum;
  checkGameStatus();
}
//checks status of the game
function checkGameStatus() {
  if (sum === 0) {
    isAlive = true;
    gameStatusEl.textContent = "Game not Started";
  } else if (sum < 21) {
    gameStatusEl.textContent = "You still have a Chance to draw a new card";
  } else if (sum === 21) {
    gameStatusEl.textContent = "Woow you got the blackjack";
  } else {
    gameStatusEl.textContent = "You are out of the game";
  }
}

//get a random number
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;
}
