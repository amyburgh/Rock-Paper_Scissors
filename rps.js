// Rock Paper Scissors Game
const DEFAULT_MSG = "- Best of 5 -";
const CHOICES = ["Rock", "Paper", "Scissors"];
let SCORE = { user: 0, pc: 0 };
const HANDS = {
    Rock: './images/hands/rock-left.png',
    Paper: './images/hands/paper.png',
    Scissors: './images/hands/scissors.png'
};
const MSG = {
    you: './images/you.png',
    win: './images/win.png',
    loose: './images/loose.png'
};

// START HERE
const select = document.querySelectorAll('.card');
select.forEach(choice => choice.addEventListener('click', play));

const randomChoice = () => CHOICES[Math.floor(Math.random() * 3)];

function playRPS(user, pc) {
    let result = "";

    if (user == pc) {
        result = 'DRAW'
    }
    else if (user == "Rock" && pc == "Scissors"
        || user == "Paper" && pc == "Rock" ||
        user == "Scissors" && pc == "Paper") {
        result = "WIN";
        SCORE.user++;
    } else {
        result = "LOOSE";
        SCORE.pc++;
    }

    return result;
}

function updateResults(val, user, pc) {
    const result = document.querySelector('#result');
    const reason = document.querySelector('#reason');

    if (val === "DRAW") {
        result.textContent = `It's a ${val}`;
        reason.textContent = `${user} draws with ${pc}`
    }
    else {
        result.textContent = `You ${val}!`;
        reason.textContent = val == "WIN" ? `${user} beats ${pc}` :
            `${pc} beats ${user}`;
    }
}

function updateHands(user, pc) {
    document.querySelector('.user').src = HANDS[user];
    document.querySelector('.pc').src = HANDS[pc];
}

function updateScore() {
    document.querySelector('#player-score').textContent = `Player: ${SCORE.user}`;
    document.querySelector('#pc-score').textContent = `${SCORE.pc} :Computer`;
}

function checkScore() {
    if (SCORE.user < 5 && SCORE.pc < 5)
        return;
    document.querySelector('.user').src = MSG.you;
    if (SCORE.user === 5)
        document.querySelector('.pc').src = MSG.win;
    else if (SCORE.pc === 5)
        document.querySelector('.pc').src = MSG.loose;
    SCORE = { user: 0, pc: 0 };
}

function play(e) {
    const pcChoice = randomChoice();
    const userChoice = e.target.name;

    const string = playRPS(userChoice, pcChoice);

    updateResults(string, userChoice, pcChoice);
    updateHands(userChoice, pcChoice);
    updateScore();
    checkScore();
}