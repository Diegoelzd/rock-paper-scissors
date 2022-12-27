
choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
const randomNumber = Math.floor(Math.random() * choices.length); 
const computerSelection = randomNumber;


if(computerSelection == 0){
    console.log("rock")
}else if(computerSelection == 1){
    console.log("paper")}else if(computerSelection == 2){
console.log("scissor")
    }

}


function getPlayerChoice(){
const playerSelection = prompt("Rock, paper or scissor?")


}



function playRound(){
getComputerChoice()
getPlayerChoice()
}


playRound()