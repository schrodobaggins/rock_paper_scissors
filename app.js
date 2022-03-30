// Rock Paper Scissors App 
// Created using TOP 
// Michael Schroeder


// global instance variables
const choices = ["rock","paper","scissors"];
let playerScore = 0;
let cpuScore = 0;
let currRound = 1;

// choices
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// keeping count of score and rounds
const playerCounter = document.querySelector('#current-player-score');
const computerCounter = document.querySelector('#current-cpu-score');
const currentRound = document.querySelector('#current-round');

playerCounter.textContent = 0;
computerCounter.textContent = 0;
currentRound.textContent = 1;

// user input clicks
rock.addEventListener('click', () => {
    const computerSelection = computerPlay(choices);
    playRound('rock', computerSelection);
    game();
})
paper.addEventListener('click', () => {
    console.log("paper");
    const computerSelection = computerPlay(choices);
    playRound('paper', computerSelection);
    game();
})
scissors.addEventListener('click', () => {
    console.log("scissors");
    const computerSelection = computerPlay(choices);
    playRound('scissors', computerSelection);
    game();
})

// keeps track of the user and computer scores
window.addEventListener('click', function() {
    playerCounter.textContent = playerScore
});
window.addEventListener('click', function() {
    computerCounter.textContent = cpuScore
});

window.addEventListener('click', function(){
    currentRound.textContent = currRound
});

// determines random output for cpu moves
function computerPlay(choices){
        // get random index value
        const randomIndex = Math.floor(Math.random() * choices.length);
        // get random item
        const item = choices[randomIndex];
        console.log(item);
        return item;
}


function playRound(playerSelection, computerSelection){

    if(playerSelection == 'rock' && computerSelection == 'paper'){
        currRound++
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        currRound++
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        currRound++
        cpuScore++;
        return "CPU has scored";
        }
    else{
        currRound++
        playerScore++;
        return "You have scored"
    }
};
// function to determine results
function determineResults(){
    if(playerScore >= 5){
        return "You have won!!"
    }
    if(cpuScore >= 5){
        return "you have lost!!"
    }
    else return "you tied!!"
};


function game(){
        // console.log("Player score is:" + playerScore);
        // console.log("CPU score is:" + cpuScore+ '\n');
    return determineResults();
}


