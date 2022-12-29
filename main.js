

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
    console.log("It's a tie!");

} else if(computerSelection == "rock" && playerSelection == "paper" ||
 computerSelection == "paper" && playerSelection == "scissors"  ||
  computerSelection == "scissors" &&playerSelection == "rock")
  {console.log("You win!")} 




else if(computerSelection == "paper" && playerSelection == "rock" || 
    computerSelection == "scissors" && playerSelection == "paper"  || computerSelection == "rock" &&
    playerSelection == "scissors"){ console.log("You lose!" )}


}




function game(){
for(i=0; i< 5; i++){
    playRound()

}



}

game();

