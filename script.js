let playerChoice;
let bot;
let playerScore = 0;
let botScore = 0;
let draw = 0;

function playerSelect(choice) {
    playerChoice = choice;
    document.getElementById('message').innerHTML = `You selected ${playerChoice}`;
}

function rockPaperScissors() {
    const choices = ["rock", "paper", "scissors"];
    bot = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === "rock" && bot === "paper") {
        botScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. Computer wins!`;
    } else if (playerChoice === "rock" && bot === "scissors") {
        playerScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. You win!`;
    } else if (playerChoice === "paper" && bot === "scissors") {
        botScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. Computer wins!`;
    } else if (playerChoice === "paper" && bot === "rock") {
        playerScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. You win!`;
    } else if (playerChoice === "scissors" && bot === "rock") {
        botScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. Computer wins!`;
    } else if (playerChoice === "scissors" && bot === "paper") {
        playerScore++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. You win!`;
    } else {
        draw++;
        document.getElementById('message').innerHTML = `You selected ${playerChoice}. Computer selected ${bot}. It's a tie!`;
    }
    scores();
}

function scores() {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('draw').innerHTML = draw;
    document.getElementById('botScore').innerHTML = botScore;
}