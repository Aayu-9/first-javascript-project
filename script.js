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

function clear ()
{
    humanScore = 0; 
    computerScore = 0; 
    result.textContent = ""; 
    score.textContent = "";
    message.textContent = "";
}

function winner() {
    if (humanScore > computerScore) {
        message.textContent = `You won the game by ${humanScore} / ${computerScore}`;
    }

    else if (humanScore < computerScore) {
        message.textContent = `You lost the game by ${humanScore} / ${computerScore}`;
    }

    else {
        message.textContent = `The game is a tie by ${humanScore} / ${computerScore}`;
    }

}

// logic to decide the winner of round
function playRound(getHumanChoice) {
    let getComputerChoice = ComputerChoice();

    if (humanScore >= 5 || computerScore >= 5)
    {
        clear();
    }

    if (getHumanChoice === "rock" && getComputerChoice === "scissor") {
        result.textContent = "You Win! rock beats scissor";
        humanScore++;
        score.textContent = `your score is ${humanScore}, computer score is: ${computerScore}`;
        if (humanScore >= 5 || computerScore >= 5) { 
            winner(); };
    }

    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        result.textContent = "You Win! paper beats rock";
        humanScore++;
        score.textContent = `your score is ${humanScore}, computer score is: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else if (getHumanChoice === "scissor" && getComputerChoice === "paper") {
        result.textContent = "You Win! scissor beats paper";
        humanScore++;
        score.textContent = `your score is ${humanScore}, computer score is: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else if (getHumanChoice === getComputerChoice) {
        result.textContent = "Tie! you both get +1 score";
        humanScore++;
        computerScore++;
        score.textContent = `your score is ${humanScore}, computer score is: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else {
        result.textContent = `You Lose! ${getComputerChoice} beats ${getHumanChoice}`;
        computerScore++;
        score.textContent = `your score is ${humanScore}, computer score is: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissor"));

const result = document.querySelector(".result");
const score = document.querySelector(".score");
const message = document.querySelector(".message");

