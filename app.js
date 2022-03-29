// Rock Paper Scissors App 
// Created using TOP 
// Michael Schroeder


// global instance variables

// const playerSelection = "rock";
const choices = ["rock","paper","scissors"];
let playerScore = 0;
let cpuScore = 0;



// Actual game logic

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
    playerSelection.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        cpuScore++;
        return "CPU has scored";
        }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        cpuScore++;
        return "CPU has scored";
        }
    else{
        playerScore++;
        return "You have scored"
    }
};
// function to determine results
function determineResults(){
    if(playerScore > cpuScore){
        return "You have won!!"
    }
    if(playerScore == cpuScore){
        return "you have tied!!"
    }
    else return "you lost!!"
};


function game(){
    // Remember loops? This is a great opportunity to use one to play those five rounds:
    for(let i = 0; i < 5; i++){
        var playerSelection = window.prompt("please type rock, paper or scissors: ");
        const computerSelection = computerPlay(choices);
        console.log(playRound(playerSelection, computerSelection))
        console.log("Player score is:" + playerScore);
        console.log("CPU score is:" + cpuScore+ '\n');
    } 
    return determineResults();
}


console.log(game());
