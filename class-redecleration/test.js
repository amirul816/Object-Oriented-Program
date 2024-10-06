let Person = class{
   num1 = 10
   num2 = 20


  addTwoNum() {
    return this.num1+this.num2
  }

}

let Person = class{
   num1 = 1
   num2 = 2


  addTwoNum() {
    return this.num1+this.num2
  }

}

let PersonObj = new Person();

console.log(Person);
console.log(PersonObj.addTwoNum);

