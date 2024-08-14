const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const buttonsContainer = document.querySelector(".buttons-container")
const currentScore = document.querySelector("#score");
const scoreBoard = document.querySelector(".score-board")
const refreshPrompt = document.querySelector("#refresh")

// Creat two variables humanScore and computerScore and initialize the two to 0
let humanScore = 0;
let computerScore = 0;
let humanChoice;

// Initiate Game
buttonsContainer.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id){
        case 'rock':
            console.log("rock was clicked!");
            humanChoice = 'rock';
            break;

        case 'paper':
            console.log("paper was clicked!");
            humanChoice = 'paper';
            break;

        case 'scissors':
            console.log("scissors was clicked!");
            humanChoice = 'scissors';
            break;
    }

    playRound(humanChoice, getComputerChoice());
    currentScore.textContent = `${humanScore} - ${computerScore}`

    if(humanScore === 5 || computerScore === 5){
        (humanScore > computerScore) ? currentScore.textContent = "You win!" : currentScore.textContent = "You lose!"
    }
    else if(humanScore > 5 || computerScore > 5){
        scoreBoard.classList.add("invisible")
        refreshPrompt.classList.remove("invisible")
        
    }
})




// Create a funciton called getComputerChoice to generate a random choice for the computer to play, either rock, paper or scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let playableOptions = ['rock', 'paper', 'scissors'];

    return playableOptions[randomNumber];
}


// Create a function called playRound to play a single round, decide and declare the winner
function playRound(humanChoice, computerChoice){

    // Create a switch statement to find out and declare the winner, it rewards a point to the winner
    let result;
    if(humanChoice === computerChoice){
        result = "Its a tie!";
    }
    else{
        switch (humanChoice) {
            case 'rock':
                (computerChoice === 'scissors') ? result = "You win!" : result = "You lose!";
                (result === "You win!") ? humanScore++ : computerScore++;
                break;
                
            case 'paper':
                (computerChoice === 'rock') ? result = "You win!" : result = "You lose!";
                (result === "You win!") ? humanScore++ : computerScore++;
                break;
                
            case 'scissors':
                (computerChoice === 'scissors') ? result = "You win!" : result = "You lose!";
                (result === "You win!") ? humanScore++ : computerScore++;
                break;
        }
    }
    console.log(result);
}



