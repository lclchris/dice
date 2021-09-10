function random() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  var randomNumber1 = random();
  var randomNumber2 = random();

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    document.querySelector(".button2").removeAttribute("disabled");
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector(".button2").removeAttribute("disabled");
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector(".button2").removeAttribute("disabled");
  }
}

function reset() {
  return document.location.reload();
}
