// Rock Paper Scissors App 
// Created using TOP 
// Michael Schroeder


// global instance variables

const choices = ["rock","paper","scissors"];


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
    // downcase string
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "you lose";
        }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return "you lose";
        }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return "you lose";
        }
    else{
        return "you win!"
    }
    // if(playerSelection == 'paper' && computerSelection == 'rock'){
    //     return "you win";
    //     }
    // if(playerSelection == 'paper' && computerSelection == 'rock'){
    //     return "you win";
    //     }   
};

const playerSelection = "rock";
const computerSelection = computerPlay(choices);
console.log(playRound(playerSelection, computerSelection));


function game(){
    // Remember loops? This is a great opportunity to use one to play those five rounds:
    for(let i = 0; i < 5; i++){
        playRound();
    }
}
