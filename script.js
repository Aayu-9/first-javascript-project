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
        getComputerChoice = "scissors";
}
