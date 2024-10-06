//By using object constructor;
// function
function person(){
   this.fast_name = "Rabbil"
   this.last_name = "Hasan"
   this.age = 34
   this.city = "Dhaka"
   this.isBangladesi = true
   this.getName = function() {
    return this.fast_namea+ this.last_name;
   }
}

// create instance
let PersonInstant = new person();
console.log(PersonInstant);

