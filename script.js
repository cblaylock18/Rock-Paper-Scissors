function getComputerChoice() {
    // create random number from 1-3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // returns Rock, Paper, or Scissors based on random number
    return randomNumber === 1
        ? "Rock"
        : randomNumber === 2
        ? "Paper"
        : randomNumber === 3
        ? "Scissors"
        : "Error!";
}

function winnerCheck(playerScore, computerScore) {
    let overallResult = document.createElement("h1");
    if (playerScore > computerScore) {
        overallResult.textContent = "You win!";
        resultsDiv.appendChild(overallResult);
    } else if (computerScore > playerScore) {
        overallResult.textContent = "You lose!";
        resultsDiv.appendChild(overallResult);
    } else if (playerScore === computerScore) {
        overallResult.textContent = "It's a tie!";
        resultsDiv.appendChild(overallResult);
    }
    resultsDiv.appendChild(playAgainButton);
    playAgainButton.focus();
}

function playRound(playerSelection) {
    // get computer selection
    let computerSelection = getComputerChoice();
    // set scope of result to the entire function
    let result = "";
    // output results of win, loss, or tie
    // tie first
    if (playerSelection === computerSelection) {
        result = "tie";
    }
    // Player rock beats computer scissors
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "win";
    }

    // Player scissors beats computer paper
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "win";
    }

    // Player rock beats computer scissors
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
    }

    // Computer rock beats player scissors
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        result = "loss";
    }

    // Computer scissors beats player paper
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        result = "loss";
    }

    // Computer paper beats player rock
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        result = "loss";
    }
    // tell player if input is invalid
    else {
        result = "unsure";
    }
    let currentRoundResult = document.createElement("p");
    currentRoundResult.textContent = roundResult(
        result,
        playerSelection,
        computerSelection
    );
    resultsDiv.appendChild(currentRoundResult);

    if (result === "win") {
        scorePlayer.textContent++;
        roundsPlayed++;
    } else if (result === "loss") {
        scoreComputer.textContent++;
        roundsPlayed++;
    } else {
        roundsPlayed++;
    }

    if (roundsPlayed === 5) {
        winnerCheck(scorePlayer.textContent, scoreComputer.textContent);
    }
}

// create a function to output the result of each round
function roundResult(result, playerSelection, computerSelection) {
    // output the result
    return result === "win"
        ? `You win! ${playerSelection} beats ${computerSelection}`
        : result === "loss"
        ? `You lose! ${computerSelection} beats ${playerSelection}`
        : result === "tie"
        ? `It's a tie! ${playerSelection} equals ${computerSelection}`
        : "Uh-oh. Something went wrong. Try again!";
}

function reset() {
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
    roundsPlayed = 0;
    while (resultsDiv.childNodes.length > 3) {
        resultsDiv.removeChild(resultsDiv.lastChild);
    }
}

const rockButton = document.querySelector("#Rock-btn");
rockButton.addEventListener("click", () => playRound("Rock"));

const paperButton = document.querySelector("#Paper-btn");
paperButton.addEventListener("click", () => playRound("Paper"));

const scissorsButton = document.querySelector("#Scissors-btn");
scissorsButton.addEventListener("click", () => playRound("Scissors"));

const resultsDiv = document.querySelector("#results");

const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");

let roundsPlayed = 0;

//create play again button
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again?";
playAgainButton.addEventListener("click", () => {
    reset();
});
