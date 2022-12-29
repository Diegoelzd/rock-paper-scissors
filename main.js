

CHOICES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
const randomNumber = CHOICES[Math.floor(Math.random() * CHOICES.length)].toLowerCase(); 
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
console.log("Player:", playerSelection);
console.log("Computer:",computerSelection);


if(computerSelection === playerSelection){
    console.log("It's a tie!");

    

} else if((computerSelection === "rock" && playerSelection === "paper" )||
( computerSelection == "paper" && playerSelection == "scissors" ) ||(
  computerSelection == "scissors" && playerSelection == "rock"))
  {console.log("You win!");
  playerScore += 1;
console.log("Player score:", playerScore);

} 





else if((computerSelection === "paper" && playerSelection === "rock") || 
    (computerSelection == "scissors" && playerSelection == "paper")  || 
    (computerSelection == "rock" && playerSelection == "scissors" ))
    { console.log("You lose!" );
    computerScore += 1;
    console.log("Computer score:", computerScore)

}


}




function game(){
for(i=0; i< 5; i++){
    playRound()

}



}

game();


function checkWinner(){
if (playerScore > computerScore){
console.log("Game it's over! The winner is player")
} else if(computerScore > playerScore){
    console.log("Game it's over! The winner is computer")
} else if(playerScore == computerScore){
console.log("Game it's over! It's a tie!")

}

}
checkWinner();  

