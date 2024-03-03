
let body = document.querySelector('body');

let rockBtn = document.createElement('button');
rockBtn.textContent = 'ROCK';
let paperBtn = document.createElement('button');
paperBtn.textContent = 'PAPER';
let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'SCISSORS';

let buttonDiv = document.createElement('div');
buttonDiv.append(rockBtn, paperBtn, scissorsBtn);
buttonDiv.setAttribute('class', 'button-group');
body.appendChild(buttonDiv);


let userScoreTitle = document.createElement('label');
let showUserScore = document.createElement('span');
showUserScore.textContent = '0';
showUserScore.setAttribute('id', 'userScore');
userScoreTitle.textContent = 'Your Score: '
let userScoreDiv = document.createElement('div');
userScoreDiv.append(userScoreTitle, showUserScore);
userScoreDiv.setAttribute('class', 'score-group');

let computerScoreTitle = document.createElement('label');
let showComputerScore = document.createElement('span');
showComputerScore.textContent = '0';
showComputerScore.setAttribute('id', 'computerScore');
computerScoreTitle.textContent = 'Computer Score: '
let computerScoreDiv = document.createElement('div');
computerScoreDiv.append(computerScoreTitle, showComputerScore);
computerScoreDiv.setAttribute('class', 'score-group');

body.append(userScoreDiv, computerScoreDiv);

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

    if (user === computer) {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'Round Ends in a TIE!';
    } else if (user === 'rock' && computer === 'scissors') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Rock Beats Scissors!';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'rock' && computer === 'paper') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Paper Beats Rock!';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    } else if (user === 'scissors' && computer === 'rock') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Rock Beats Scissors!';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    } else if (user === 'scissors' && computer === 'paper') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Scissors Beats Paper!';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'paper' && computer === 'rock') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Won! Paper Beats Rock!';
        userDisplayscore += 1;
        showUserScore.textContent = userDisplayscore;
    } else if (user === 'paper' && computer === 'scissors') {
        displayChoices.textContent = `You chose "${user}" & Computer chose "${computer}"`;
        displayRoundWinner.textContent = 'You Lost! Scissors Beats Paper!';
        computerDisplayScore += 1;
        showComputerScore.textContent = computerDisplayScore;
    }


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