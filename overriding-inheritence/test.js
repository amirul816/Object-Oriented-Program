class Father {
  addNumber(){
     let num1 = 22;
     let num2 = 33;
     console.log(num1+num2)
  }
}

class Son extends Father {
  addNumber(){
    let num1 = 220;
    let num2 = 330;
    console.log(num1+num2)
 }
}

let SonObj = new Son();
console.log(SonObj.addNumber());
let ParObj = new Father();

console.log(ParObj.addNumber());
