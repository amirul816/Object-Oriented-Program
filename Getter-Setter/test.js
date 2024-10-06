class Product {
  set SetPrice(value){
    this.price = value;
  }
  get GetPrice(){
    return this.price;
  }
};

let ProductoObj = new Product();
ProductoObj.SetPrice = 100;
console.log(ProductoObj);