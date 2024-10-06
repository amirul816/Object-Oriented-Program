const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main Street',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  console.log(person);
  console.log(person.greet());