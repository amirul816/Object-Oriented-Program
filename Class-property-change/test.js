class person{

    num1 = 20;
    num2 = 39;
    constructor(a,b){
      this.num1 = a;
      this.num2 = b;  
    }
   addTwoNumber(){
    return this.num1+this.num2;
   }
  };

  let ObjectConstructor = new person(50,60);
  console.log(ObjectConstructor.addTwoNumber())
 


  