// Case stydy: when constructor inside only parent class (what happened)
////////////////////////////////////////////////////
// class Father{
//   constructor(){
//     console.log("I am a constructor of a father class")
//   }  
// }
// class Son extends Father{
// }
// new Son();



// constructor inside only parent class pass parameters by parent and son (what happened)
/////////////////////////////////////////////////////////////

// class Father{
//   constructor(msg){
//     console.log(msg)
//   }  
// }
// class Son extends Father{
// }
// new Son("I ama constructor o son");
// new Father("I am construtor of father")



// constructor inside only child class (what happened)
////////////////////////////////////////////////////////

// class Father{
//   }
//   class Son extends Father{
//     constructor(msg) {
//       super() // its used for permission of parent class
//       console.log(msg)
//     }
//   }
//   new Son("child class pass parameter");

//   new Father("is not work"); // parent can't used this constructor


// constructor inside  child and parent class both (what happened)
/////////////////////////////////////////////////////////
// class Father{
//   constructor() {
//     console.log("I am father constructor");
//       }
//     }
//     class Son extends Father{
//         constructor() {
//           super()
//           console.log("I am son constructor");
//             }     
//     }
//     new Son();
//     new Father(); 


    // constructor inside child and parent class both pass parameters (what happened)
    /////////////////////////////////////////////////////
    class Father{
      constructor(msg) {
        console.log(msg);
          }
        }
        class Son extends Father{
            constructor(msg) {
              super()
              console.log(msg);
                }     
        } 
        new Son("Son parameter");
        new Father("Father parameter"); 