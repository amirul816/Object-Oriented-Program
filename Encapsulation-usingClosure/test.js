function createCounter(){
  let count = 1;

  return{
    increment:function(){
      count++;
  },
  decrement:function(){
    count --;
  },
  getCount:function(){
    return count;
  }
}
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
console.log(createCounter().getCount());