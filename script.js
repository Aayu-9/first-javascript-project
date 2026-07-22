// generating a random choice between 1 and 3

let getComputerChoice = Math.floor(Math.random() * 3) + 1;

// using the random choice to choose between the three options

switch(getComputerChoice){
    case 1:
        getComputerChoice = "rock";
        break;
    case 2:
        getComputerChoice = "paper";
        break;
    case 3:
        getComputerChoice = "scissor";
}

// ask user for their choice
let getHumanChoice = prompt(`Rock, Paper, Scissor? make your choice: `, '');
getHumanChoice = getHumanChoice.toLowerCase();

// scores of computer and player
let humanScore = 0;
let comuterScore = 0;

// logic to decide the winner of round
function playRound(getComputerChoice, getHumanChoice){
    if (getHumanChoice==="rock" && getComputerChoice==="scissor"){
        console.log("You Win! rock beats scissor");
        humanScore++;
    }

    else if(getHumanChoice==="paper" && getComputerChoice==="rock"){
        console.log("You Win! paper beats rock");
        humanScore++;
    }

    else if(getHumanChoice==="scissor" && getComputerChoice==="paper")
    {
        console.log("You Win! scissor beats paper");
        humanScore++
    }

    else if(getHumanChoice===getComputerChoice){
        console.log("Tie! you both get +1 score");
        humanScore++;
        comuterScore++;
    }

    else {
        console.log(`You Lose! ${getComputerChoice} beats ${getHumanChoice}`);
    }
}

