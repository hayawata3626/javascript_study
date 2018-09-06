class Es2015Car {
  constructor(){
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear(){
    return this._userGear;
  }
  set userGear(value){
    if(this._userGears.indexOf(value) < 0) {
      throw new Error(`ギア指定が正しくありません:${value}`);
    }
    this._userGear = value;
  }
  shift(gear) {
    this._userGear = value;
  }
}

function Es5Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ["P", "N", "R", "D"];
  this._userGear = this.userGears[0];
}

console.log(typeof Es2015Car);
console.log(typeof Es5Car);