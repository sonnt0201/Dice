var dices = [
  { id: 0, name: "Player 1", val: 0 },
  { id: 1, name: "Player 2", val: 0 },
];
var result = dices.sort((a, b) => b.val - a.val);
// Set layout when add or remove a dice
function layoutForGrid(number) {
  //  Number of dices in a row
  for (const element of $(".dice-member")) {
    element.className = `col-md-${
      number % 3 == 0 || (number % 3 == 2 && number < 6)
        ? 4
        : number % 4 == 0 || number % 4 == 2 || number % 4 == 3
        ? 3
        : 6
    } dice-member`;
    if (dices.length >= 7) $(".dice").css("font-size", "12rem");
    else {
      $(".dice").css("font-size", "15rem");
    }
  }

  //   Size of dices
  $(".dice").css("font-size", `${30 / dices.length}`);
}
// Value Enums
function getVal(number) {
  switch (number) {
    case 0:
      return "one";
    case 1:
      return "two";
    case 2:
      return "three";
    case 3:
      return "four";
    case 4:
      return "five";
    case 5:
      return "six";
  }
}
// Dicing function
function dicing(times) {
  setTimeout(function () {
    // Dicing for each dice
    for (const dice of dices) {
      let val = Math.floor(Math.random() * 6);
      dice.val = val;
      $(".dice")[dice.id].className = `fa-solid fa-dice-${getVal(val)} dice`;
    }
    //   Sort the results
    console.log(result);

    // dicing done
    if (times == 9) winnerAnnouncement();
  }, times * 100);
}

function winnerAnnouncement() {
  let text = "The winner is: ";
  result = dices.sort((a, b) => b.val - a.val);
  for (const dice of result) {
    if (dice.val == result[0].val) {
      text += `${dice.name}, `;
      console.log(text);
    } else {
      break;
    }
  }
  $(".winner-announcement").eq(0).text(text.slice(0, -2));
}

function addListener () {
    for (let index = 0; index < dices.length; index++) {
        $(".player-name")
          .eq(index)
          .keyup(function () {
            dices[index].name = this.value ? this.value : `Player ${index}`;
            console.log(dices[index].name);
          });
      }
}
// Main
$(document).ready(function () {
  // Get players' name
  addListener();
  // Add a dice
  $("#add-dice").click(function () {
    if (dices.length >= 10) return;
    dices.push({
      id: dices.length,
      name: `Player ${dices.length + 1}`,
      val: 1,
    });
    $("#dice-grid").append(
      `<div class="col-md-6 dice-member">
                <p style="text-align: center;">
                    <input type="text" class="player-name" maxlength="15" placeholder="Player ${dices.length}">  <br>
                    <i class="fa-solid fa-dice-one dice"></i>
                </p>
            </div>`
    );
    result = dices; 
    layoutForGrid(dices.length);
    addListener ();
  });

  // Remove a dice
  $("#remove-dice").click(function () {
    if (dices.length == 2) return;
    $(".dice-member")[dices.length - 1].remove();
    dices.pop();
    result = dices;
    layoutForGrid(dices.length);
    addListener ();
  });

  // TODO: - History on
  // When click Start Button
  $("#btn-start").click(function () {
    for (let i = 0; i < 10; i++) {
      dicing(i);
    }
  });
});
