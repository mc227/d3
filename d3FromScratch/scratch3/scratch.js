function makeCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const counter = makeCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3