function startGame() {
  let dices = document.getElementsByClassName("dice");
  for (let i = 0; i < 10; i++) {
    dicing(i,dices);
  }
}

function dicing(times,dices) {
  setTimeout(function () {
    console.log(times);
    let value = Math.floor(Math.random() * 7);
    dices.forEach(set)
  }, times*100);
}
