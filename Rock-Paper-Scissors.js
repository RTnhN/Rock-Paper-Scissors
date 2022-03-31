
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
  const actions = ["rock", "paper", "scissors"];
  const truthTable = {
    "rock_rock": "tie",
    "rock_paper": "computer",
    "rock_scissors": "player",
    "paper_rock": "player",
    "paper_paper": "tie",
    "paper_scissors": "computer",
    "scissors_rock": "computer",
    "scissors_paper": "player",
    "scissors_scissors":"tie"
  }; 

  let combined_key = `${playerSelection.toLowerCase()}_${computerSelection.toLowerCase()}`
  if (combined_key in truthTable) {
    winner = truthTable[combined_key];
  } else {
    if (actions.includes(playerSelection)){
      return "Computer gave bad action. This is a bug that should not happen...";

    } else if (actions.includes(computerSelection)) {
      return "Player gave bad action. Please select either Rock, Paper, or Scissors";
    } else {
      return "Both player and computer are being rascals. Debug both player and code.";
    }
  }

  switch (winner) {
    case "computer":
      return `You lose! ${capitalizeFirst(computerSelection)} beats ${capitalizeFirst(playerSelection)}`;
      break;
    case "player":
      return `You win! ${capitalizeFirst(playerSelection)} beats ${capitalizeFirst(computerSelection)}`;
      break;
    default:
      return "Tie!";
      break;
  }
}

//Core game function
function game(numberOfRounds) {
  alert(`Welcome to Rock Paper Scissors! Lets play ${numberOfRounds} games and see who is the winner.`)
  let playResult = "";
  let playerWins = 0;
  let computerWins = 0;
  for(let i = 0; i < numberOfRounds;i++){
    let playerSelection = prompt("What action do you want to play with?(Rock, Paper, or Scissors): ");
    if (playerSelection === null){
      alert(`Okay, if you want to stop playing, that is fine. You only got through ${i} game(s).`);
      break
    }
    playResult = playRound(playerSelection, computerPlay());
    alert(playResult);
    switch (playResult.split("!")[0]) {
      case "You win":
        playerWins++;
        break;
      case "You lose":
        computerWins++;
      default:
        break;
    }
  }
  if (playerWins > computerWins){
    alert(`Player Won with ${playerWins} vs ${computerWins}`);
  } else if (playerWins < computerWins){
    alert(`Computer Won with ${computerWins} vs ${playerWins}`);
  } else {
    alert(`It was a tie with ${computerWins} for all`);
  }

}

//Starts game as soon as page is visited
let numberOfRounds = 5;
game(numberOfRounds);