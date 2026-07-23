// generating a random choice between 1 and 3

function ComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;

    // using the random choice to choose between the three options

    switch (ComputerChoice) {
        case 1:
            ComputerChoice = "rock";
            break;
        case 2:
            ComputerChoice = "paper";
            break;
        case 3:
            ComputerChoice = "scissor";
    }

    return ComputerChoice;
}

// scores of computer and player
let humanScore = 0;
let computerScore = 0;

// logic to decide the winner of round
function playRound(getHumanChoice) {
    let getComputerChoice = ComputerChoice();

    if (getHumanChoice === "rock" && getComputerChoice === "scissor") {
        result.append("You Win! rock beats scissor");
        humanScore++;
    }

    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        result.append("You Win! paper beats rock");
        humanScore++;
    }

    else if (getHumanChoice === "scissor" && getComputerChoice === "paper") {
        result.append("You Win! scissor beats paper");
        humanScore++;
    }

    else if (getHumanChoice === getComputerChoice) {
        result.append("Tie! you both get +1 score");
        humanScore++;
        computerScore++;
    }

    else {
        result.append(`You Lose! ${getComputerChoice} beats ${getHumanChoice}`);
        computerScore++;
    }
}

// decides winner based on overall score
// if (humanScore > computerScore) {
//     alert(`You won the game your score is: ${humanScore} and Computer's score is ${computerScore}`);
// }

// else if (humanScore < computerScore) {
//     alert(`You loose the game your score is: ${humanScore} and Computer's score is ${computerScore}`);
// }

// else {
//     alert(`The game is tie a your score is: ${humanScore} and Computer's score is ${computerScore}`);
// }

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissor"));

const result = document.querySelector(".result");

