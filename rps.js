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


let userScoreTitle = document.createElement('h3');
userScoreTitle.textContent = 'Your Score: '
let computerScoreTitle = document.createElement('h3');
computerScoreTitle.textContent = 'Computers Score: '

body.append(userScoreTitle, computerScoreTitle)

let allButtons = document.querySelectorAll('button');

let userselection;

for (button of allButtons) {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        userselection = e.target.textContent.toLowerCase();
        console.log(userselection)

        startRound(userselection, getComputersChoice());
    })
}

startRound(userselection, getComputersChoice());



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
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('Round Ends in a TIE!');
    } else if (user === 'rock' && computer === 'scissors') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Won! Rock Beats Scissors!')
        roundWinner = 'user';
    } else if (user === 'rock' && computer === 'paper') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Lost! Paper Beats Rock!')
        roundWinner = 'computer';
    } else if (user === 'scissors' && computer === 'rock') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Lost! Rock Beats Scissors!')
        roundWinner = 'computer';
    } else if (user === 'scissors' && computer === 'paper') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Won! Scissors Beats Paper!')
        roundWinner = 'user';
    } else if (user === 'paper' && computer === 'rock') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Won! Paper Beats Rock!')
        roundWinner = 'user';
    } else if (user === 'paper' && computer === 'scissors') {
        console.log(`You chose "${user}" & Computer chose "${computer}"`);
        console.log('You Lost! Scissors Beats Paper!')
        roundWinner = 'computer';
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