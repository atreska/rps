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
showUserScore.setAttribute('id', 'userScore');
userScoreTitle.textContent = 'Your Score: '

let computerScoreTitle = document.createElement('label');
let showComputerScore = document.createElement('span');
showComputerScore.setAttribute('id', 'computerScore');
computerScoreTitle.textContent = 'Computers Score: '

body.append(userScoreTitle, showUserScore, computerScoreTitle, showComputerScore)

let allButtons = document.querySelectorAll('button');

let userselection;

for (button of allButtons) {
    button.addEventListener('click', (e) => {
        displayRoundWinner.textContent = '';
        displayChoices.textContent = '';

        console.log(e.target.textContent);
        userselection = e.target.textContent.toLowerCase();
        console.log(userselection)

        startRound(userselection, getComputersChoice());
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

function startRound(playerSelection, computerSelection) {
    let user = playerSelection;
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

function playGame() {
    let userScore = 0
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = startRound(getUserChoice(), getComputersChoice());

        if (winner === 'user') {
            userScore += 1;
        } else if (winner === 'computer') {
            compScore += 1;
        }
    }

    if (userScore > compScore) {
        console.log(`You WON the game!\nComputer Score: ${compScore}\nYour Score: ${userScore}`);
    } else if (userScore < compScore) {
        console.log(`You LOST the game!\nComputer Score: ${compScore}\nYour Score: ${userScore}`);
    } else
        console.log(`The game ends in a TIE!\nComputer Score: ${compScore}\nYour Score: ${userScore}`);

}