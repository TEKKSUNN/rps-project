/* TODO:
    - take player choice
    - take computer choice
    - process and output result
*/
const choices = ["rock", "paper", "scissors"];

function playGame()
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
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
        else
        {
            continue;
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
        showMoves();
    }
    let showLose = () => {
        console.log("LOSE!");
        showMoves();
    }
    let showDraw = () => {
        console.log("DRAW!");
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

