// Rock Paper Scissors App 
// Created using TOP 
// Michael Schroeder


// global instance variables

// const playerSelection = "rock";
const choices = ["rock","paper","scissors"];
let playerScore = 0;
let cpuScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const computerScore = document.querySelector('#current-cpu-score');
const userScore = document.querySelector('#current-player-score');



// Actual game logic
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

function computerPlay(choices){
        // get random index value
        const randomIndex = Math.floor(Math.random() * choices.length);
        // get random item
        const item = choices[randomIndex];
        console.log(item);
        return item;
}


function playRound(playerSelection, computerSelection){
    // remember to downcase string
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("scored");
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log("scored");
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log("scored");
        cpuScore++;
        return "CPU has scored";
        }
    else{
        console.log("scored");
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
        console.log("Player score is:" + playerScore);
        console.log("CPU score is:" + cpuScore+ '\n');
    return determineResults();
}


