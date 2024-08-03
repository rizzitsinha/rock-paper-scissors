// Create a funciton called getComputerChoice to generate a random choice for the computer to play, either rock, paper or scissors
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let playableOptions = ['rock', 'paper', 'scissors'];
    return playableOptions[randomNumber];
}

