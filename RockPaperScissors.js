const list = ["rock", "paper", "scissors"]
const min = 0
const max = 2

function randomListI(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function computerSelection() {
    computerHand = list[randomListI(min, max)]
    return computerHand
}

function playerSelection() {
    console.log("Please Choose 0 - Rock, 1 - Paper, 2 - Scissors");
    let playerHand = parseInt(prompt("Enter a Value", "0"));
    return list[playerHand]
}
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        return "Draw, nobody wins!";

    } else if (playerSelection === list[1] && computerSelection === list[2]) {

        return "";

    } else if (playerSelection === list[0] && computerSelection === list[2]) {

        return "";

    }


}       