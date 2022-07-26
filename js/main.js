let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

const getComputerChoice = () => {
    const choiceArrays = ["Rock", "Paper", "Scissors"];
    const randNum = Math.floor(Math.random() * choiceArrays.length);
    return choiceArrays[randNum]; 
}
//console.log(getComputerChoice())
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    //console.log("3",playerSelection, "4", computerSelection)
    if (playerSelection === "Rock" && computerSelection == "Scissors" || 
    playerSelection === "Paper" && computerSelection == "Rock"   ||
    playerSelection === "Scissors" && computerSelection == "Paper"){
        playerScore++
        return `You won! ${playerSelection} beats ${computerSelection} `
        
    }else if (playerSelection === computerSelection) {
        tieScore++
        return `You tied! you both picked ${playerSelection}`
        
    }else {
        computerScore++
        return`You Lose! ${computerSelection} beats ${playerSelection}`
        
    }
}



//console.log(playRound(playerSelection, computerSelection))

const game = () => {
    for (let i = 0; i < 7; i++) {
        console.log(i)
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose what to throw", "Rock, Paper, Scissors");
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "You beat Computer mercilessly"
    }else {
        return "You got beaten by Computer Shame on you"
    }
    
}
console.log(game())
