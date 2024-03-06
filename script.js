'use strict';

const body = document.querySelector("body");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const check = document.querySelector(".check");
const reveal = document.querySelector(".number");
const again = document.querySelector(".again");
const high_score = document.querySelector(".highscore");

console.log(again);
console.log(high_score);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");

let tries = Number(score.textContent);
let highScore = 0;

const reset = function () {
    message.textContent = "Start Guessing...";
    number.value = "";
    score.textContent = "20";
    reveal.textContent = "?"
    tries = 20;
    body.style.backgroundColor = "#222222";
}

again.addEventListener("click", reset);

check.addEventListener("click", function () {
    const guess = document.querySelector(".guess");
    const value = guess.value;
    if (!value) {
        message.textContent = "❎ No number!";
    } else {
        const input = Number(value);
        if (tries > 0) {
            if (input === secretNumber) {
                reveal.textContent = secretNumber;
                message.textContent = "😃 Correct Number!"
                highScore = tries * 10;
                high_score.textContent = highScore;
                body.style.backgroundColor = "#60B347";
                number.style.width = "30rem";
            } else {
                const result = input > secretNumber ? "⬆️ Too High!" : "⬇️ Too Low!";
                message.textContent = result;
                tries--;
                score.textContent = tries;
            }
        } else if (tries === 0){
            message.textContent = "😞 You lost the game!"
            tries = 20;
        }
    }
});