const list = ["rock", "paper", "scissors"]
const min = 0
const max = 2


let playerScore = 0
let computerScore = 0


function randomListI(max) {
    return Math.floor(Math.random() * (max + 1));
}

function computerSelection() {
    computerHand = list[randomListI(min, max)]
    console.log("Computer choose: " + computerHand)
    return computerHand
}

function playerSelection() {
    let playerHandID = parseInt(prompt(" Please Choose 0 - Rock, 1 - Paper, 2 - Scissors !"))
    playerHand = list[playerHandID]
    console.log("Player choose: " + playerHand)
    return playerHand
}

function checkScores(playerScore, computerScore) {

    if (playerScore > computerScore) {

        console.log("You win! Your Score: " + playerScore + " Computer Score: " + computerScore);

    } else if (playerScore < computerScore) {

        console.log("You Loose! Your Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

function playRound() {
   
    playerSelection()
    computerSelection()

    if (playerHand == computerHand) {
        return playerScore, computerScore;

    } else if ((playerHand == list[0] && computerHand == list[2])) {
        playerScore += 1;
        return playerScore;

    } else if ((playerHand == list[1] && computerHand == list[0])) {
        playerScore += 1;
        return playerScore;
    } else if ((playerHand == list[2] && computerHand == list[1])) {
        computerScore += 1;
        return playerScore;
    } else {
        computerScore +=1;
        return computerScore;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        playRound()
        console.log("Your Score: " + playerScore + " Computer Score: " + computerScore)
    }

    console.log(checkScores(playerScore, computerScore));
}