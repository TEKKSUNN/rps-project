/* TODO:
    - take player choice
    - take computer choice
    - process and output result
*/
const choices = ["rock", "paper", "scissors"];
let humanWins;
let computerWins;

function playGame()
{
    humanWins = 0;
    computerWins = 0;
    for (let i = 0; i < 5; i++)
    {
        console.log(`ROUND ${i + 1}!`);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

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
    let showMoves = () => console.log(`You played ${humanChoice}, computer played ${computerChoice}`);
    let showWin = () => {
        console.log("WIN!");
        humanWins++;
        showMoves();
    }
    let showLose = () => {
        console.log("LOSE!");
        computerWins++;
        showMoves();
    }
    let showDraw = () => {
        console.log("DRAW!");
        humanWins++;
        computerWins++;
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

