// Rock Paper Scissors App 
// Created using TOP 
// Michael Schroeder


// Create eventListeners/documentQueries/other variables
// const choice = document.querySelectorAll(".choice"); // querySelectorAll because multiple choices

const choices = ["rock","paper","scissors"];



// Create actual game logic

function computerPlayer(){
    return console.log("computerPlay")
}

function playRound(playerSelection, computerSelection){
    playerSelection = String.downcase;

    return "you Lose! Paper beats Rock"
};

function game(){
    // Remember loops? This is a great opportunity to use one to play those five rounds:
    playRound();
}
