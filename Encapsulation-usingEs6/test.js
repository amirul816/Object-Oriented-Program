class Person {
  constructor(name, age) {
      this.name = name; // Public field
      this._age = age;  // Protected field (by convention, not enforced by JavaScript)
  }

  getAge() {
      return this._age; // Public method
  }

  setAge(newAge) {
      if (newAge > 0) {
          this._age = newAge; // Public method to update age
      }
  }
}

const person = new Person('Alice', 30);
console.log(person.name); // 'Alice'
console.log(person.getAge()); // 30
person.setAge(31);
console.log(person.getAge()); // 31
