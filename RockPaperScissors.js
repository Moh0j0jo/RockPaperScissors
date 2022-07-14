
function computerSelection() {

    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();

    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }

}

function hideHands() {
    const hands = document.getElementsByClassName('hand');
    for (const hand of hands) {
        hand.style.visibility = 'hidden';
    }
}

function showHands() {
    const btn = document.getElementsByClassName('hand');
    for (const hand of hands) {
        hand.style.visibility = 'none';
    }
}


function playRound(playerHand, computerHand) {
    document.getElementById('status').innerHTML = playerHand + ' vs ' + computerHand;

    switch (playerHand) {
        case 'Rock':
            switch (computerHand) {
                case 'Rock':
                    computerScore += 0;
                    playerScore += 0;
                    break;
                case 'Paper':
                    computerScore += 1;
                    break;
                case 'Scissors':
                    playerScore += 1;
            }
            break;
        case 'Paper':
            switch (computerHand) {
                case 'Rock':
                    playerScore += 1;
                    break;
                case 'Paper':
                    computerScore += 0;
                    playerScore += 0;
                    break;
                case 'Scissors':
                    computerScore += 1;
            }
            break;
        case 'Scissors':
            switch (computerHand) {
                case 'Rock':
                    computerScore += 1;
                    break;
                case 'Paper':
                    playerScore += 1;
                    break;
                case 'Scissors':
                    computerScore += 0;
                    playerScore += 0;
            }
    }

}

//loop trough the buttons with class tag - HAND - , on click and generate the hands
function createScoreBoard(playerScore, computerScore) {

    let Pscore = document.getElementById("playerScore");
    let Cscore = document.getElementById("computerScore");
    let endgametext = document.getElementById("status");

    Pscore.innerHTML = "Player Score: " + playerScore;
    Cscore.innerHTML = "Computer Score: " + computerScore

    if (playerScore === 5) {
        endgametext.innerHTML = "YOU WIN! CONGRATS!"
        hideHands()
    } else if (computerScore === 5) {
        endgametext.innerHTML = "YOU LOOSE! SORRY!"
        hideHands()
    }
}

const btn = document.getElementsByClassName('hand');
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let playerHand = btn[i].textContent;
        const computerHand = computerSelection();
        playRound(playerHand, computerHand)
        createScoreBoard(playerScore, computerScore)

    })

}


const plyAgnbtn = document.getElementById('reload');
plyAgnbtn.addEventListener("click", function () {
    location.reload()
    computerScore = 0;
    playerScore = 0;
    showHands()
})



// This is a loop with iterate trough the tags...(button)
/* const btn = document.querySelectorAll("button");
btn.forEach(button => {

    button.addEventListener("click", function () {

        let playerHand = button.textContent;
        const computerHand = computerSelection();
        playRound(playerHand, computerHand)
        document.getElementById('playerScore').innerHTML = "Player Score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computer Score: " +computerScore;

    });
}) */
