let playerName = "";
let playerChoice = null;
let bot;
let playerScore = 0;
let botScore = 0;
let draw = 0;
let scoreLimit = 10;

function startGame() {
    playerName = document.querySelector('#playerName').value;
    if (playerName.trim() === "") {
        alert(`Please enter your name`);
        return;
    }
    document.querySelector('#startScreen').style.display = 'none';
    document.querySelector('#playArea').style.display = 'block';
    document.getElementById('player').innerHTML = playerName;
    document.getElementById('playerName2').innerHTML = playerName;
}


function playerSelect(choice) {
    playerChoice = choice;
    document.getElementById('message').innerHTML = `You selected ${playerChoice}`;
    if (playerChoice === "rock") {
        document.getElementById('playerMove').src = "./assets/rock.svg";
    } else if (playerChoice === "paper") {
        document.getElementById('playerMove').src = "./assets/paper.svg";
    } else if (playerChoice === "scissors") {
        document.getElementById('playerMove').src = "./assets/scissors.svg";
    } else {
        document.getElementById('playerMove').src = "./assets/placeholder.svg";
    }
}

function rockPaperScissors() {
    if (playerChoice === null) {
        document.getElementById('message').innerHTML = `Make a selection first.`;
        return;
    }
    const choices = ["rock", "paper", "scissors"];
    bot = choices[Math.floor(Math.random() * 3)];

    if (bot === "rock") {
        document.getElementById('botMove').src = "./assets/rock.svg";
    } else if (bot === "paper") {
        document.getElementById('botMove').src = "./assets/paper.svg";
    } else if (bot === "scissors") {
        document.getElementById('botMove').src = "./assets/scissors.svg";
    } else {
        document.getElementById('botMove').src = "./assets/placeholder.svg";
    }

    const rockBeatsScissors = ["Your rock crushes the scissors!", "Rock smashes through those scissors!", "Scissors couldn't cut through your solid rock"];
    const paperBeatsRock = ["Your paper wraps around the rock and prevails!", "Rock meets its match in your crafty paper!", "The rock is no match for your paper's strategy!"];
    const scissorsBeatsPaper = ["Your sharp scissors cut through the paper!", "Paper falls victim to your trusty scissors!", "Paper's resistance is futile against your mighty scissors"];

    const itsATie = ["It's a draw! You both made the same choice.", "No winner this time; it's a tie!", "Both of you were thinking alike; it's a tie game!"];

    const botRockBeatsScissors = ["Your scissors are no match for the rock's strength.", "The rock crushes your trusty scissors!", "Rock stands tall as your scissors fall."];
    const botPaperBeatsRock = ["Paper wraps around your rock, sealing the win!", "Your rock couldn't break through the paper's defense.", "Paper smothers your mighty rock."];
    const botScissorsBeatsPaper = ["Your paper meets its match in the sharp scissors!", "Scissors prove too much for your paper strategy.", "Scissors snip away your paper's hopes!"]; 

    if (playerChoice === "rock" && bot === "paper") {
        botScore++;
        document.getElementById('message').innerHTML = botPaperBeatsRock[Math.floor(Math.random() * 3)];
    } else if (playerChoice === "rock" && bot === "scissors") {
        playerScore++;
        document.getElementById('message').innerHTML = rockBeatsScissors[Math.floor(Math.random() * 3)];
    } else if (playerChoice === "paper" && bot === "scissors") {
        botScore++;
        document.getElementById('message').innerHTML = botScissorsBeatsPaper[Math.floor(Math.random() * 3)];
    } else if (playerChoice === "paper" && bot === "rock") {
        playerScore++;
        document.getElementById('message').innerHTML = paperBeatsRock[Math.floor(Math.random() * 3)];
    } else if (playerChoice === "scissors" && bot === "rock") {
        botScore++;
        document.getElementById('message').innerHTML = botRockBeatsScissors[Math.floor(Math.random() * 3)];
    } else if (playerChoice === "scissors" && bot === "paper") {
        playerScore++;
        document.getElementById('message').innerHTML = scissorsBeatsPaper[Math.floor(Math.random() * 3)];
    } else {
        draw++;
        document.getElementById('message').innerHTML = itsATie[Math.floor(Math.random() * 3)];
    }
    scores();
}

function scores() {
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('draw').innerHTML = draw;
    document.getElementById('botScore').innerHTML = botScore;
}

