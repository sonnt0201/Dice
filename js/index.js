var score = [];
var playerName = ["Player 1", "Player 2"];
const nameTextFields = document.getElementsByClassName("player-name");
for (element of nameTextFields) {
  element.addEventListener("change", inputCheck);
}

function inputCheck() {
  for (let index = 0; index < nameTextFields.length; index++) {
    playerName[index] =
      nameTextFields[index].value.length > 0
        ? nameTextFields[index].value
        : `Player ${index + 1}`;
  }
}
// When click Start Button
function startGame() {
  for (let i = 0; i < 10; i++) {
    dicing(i);
  }
}

function dicing(times) {
  setTimeout(function () {
    // Dicing for each dice
    for (let playerIndex = 0; playerIndex <= 1; playerIndex++) {
      let value = Math.floor(Math.random() * 6);
      setValue(value, playerIndex);
      score[playerIndex] = value;
    }

    // Dicing done
    if (times == 9) {
      if (score[0] > score[1]) {
        document.getElementsByClassName(
          "winner-announcement"
        )[0].innerHTML = `The Winner is ${playerName[0]}`;
      } else if (score[0] < score[1]) {
        document.getElementsByClassName(
          "winner-announcement"
        )[0].innerHTML = `The winner is ${playerName[1]}`;
      } else {
        document.getElementsByClassName("winner-announcement")[0].innerHTML =
          "Two players draw";
      }
    }
  }, times * 100);
}

// Set value for dices
function setValue(value, playerIndex) {
  // console.log(value);
  let stringValue;
  switch (value) {
    case 0:
      stringValue = "one";
      break;
    case 1:
      stringValue = "two";
      break;
    case 2:
      stringValue = "three";
      break;
    case 3:
      stringValue = "four";
      break;
    case 4:
      stringValue = "five";
      break;
    case 5:
      stringValue = "six";
      break;
    default:
      stringValue = "one";
      break;
  }
  document.getElementsByClassName("dice")[
    playerIndex
  ].className = `fa-solid fa-dice-${stringValue} dice`;
}

function reset() {
  for (let index = 0; index < playerName.length; index++) {
    setValue(0, index);
  }
  document.getElementsByClassName("winner-announcement")[0].innerHTML =
    "The winner is";
}

