// Rock Paper Scissors Game

const score = { user: 0, pc: 0 };
const choices = ["Rock", "Paper", "Scissors"];

let repeat = true;
while (repeat) {
    const pcChoice = () => choices[Math.floor(Math.random() * 3)];

    const userInput = prompt(`
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

    function playRPS(user, pc) {
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

    const string = playRPS(cleanUserInput(userInput), pcChoice());

    console.log(string);
    console.log(score);
    repeat = parseInt(prompt(`Pay Again?
        1: No
        2: Yes`)) - 1;
}