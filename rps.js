/*
Ask the user to enter in one of three choices, Rock, Paper, or Scissors.
Compare the users choice to the computers selection.
Rock beats Scissors, Paper Beats Rock, and Scissors beats paper.
If the users choice beats the computers choice, the user wins. Otherwise 
the computer wins the round.
Display who won once the round is over. 
*/

let rockBtn = document.createElement('button');
rockBtn.textContent = 'ROCK';
let paperBtn = document.createElement('button');
paperBtn.textContent = 'PAPER';
let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'SCISSORS';
let body = document.querySelector('body');

body.append(rockBtn, paperBtn, scissorsBtn);


let userScoreTitle = document.createElement('label');
let showUserScore = document.createElement('span');
showUserScore.textContent = '0';
showUserScore.setAttribute('id', 'userScore');
userScoreTitle.textContent = 'Your Score: '

let computerScoreTitle = document.createElement('label');
let showComputerScore = document.createElement('span');
showComputerScore.textContent = '0';
showComputerScore.setAttribute('id', 'computerScore');
computerScoreTitle.textContent = 'Computers Score: '

body.append(userScoreTitle, showUserScore, computerScoreTitle, showComputerScore)

let allButtons = document.querySelectorAll('button');

let userselection;

for (button of allButtons) {
    button.addEventListener('click', (e) => {
        displayRoundWinner.textContent = '';
        displayChoices.textContent = '';

        userselection = e.target.textContent.toLowerCase();

        startRound(userselection, getComputersChoice());
        decideWinner();
    })
}


function getComputersChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randNumberChoice = Math.floor(Math.random() * 3);
    let computerSelection = choices[randNumberChoice];

    return computerSelection;
}

let userDisplayscore = 0;
let computerDisplayScore = 0;

let displayRoundWinner = document.createElement('p');
let displayChoices = document.createElement('p');
body.append(displayChoices, displayRoundWinner);

function startRound(userSelection, computerSelection) {
    let user = userSelection;
    let computer = computerSelection;
    let roundWinner = '';

    if (user === computer) {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'Round Ends in a TIE!';
    } else if (user === 'rock' && computer === 'scissors') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Rock Beats Scissors!';
        roundWinner = 'user';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'rock' && computer === 'paper') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Paper Beats Rock!';
        roundWinner = 'computer';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    } else if (user === 'scissors' && computer === 'rock') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Rock Beats Scissors!';
        roundWinner = 'computer';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    } else if (user === 'scissors' && computer === 'paper') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Scissors Beats Paper!';
        roundWinner = 'user';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'paper' && computer === 'rock') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Paper Beats Rock!';
        roundWinner = 'user';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'paper' && computer === 'scissors') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Scissors Beats Paper!';
        roundWinner = 'computer';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    }

    return roundWinner;
}

function getUserChoice() {
    let userChoice = prompt('Select your weapon of choice!');
    return userChoice.toLowerCase();
}

function decideWinner() {

    if (userDisplayscore === 5) {
        displayChoices.textContent = 'WINNER!'
        displayRoundWinner.textContent = `You WON the game!\nComputer Score: ${computerDisplayScore} : Your Score: ${userDisplayscore}`;
        userDisplayscore = 0;
        computerDisplayScore = 0;
        showUserScore.textContent = userDisplayscore;
        showComputerScore.textContent = computerDisplayScore;
    } else if (computerDisplayScore === 5) {
        displayChoices.textContent = 'LOSER!';
        displayRoundWinner.textContent = `You LOST the game!\nComputer Score: ${computerDisplayScore} : Your Score: ${userDisplayscore}`;
        userDisplayscore = 0;
        computerDisplayScore = 0;
        showUserScore.textContent = userDisplayscore;
        showComputerScore.textContent = computerDisplayScore;
    }

}