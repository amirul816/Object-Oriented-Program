class Father {
   num1 = 10;
   num2 = 20;

   addNum() {
    let sum = this.num1+this.num2;
    console.log(sum)
   }
}

// Inheritence

class Son extends Father{
    
}
 let SonObj = new Son();

 console.log(SonObj.addNum());
 console.log(SonObj);