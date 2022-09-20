// Rock Paper Scissors Game

const CHOICES = ["Rock", "Paper", "Scissors"];

const randomChoice = () => CHOICES[Math.floor(Math.random() * 3)];
const userInput = () => prompt(`
            Make your choice:
            1. Rock
            2. Paper
            3. Scissors
        `);

// Clean User Input
function cleanUserInput(userInput) {
    if (parseInt(userInput) == 1 || userInput.toUpperCase() == "ROCK" || userInput.toUpperCase() == "R")
        return "Rock";
    else if (parseInt(userInput) == 2 || userInput.toUpperCase() == "PAPER" || userInput.toUpperCase() == "P")
        return "Paper";
    else if (parseInt(userInput) == 3 || userInput.toUpperCase() == "SCISSORS" || userInput.toUpperCase() == "S")
        return "Scissors";
}

function playRPS(user, pc, score) {
    console.log("User: ", user);
    console.log("PC: ", pc);
    let result = "";

    if (user == pc) {
        result = 'DRAW'
        return `It's a ${result}!`;
    }
    else if (user == "Rock" && pc == "Scissors"
        || user == "Paper" && pc == "Rock" ||
        user == "Scissors" && pc == "Paper") {
        result = "WIN";
        score.user++;
    } else {
        result = "LOOSE";
        score.pc++;
    }

    return result == "WIN" ? `You ${result}! ${user} beats ${pc}` :
        `You ${result}! ${user} beats ${pc}`;
}

function play() {
    let score = { user: 0, pc: 0 };

    console.log("=== Best of 5 ===");

    while (score.user < 3 && score.pc < 3) {
        const pcChoice = randomChoice();
        let userChoice;
        do {
            userChoice = cleanUserInput(userInput());

            if (!userChoice) {
                console.log("Error: user input")
            }
        } while (userChoice == undefined);

        const string = playRPS(userChoice, pcChoice, score);

        console.log(string);
        console.log(score);
    }

    console.log(score.user > score.pc ? "YOU BEAT THE PC!" : "PC BEAT YOU!");

    repeat = parseInt(prompt(`Pay Again?
        1: No
        2: Yes`)) - 1;
    if (repeat == true) {
        play();
    }
}

play();