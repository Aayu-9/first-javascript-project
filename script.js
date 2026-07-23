
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissor"));

const result = document.querySelector(".result");
const score = document.querySelector(".score");

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
}

function winner() {
    if (humanScore > computerScore) {
        alert(`You won the game, human score: ${humanScore} computer score: ${computerScore}`);
    }

    else if (humanScore < computerScore) {
        alert(`You lost the game, human score: ${humanScore} computer score: ${computerScore}`);
    }

    else {
        alert(`The game is a tie human score: ${humanScore} computer score: ${computerScore}`);
    }

    clear();
}

// logic to decide the winner of round
function playRound(getHumanChoice) {
    let getComputerChoice = ComputerChoice();

    if (getHumanChoice === "rock" && getComputerChoice === "scissor") {
        result.textContent = "You Win! rock beats scissor";
        humanScore++;
        score.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;
        if (humanScore >= 5 || computerScore >= 5) { 
            winner(); };
    }

    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        result.textContent = "You Win! paper beats rock";
        humanScore++;
        score.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else if (getHumanChoice === "scissor" && getComputerChoice === "paper") {
        result.textContent = "You Win! scissor beats paper";
        humanScore++;
        score.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else if (getHumanChoice === getComputerChoice) {
        result.textContent = "Tie! you both get +1 score";
        humanScore++;
        computerScore++;
        score.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

    else {
        result.textContent = `You Lose! ${getComputerChoice} beats ${getHumanChoice}`;
        computerScore++;
        score.textContent = `your score: ${humanScore} | computer score: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) { 
            winner(); };
    }

}


