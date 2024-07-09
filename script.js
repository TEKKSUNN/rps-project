/* TODO:
    - take player choice
    - take computer choice
    - process and output result
*/
const choices = ["rock", "paper", "scissors"];
let humanWins = 0;
let computerWins = 0;
let roundCount = 0;
const uiHumanWins = document.getElementById('player-score');
const uiComputerWins = document.getElementById('computer-score');
const moveHistory = document.getElementById('move-history');

function playGame(rounds)
{
    humanWins = 0;
    computerWins = 0;
    for (let i = 0; i < rounds; i++)
    {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    checkWinner();
}

function checkWinner()
{
    let showWins = () => console.log(`Human wins: ${humanWins}, Computer wins: ${computerWins}`);
    if (humanWins > computerWins)
    {
        console.log("OVERALL, YOU HAVE WON!");
    }
    else if (humanWins < computerWins)
    {
        console.log("OVERALL, YOU HAVE LOST!");
    }
    else
    {
        console.log("OVERALL, ITS A DRAW!");
    }
    showWins();
}

function getHumanChoice()
{
    while (true) {
        let humanChoice = window.prompt("Rock, paper, or scissors? ");
        humanChoice = humanChoice.toLowerCase();
        if (choices.includes(humanChoice))
        {
            return humanChoice;
        }
    }
}

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice)
{
    if (checkMaxWins()){
        return;
    }
    roundCount++;
    const moveLog = document.createElement('div');
    const resultText = document.createElement('p');
    let showMoves = () => {
        console.log(`You played ${humanChoice}, computer played ${computerChoice}`);
        const roundText = document.createElement('h3');
        roundText.textContent = `Round ${roundCount}`
        const humanMove = document.createElement('p');
        humanMove.textContent = `Player Move: ${humanChoice}`;
        const computerMove = document.createElement('p');
        computerMove.textContent = `Computer Move: ${computerChoice}`;
        moveLog.appendChild(roundText);
        moveLog.appendChild(humanMove);
        moveLog.appendChild(computerMove);
        moveLog.appendChild(resultText);
        moveHistory.insertBefore(moveLog, moveHistory.firstChild);
    };
    let showWin = () => {
        console.log("WIN!");
        humanWins++;
        uiHumanWins.textContent = humanWins;
        resultText.textContent = 'Result: YOU WON!';
        showMoves();
    }
    let showLose = () => {
        console.log("LOSE!");
        computerWins++;
        uiComputerWins.textContent = computerWins;
        resultText.textContent = 'Result: YOU LOST!';
        showMoves();
    }
    let showDraw = () => {
        console.log("DRAW!");
        resultText.textContent = 'Result: ITS A DRAW!';
        showMoves();
    }
    if (humanChoice === computerChoice)
    {
        showDraw();
        return;
    }
    switch (humanChoice)
    {
        case 'rock':
            if (computerChoice == "paper")
            {
                showLose();
                return;
            }
            else {
                showWin();
                return;
            }
        case 'paper':
            if (computerChoice == "scissors")
            {
                showLose();
                return;
            }
            else {
                showWin();
                return;
            }
        case 'scissors':
            if (computerChoice == "rock")
            {
                showLose();
                return;
            }
            else {
                showWin();
                return;
            }
    }
}

const RESET = () => {
    humanWins = 0;
    computerWins = 0;
    roundCount = 0;
    uiHumanWins.textContent = '0';
    uiComputerWins.textContent = '0';
    moveHistory.innerHTML = '';
}

const checkMaxWins = () => {
    if (humanWins >= 5 || computerWins >= 5)
    {
        RESET();
        return true;
    }
    return false;
}

const buttons = document.getElementById('buttons');
buttons.addEventListener('click', function (event) {
    let target = event.target;
    switch (target.id)
    {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});

const resetButton = document.querySelector('#results > button#reset');
resetButton.addEventListener('click', RESET);