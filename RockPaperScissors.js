const list = ["rock", "paper", "scissors"]
const min = 0
const max = 2


var playerScore = 0
var computerScore = 0


function randomListI(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function computerSelection() {
    computerHand = list[randomListI(min, max)]
    return computerHand
}

function playerSelection() {
    let playerHandID = parseInt(prompt(" Please Choose 0 - Rock, 1 - Paper, 2 - Scissors !"))
    let playerHand = list[playerHandID]
    return playerHand
}

function checkScores(playerScore, computerScore) {

    if (playerScore > computerScore) {

        console.log("You win! Your Score: " + playerScore + " Computer Score: " + computerScore);

    } else if (playerScore < computerScore) {

        console.log("You Loose! Your Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerHand === computerHand) {
        return playerScore, computerScore;
   
    } else if (
        (playerHand === list[0] && computerHand === list[2]) ||
        (playerHand === list[1] && computerHand === list[0]) ||
        (playerHand === list[2] && computerHand === list[1])
    ) {

        playerScore += 1;
        return playerScore;

    } else {

        computerScore += 1;
        return computerScore;

    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        playRound();
        console.log("Your Score: " + playerScore + " Computer Score: " + computerScore)
    }

    console.log(checkScores(playerScore, computerScore));
}