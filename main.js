

choices = ["Rock", "Paper", "Scissors"];
const playerScore = 0;
const computerScore = 0;


function getComputerChoice(){
const randomNumber = choices[Math.floor(Math.random() * choices.length)].toLowerCase(); 
return randomNumber;
}



function getPlayerChoice(){
const userSelection = prompt("Rock, paper or scissor?").toLowerCase();
playerSelection = userSelection;
return playerSelection;

}


function playRound(){
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("Computer:", playerSelection);
console.log("User:",computerSelection);


if(computerSelection == playerSelection){
    console.log("It's a tie!")
}

}




function game(){
for(i=0; i< 5; i++){
    playRound()

}



}

game();

