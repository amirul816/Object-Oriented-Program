// How to work Inheritance Static (porperty) keywords?

class Father {
  static greetParent() {
    return "Hello, I am the Father";
  }
}

class Son extends Father {
  static greetChild() {
    return "Hello, I am the child";
  }
}

console.log(Son.greetParent());
console.log(Son.greetChild());
