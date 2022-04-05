const results = document.querySelector("#result");
const playButtons = document.querySelectorAll(".playButtons button");
const playButtonsContainer = document.querySelector(".playButtons");
const resetButton = document.querySelector(".resetButton");
const playerScore = document.querySelector("div.playerScore div.score");
const computerScore = document.querySelector("div.computerScore div.score");
const MAX_NUMBER_OF_POINTS = 5;
let playerWins = 0;
let computerWins = 0;

resetButton.style.display = "none";

resetButton.addEventListener("click", () => window.location.reload());
playButtons.forEach(button => button.addEventListener("click", game));


//Basic helper functions
function capitalizeFirst(string){
  return string.toUpperCase().slice(0,1) + string.toLowerCase().slice(1);
}

//Gameplay helper functions
function computerPlay() {
  const actions = ["rock", "paper", "scissors"];
  const selection = Math.floor(Math.random()*3);
  return actions[selection];
}

function playRound(playerSelection, computerSelection) {
  // first selection is player while second is computer 
  let winner;
  const truthTable = {
    "rock_rock": "Tie!",
    "rock_paper": `You lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`,
    "rock_scissors": `You win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`,
    "paper_rock": `You win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`,
    "paper_paper": "Tie!",
    "paper_scissors": `You lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`,
    "scissors_rock": `You lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`,
    "scissors_paper": `You win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`,
    "scissors_scissors":"Tie!"
  }; 
  return truthTable[`${playerSelection}_${computerSelection}`];
}

//Core game function
function game(e) {
  playResult = playRound(e.target.id, computerPlay());
  results.textContent = playResult;
  switch (playResult.split("!")[0]){
    case "You win":
      playerWins++;
      break;
    case "You lose":
      computerWins++;
    default:
      break;
    }
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;

  if (playerWins === MAX_NUMBER_OF_POINTS){
    results.textContent = `Player wins the game with ${playerWins} to ${computerWins}!`;
    playButtonsContainer.style.display = "none";
    resetButton.style.display = "block";
  }
  else if (computerWins === MAX_NUMBER_OF_POINTS){
    results.textContent = `Computer wins the game with ${computerWins} to ${playerWins}!`;
    playButtonsContainer.style.display = "none";
    resetButton.style.display = "block";
  } 
}