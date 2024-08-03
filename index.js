// Create a funciton called getComputerChoice to generate a random choice for the computer to play, either rock, paper or scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let playableOptions = ['rock', 'paper', 'scissors'];

    return playableOptions[randomNumber];
}

// Create a function called getHumanChoice which will return one of the valid options, depending on the user's input
function getHumanChoice(){
    let humanChoice = prompt("Play either rock, paper or scissors please!");
    humanChoice = humanChoice.toLowerCase();
    
    return humanChoice;
}

// Creat two variables humanScore and computerScore and initialize the two to 0
let humanScore = 0;
let computerScore = 0;

// Create a function called playRound to play a single round, decide and declare the winner
function playRound(humanChoice, computerChoice){
    // Create two variables to set winner staus according to who wins
    let humanWins;
    let winnerStatus;
    
    // Create a function to decide which string to output
    function getWinnerStatus(humanWins) {
        if (humanWins === true){
            winnerStatus = "You won this round! "
        }
        else if (humanWins === false){
            winnerStatus = "You lost this round! "
        }
        return winnerStatus
    }

    // Create three strings to make code more concise, the strings declare wether rocl, paper or scissors won
    let rockWins = "Rock beats Scissors"
    let paperWins = "Paper beats Rock"
    let scissorsWin = "Scissors beat Paper"

    // Create a switch statement to find out and declare the winner, it rewards a point to the winner
    switch(humanChoice){
        case 'rock':
            if (computerChoice === 'scissors'){
                humanWins = true;
                getWinnerStatus(humanWins)
                humanScore++;
                console.log(winnerStatus + rockWins);
                break;
            }
            else if (computerChoice === 'paper'){
                humanWins = false;
                getWinnerStatus(humanWins)
                computerScore++;
                console.log(winnerStatus + paperWins);
                break;
            }
            else {
                console.log("Its a tie!")
                break;
            }

        case 'paper':
            if (computerChoice === 'rock'){
                humanWins = true;
                getWinnerStatus(humanWins)
                humanScore++;
                console.log(winnerStatus + paperWins);
                break;
            }
            else if (computerChoice === 'scissors'){
                humanWins = false;
                getWinnerStatus(humanWins)
                computerScore++;
                console.log(winnerStatus + scissorsWin);
                break;
            }
            else {
                console.log("Its a tie!")
                break;
            }

        case 'scissors':
            if (computerChoice === 'paper'){
                humanWins = true;
                getWinnerStatus(humanWins)
                humanScore++;
                console.log(winnerStatus + scissorsWin);
                break;
            }
            else if (computerChoice === 'rock'){
                humanWins = false;
                getWinnerStatus(humanWins)
                computerScore++;
                console.log(winnerStatus + rockWins);
                break;
            }
            else {
                console.log("Its a tie!")
                break;
            }
    }
}

// Call the function 5 times to play the game
for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    // console.log(`Your score for round ${i}: ${humanScore}`);
    // console.log(`The computer's score for round ${i}: ${computerScore}`);
}

// Announce the final result and declare the winner
console.log(`Final Score:
                   Your Score- ${humanScore}
                   Computer's Score- ${computerScore}`)
if (humanScore > computerScore){ console.log("You win!!!!") }
else if (humanScore < computerScore){ console.log("You lose:(") }
else { console.log("It's a tie") }
