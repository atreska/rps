/*
Ask the user to enter in one of three choices, Rock, Paper, or Scissors.
Compare the users choice to the computers selection.
Rock beats Scissors, Paper Beats Rock, and Scissors beats paper.
If the users choice beats the computers choice, the user wins. Otherwise 
the computer wins the round.
Display who won once the round is over. 
*/

function getComputersChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randNumberChoice = Math.floor(Math.random() * 3);
    let computerSelection = choices[randNumberChoice];

    return computerSelection;
}

function startRound(playerSelection, computerSelection) {
    let user = playerSelection;
    let computer = computerSelection;

    console.log(user);
    console.log(computer);

    return `${user} and ${computer}`;
}

function getUserChoice() {
    let userChoice = prompt('Select your weapon of choice!');
    return userChoice.toLowerCase();
}


startRound(getUserChoice(), getComputersChoice());
