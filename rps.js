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
    let roundWinner = '';

    if (user === computer) {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'Round Ends in a TIE!';
    } else if (user === 'rock' && computer === 'scissors') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        roundWinner = 'You Won! Rock Beats Scissors!'
    } else if (user === 'rock' && computer === 'paper') {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'You Lost! Paper Beats Rock!'
    } else if (user === 'scissors' && computer === 'rock') {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'You Lost! Rock Beats Scissors!'
    } else if (user === 'scissors' && computer === 'paper') {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'You Won! Scissors Beats Paper!'
    } else if (user === 'paper' && computer === 'rock') {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'You Won! Paper Beats Rock!'
    } else if (user === 'paper' && computer === 'scissors') {
        console.log(`You chose "${user}" & Computer chooses "${computer}"`);
        roundWinner = 'You Lost! Scissors Beats Paper!'
    }

    return roundWinner;
}

function getUserChoice() {
    let userChoice = prompt('Select your weapon of choice!');
    return userChoice.toLowerCase();
}


console.log(startRound(getUserChoice(), getComputersChoice()));

