class Model {
  
  constructor(numberOfDices){
    this.numberOfDices = numberOfDices;
    this.dices = [];
    for (let i=0; i<this.numberOfDices; i++){
      this.dices.push({
        id: i,
        value: 1,
        valueToString : function() {
          switch(this.value){
            case 1: return 'one'; break;
            case 2: return 'two'; break;  
            case 3: return 'three'; break;
            case 4: return 'four'; break;
            case 5: return 'five'; break;
            case 6: return 'six'; break;
            default: return 'unknown'; break;
          }
          
        }
      })
    }
  };

}
class View {
  constructor(){  
  };
}

class Controller {
  constructor(model, view){
    this.model = model;
    this.view = view;
  }
}