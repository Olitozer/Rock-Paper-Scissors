

function getComputerChoice() {

  let options = ["rock", "paper", "scissors"];



  return options[Math.floor(Math.random() * options.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {




  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {

  console.log('You win this round - ' + playerSelection + ' beats ' + computerSelection + '!');
  playerScore++;

} else if (playerSelection === computerSelection) {

  console.log('Its a tie, you both chose ' + playerSelection + '!');

} else{
  console.log('You lose this round - ' + computerSelection + ' beats ' + playerSelection + '!');
computerScore++;
}

}

function game(){





    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);






if(playerScore === computerScore ){
  console.log("Its a tie");
} else if(playerScore > computerScore ){
  console.log("You win!");
} else{
  console.log("You lose!");
}

}

game();
