let person = Object();
person.first_name = "Abrar";
person.last_name = "Galib";
person.age = 34;
person.city = "Dhaka";
person.isBangladesh = true;

person.getName = (getName) => {
  return "My name is " + person.first_name + " " + person.last_name;
};

console.log(person.getName());
