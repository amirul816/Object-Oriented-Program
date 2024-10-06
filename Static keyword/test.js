class person {
   static fname = "John"
   static lname = "Doe"
   static getName(){
      return "My name is" +this.fname+" "+ this.lname;
    }
    
  }
  // let PersonObj = new person();
  // console.log (PersonObj.getName());

  console.log (person.getName());
  console.log (person.fname);
  console.log (person.lname);