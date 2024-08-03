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
