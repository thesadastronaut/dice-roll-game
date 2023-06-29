window.onload = playGame();

function playGame(){

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const dice1 = document.getElementsByClassName("img1")[0];
    dice1.src = "images/dice" + randomNumber1 + ".png";
    const dice2 = document.getElementsByClassName("img2")[0];
    dice2.src = "images/dice" + randomNumber2 + ".png";

    const result = document.querySelector("h1");

    if (randomNumber1 === randomNumber2) {
        result.innerHTML = "It's a Draw!";
    } else if (randomNumber1 > randomNumber2) {
        result.innerHTML = "Player 1 Wins! 🏁";
    } else if (randomNumber2 > randomNumber1) {
        result.innerHTML = "Player 2 Wins! 🏁";
    };
}