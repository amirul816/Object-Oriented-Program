class Person {
  first_name = "Rabbil"
  last_name = "Hasan"
  age = 34
  postCode = 30
  isBangladeshi = true

  getName() {
    return "My name is " + this.first_name + " "+ this.last_name
  }

}

let PersonObj = new Person();

console.log(Person);
console.log(PersonObj);
console.log(PersonObj.getName());
console.log(PersonObj.postCode);
