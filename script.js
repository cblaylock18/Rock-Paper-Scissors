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

//fixes the users input so the first letter is capital and the rest are lowercase
function fixInput(playerSelection) {
    return (
        playerSelection.substr(0, 1).toUpperCase() +
        playerSelection.slice(1).toLowerCase()
    );
}

//prompts the user for a new input if the first one wasn't valid
function checkInput(playerSelectionCapitalized) {
    if (
        playerSelectionCapitalized === "Rock" ||
        playerSelectionCapitalized === "Paper" ||
        playerSelectionCapitalized === "Scissors"
    ) {
        return playerSelectionCapitalized;
    } else {
        let tryAgainPrompt = prompt(`That wasn't quite right, try again!`);
        let correctedInput = fixInput(tryAgainPrompt);
        return checkInput(correctedInput);
    }
}

function winnerCheck(playerScore, computerScore, roundsPlayed) {
    if (playerScore > computerScore) {
        return console.log("You win!");
    } else if (computerScore > playerScore) {
        return console.log("You lose!");
    } else if (playerScore === computerScore && roundsPlayed === 5) {
        return console.log("It's a tie!");
    }
}

function playRound() {
    // player inputs selection
    let playerSelection = prompt("Type your choice! Rock, Paper, or Scissors?");
    // get computer selection
    let computerSelection = getComputerChoice();
    //turn player input to sentence case
    let playerSelectionCapitalized = fixInput(playerSelection);
    let playerSelectionCorrected = checkInput(playerSelectionCapitalized);
    // set scope of result to the entire function
    let result = "";
    // output results of win, loss, or tie
    // tie first
    if (playerSelectionCorrected === computerSelection) {
        result = "tie";
    }
    // Player rock beats computer scissors
    else if (
        playerSelectionCorrected === "Rock" &&
        computerSelection === "Scissors"
    ) {
        result = "win";
    }

    // Player scissors beats computer paper
    else if (
        playerSelectionCorrected === "Scissors" &&
        computerSelection === "Paper"
    ) {
        result = "win";
    }

    // Player rock beats computer scissors
    else if (
        playerSelectionCorrected === "Paper" &&
        computerSelection === "Rock"
    ) {
        result = "win";
    }

    // Computer rock beats player scissors
    else if (
        computerSelection === "Rock" &&
        playerSelectionCorrected === "Scissors"
    ) {
        result = "loss";
    }

    // Computer scissors beats player paper
    else if (
        computerSelection === "Scissors" &&
        playerSelectionCorrected === "Paper"
    ) {
        result = "loss";
    }

    // Computer paper beats player rock
    else if (
        computerSelection === "Paper" &&
        playerSelectionCorrected === "Rock"
    ) {
        result = "loss";
    }
    // tell player if input is invalid
    else {
        result = "unsure";
    }
    console.log(
        roundResult(result, playerSelectionCorrected, computerSelection)
    );
    return result;
}

// create a function to output the result of each round
function roundResult(result, playerSelectionCorrected, computerSelection) {
    // output the result
    return result === "win"
        ? `You win! ${playerSelectionCorrected} beats ${computerSelection}`
        : result === "loss"
        ? `You lose! ${computerSelection} beats ${playerSelectionCorrected}`
        : result === "tie"
        ? `It's a tie! ${playerSelectionCorrected} equals ${computerSelection}`
        : "Uh-oh. Something went wrong. Try again!";
}

function playGame() {
    //round 1

    // define variables for the function scope
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    // get the result of the round
    let result = playRound();
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    // stopping if something goes wrong
    else if (result === "unsure") {
        alert("Something went wrong. Refresh the page to try again.");
        return;
    }
    // increment rounds
    roundsPlayed++;
    // output the overall score to the terminal
    console.log(
        `Rounds Played: ${roundsPlayed}\nThe current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`
    );

    //round 2
    // get the result of the round
    result = playRound();
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    // stopping if something goes wrong
    else if (result === "unsure") {
        alert("Something went wrong. Refresh the page to try again.");
        return;
    }
    // increment rounds
    roundsPlayed++;
    // output the overall score to the terminal
    console.log(
        `Rounds Played: ${roundsPlayed}\nThe current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`
    );

    //round 3
    // get the result of the round
    result = playRound();
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    // stopping if something goes wrong
    else if (result === "unsure") {
        alert("Something went wrong. Refresh the page to try again.");
        return;
    }
    // increment rounds
    roundsPlayed++;
    // output the overall score to the terminal
    console.log(
        `Rounds Played: ${roundsPlayed}\nThe current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`
    );

    //round 4
    // get the result of the round
    result = playRound();
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    // stopping if something goes wrong
    else if (result === "unsure") {
        alert("Something went wrong. Refresh the page to try again.");
        return;
    }
    // increment rounds
    roundsPlayed++;
    // output the overall score to the terminal
    console.log(
        `Rounds Played: ${roundsPlayed}\nThe current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`
    );

    //round 5
    // get the result of the round
    result = playRound();
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    // stopping if something goes wrong
    else if (result === "unsure") {
        alert("Something went wrong. Refresh the page to try again.");
        return;
    }
    // increment rounds
    roundsPlayed++;
    // output the overall score to the terminal
    console.log(
        `Rounds Played: ${roundsPlayed}\nThe current score is:\nPlayer:${playerScore}\nComputer:${computerScore}`
    );

    // check for winner after round 5
    winnerCheck(playerScore, computerScore, roundsPlayed);
}
playGame();
