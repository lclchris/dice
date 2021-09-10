function random() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = random();
var randomNumber2 = random();

var randomDiceImg1 = document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomDiceImg2 = document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
