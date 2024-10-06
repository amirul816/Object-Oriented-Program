// // Method Overloading
class Myclass {
  myMethod(p, p2, p3) {
    if (arguments.length === 1) {
      console.log("Received one argurment: ", p);
    } else if (arguments.length === 2) {
      console.log("Received two  argurment: ", p, p2);
    } else if (arguments.length === 3) {
      console.log("Received three argurment: ", p, p2, p3);
    } else {
      console.log("Invalid Arguments");
    }
  }
}
let Obj = new Myclass();
Obj.myMethod(6);
Obj.myMethod(5, 3);
Obj.myMethod(1, 7, 4);
Obj.myMethod();
