// generating a random choice between 1 and 3

function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3) + 1;

    // using the random choice to choose between the three options

    switch (getComputerChoice) {
        case 1:
            getComputerChoice = "rock";
            break;
        case 2:
            getComputerChoice = "paper";
            break;
        case 3:
            getComputerChoice = "scissor";
    }

    return getComputerChoice;
}

// ask user for their choice
function getHumanChoice() {
    let getHumanChoice = prompt(`Rock, Paper, Scissor? make your choice: `, '');
    getHumanChoice = getHumanChoice.toLowerCase();
    return getHumanChoice;
}

// scores of computer and player
let humanScore = 0;
let computerScore = 0;

// logic to decide the winner of round
function playRound(getComputerChoice, getHumanChoice) {
    if (getHumanChoice === "rock" && getComputerChoice === "scissor") {
        alert("You Win! rock beats scissor");
        humanScore++;
    }

    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        alert("You Win! paper beats rock");
        humanScore++;
    }

    else if (getHumanChoice === "scissor" && getComputerChoice === "paper") {
        alert("You Win! scissor beats paper");
        humanScore++
    }

    else if (getHumanChoice === getComputerChoice) {
        alert("Tie! you both get +1 score");
        humanScore++;
        computerScore++;
    }

    else {
        alert(`You Lose! ${getComputerChoice} beats ${getHumanChoice}`);
        computerScore++;
    }
}

// write logic to play entire game (5 rounds) using loop
function playGame() {
    for (let i = 1; i <= 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

// start the game
playGame();

// decides winner based on overall score
if (humanScore > computerScore) {
    alert(`You won the game your score is: ${humanScore} and Computer's score is ${computerScore}`);
}

else if (humanScore < computerScore) {
    alert(`You loose the game your score is: ${humanScore} and Computer's score is ${computerScore}`);
}

else {
    alert(`The game is tie a your score is: ${humanScore} and Computer's score is ${computerScalert}`);
}

