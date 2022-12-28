
choices = ["Rock", "Paper", "Scissors"];
const playerScore = 0;
const computerScore = 0;


let playerSelection;
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
const playerSelection = prompt("Rock, paper or scissor?").toLowerCase();
console.log(playerSelection)}




function playRound(){
getComputerChoice()
getPlayerChoice()


}



function game(){
for(i=0; i< 5; i++){
    playRound()

}}

game();

