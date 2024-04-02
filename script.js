let userScore = 0;
let comScore = 0;

const userScoreg = document.querySelector(".usc");
const comScoreg = document.querySelector(".comsc");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    //rock paper scissors
    const rndmIdx = Math.floor(Math.random() * 3);
    return options[rndmIdx];
}
const drawgame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "black";
};
const showwinner = (userWin, userChoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScoreg.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        comScoreg.innerText = comScore;
        // console.log("You Lose");
        msg.innerText = `You Lost. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //generate computer choice
    const compchoice = gencompchoice();
    // console.log("comp choice = ", compchoice);
    if (userChoice === compchoice) {
        drawgame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compchoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compchoice === "rock" ? true : false;
        } else if (userChoice === "scissor") {
            userWin = compchoice === "paper" ? true : false;
        }
        showwinner(userWin, userChoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});