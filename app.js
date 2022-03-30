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

// link to the html elements
const playerCounter = document.querySelector('#current-player-score');
const computerCounter = document.querySelector('#current-cpu-score');
const currentRound = document.querySelector('#current-round');

// counter variables
playerCounter.textContent = 0;
computerCounter.textContent = 0;
currentRound.textContent = 1;



// user input clicks
rock.addEventListener('click', () => {
    const computerSelection = computerPlay(choices);
    playRound('rock', computerSelection);
})
paper.addEventListener('click', () => {
    //console.log("paper");
    const computerSelection = computerPlay(choices);
    playRound('paper', computerSelection);
})
scissors.addEventListener('click', () => {
    //console.log("scissors");
    const computerSelection = computerPlay(choices);
    playRound('scissors', computerSelection);
})



// keeps track of the user and computer scores
window.addEventListener('click', function() {
    playerCounter.textContent = playerScore
    determineResults();
});
window.addEventListener('click', function() {
    computerCounter.textContent = cpuScore
    determineResults();
});

window.addEventListener('click', function(){
    currentRound.textContent = currRound
    determineResults();
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
        return determineResults();
        }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        currRound++
        cpuScore++;
        return determineResults();
        }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        currRound++
        cpuScore++;
        return determineResults();
        }
    else{
        currRound++
        playerScore++;
        return determineResults();
    }
};
// function to determine results
function determineResults(){
    
    // victory.style.display = hidden;

    if(playerScore >= 5){
        return console.log("You have won!!");
    }
    if(cpuScore >= 5){
        return console.log("you have lost!!");
    }
    else return "you tied!!"
};
