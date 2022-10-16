class Model {
  constructor(numberOfDices) {
    this.numberOfDices = numberOfDices;
    this.dices = [];
    for (let i = 0; i < this.numberOfDices; i++) {
      this.dices.push(i);
    }
    this.history = [];
  }

  addDice() {
    this.numberOfDices++;
    this.dices.push({
      // a dice model
      id: this.numberOfDices, // index begin with 0;
      value: 1,
      valueToString: function () {
        switch (this.value) {
          case 1:
            return "one";
            break;
          case 2:
            return "two";
            break;
          case 3:
            return "three";
            break;
          case 4:
            return "four";
            break;
          case 5:
            return "five";
            break;
          case 6:
            return "six";
            break;
          default:
            return "unknown";
            break;
        }
      },
    });
  }

  deleteDice() {
    this.dices.pop();
  }

  history() {
    return [];
  }
}

const model = new Model(2);
// console.log(model.numberOfDices);
// console.log(model.dices[0]);
// model.addDice()
// console.log(model.numberOfDices);
// model.dices[2].value = 3;
// console.log(model.dices[2].valueToString());
class View {
  constructor() {}
  root() {
    return document.getElementById("root");
  }
  createElement(tag, classList, content) {
    const element = document.createElement(tag);
    for (let index = 0; index < classList.length; index++) {
      element.classList.add(classList[index]);
    }
    element.innerHTML = content;
    console.log(element);
    this.root().appendChild(element);
    return element;
  }
}

const view = new View();
view.createElement(
  "button",
  ["btn", "btn-outline-success", "btn-lg", "btn-start"],
  "Start"
);
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
