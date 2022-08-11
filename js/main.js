let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

// const rockButton = document.querySelector('.rock')
// const paperButton = document.querySelector('.paper')
// const scissorsButton = document.querySelector('.scissors')
const buttons = document.querySelectorAll('button')
const outcomeDiv = document.querySelector('.outcome')
const p = document.createElement('p')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const getComputerChoice = () => {
    const choiceArrays = ["Rock", "Paper", "Scissors"];
    const randNum = Math.floor(Math.random() * choiceArrays.length);
    return choiceArrays[randNum]; 
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection === "Rock" && computerSelection == "Scissors" || 
        playerSelection === "Paper" && computerSelection == "Rock"   ||
        playerSelection === "Scissors" && computerSelection == "Paper"){
        playerScore++
        p.innerText = `You won! ${playerSelection} beats ${computerSelection} `
    }else if (playerSelection === computerSelection) {
        tieScore++
        p.innerText = `You tied! you both picked ${playerSelection}`
    }else {
        computerScore++
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}` 
    }
    outcomeDiv.appendChild(p)
}

const checkWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won: you beat Computer mercilessly ${playerScore} to ${computerScore}`
    } else if (computerScore === 5){
        h2.classList.add('computer-won')
        h2.innerText = `You got beaten by Computer Shame on you ${computerScore} to ${playerScore} `
    }else {
        return "You tied with computer, try more!"
    }
    outcomeDiv.append(h2)
}


const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Playerscore: ${playerScore}`
    computerScoreSpan.innerText = `Computerscore: ${computerScore}`
}


//used forEach for each button instead of the codes below
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = `${button.className}`
        playRound(playerSelection, computerSelection)
        updateScores(playerScore, computerScore)
        checkWinner(playerScore, computerScore) 
    })
})



// rockButton.addEventListener('click', () => {
//     const computerSelection = getComputerChoice()
//     const playerSelection = 'Rock'
//     playRound(playerSelection, computerSelection)
//     updateScores(playerScore, computerScore)
//     checkWinner(playerScore, computerScore)
// })

// paperButton.addEventListener('click', () => {
//     const computerSelection = getComputerChoice()
//     const playerSelection = 'Paper'
//     playRound(playerSelection, computerSelection)
//     updateScores(playerScore, computerScore)
//     checkWinner(playerScore, computerScore)
// })

// scissorsButton.addEventListener('click', () => {
//     const computerSelection = getComputerChoice()
//     const playerSelection = 'Scissors'
//     playRound(playerSelection, computerSelection)
//     updateScores(playerScore, computerScore)
//     checkWinner(playerScore, computerScore)
// })

// const game = () => {
//     for (let i = 0; i < 25; i++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = prompt("Choose what to throw", "Rock, Paper, Scissors");
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore > computerScore) {
//         return "You beat Computer mercilessly"
        
//     }else if (playerScore < computerScore) {
//         return "You got beaten by Computer Shame on you"
        
//     }else {
//         return "You tied with computer, try more!"
//     }
    
// }
// console.log(game())
// console.log(playerScore)
// console.log(computerScore)








