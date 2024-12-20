let playerWin = 0;
let computerWin = 0;

const stone = document.querySelector('.stone')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const computer = document.querySelector('.computer-choose')
const player = document.querySelector('.player-choose')
const result = document.querySelector('.result')


function playerWon() {
    return playerScore.innerText = playerWin
}
function computerWon() {
    return computerScore.innerText = computerWin
}

playerWon()
computerWon()

function gameFunction(playerChoose) {
    let randomChoice = Math.floor(Math.random() * 3 + 1)
    let computerChoose = '';

    if (randomChoice === 1) {
        computerChoose = 'Stone'
    } else if (randomChoice === 2) {
        computerChoose = 'Paper'
    } else {
        computerChoose = 'Scissor'
    }

    if (playerChoose === 'Stone' && computerChoose === 'Scissor' || playerChoose === 'Scissor' && computerChoose === 'Paper' || playerChoose === 'Paper' && computerChoose === 'Stone') {
        playerWin++
        playerWon()
        result.style.backgroundColor = 'rgb(220 252 231)'
        result.style.color = 'rgb(34 197 94)'
        result.innerText = 'YOU WON'
    }
    else if (playerChoose === 'Scissor' && computerChoose === 'Stone' || playerChoose === 'Paper' && computerChoose === 'Scissor' || playerChoose === 'Stone' && computerChoose === 'Paper') {
        computerWin++
        computerWon()
        result.style.backgroundColor = '#FFDDE0'
        result.style.color = 'rgb(239 68 68)'
        result.innerText = 'YOU LOSE'
    }
    else {
        result.style.backgroundColor = 'rgb(229 231 235)'
        result.style.color = 'rgb(107 114 128)'
        result.innerText = 'TIED'
    }

    player.parentElement.parentElement.classList.remove('hidden')

    computer.innerText = computerChoose
    player.innerText = playerChoose

    result.classList.remove('hidden')
}

function resetScore() {
    playerWin = 0
    computerWin = 0
    playerWon()
    computerWon()

    result.classList.add('hidden')
    player.parentElement.parentElement.classList.add('hidden')
}

