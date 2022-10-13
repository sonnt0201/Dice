var score = [];
var playerName = [];

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
      setValue(value,playerIndex);
      score[playerIndex] = value;
    }

    // Dicing done
    if (times == 9) {
      if (score[0] > score[1]) {
        document
          .getElementsByClassName("winner-announcement")[0]
          .innerHTML = "The Winner is Player 1";
      } else if (score[0] < score[1]) {
        document
          .getElementsByClassName("winner-announcement")[0]
          .innerHTML = "The winner is Player 2";
      } else {
        document
          .getElementsByClassName("winner-announcement")[0]
          .innerHTML = "Two players draw";
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
  document
    .getElementsByClassName("dice")[playerIndex]
    .className = `fa-solid fa-dice-${stringValue} dice`;
}
