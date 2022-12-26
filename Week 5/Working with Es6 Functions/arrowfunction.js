function addFive(num)
  {
   return num;
 }
  // TODO: Convert addFive() to arrow function
  
  addFive = (num) => { return num+5}
  console.log(addFive(5));

  function divideBy(x, y)
   {
    return x / y;
  }
  // TODO: Convert divideBy() to arrow function
  divideBy = (x,y) => { return x/y}
  console.log(divideBy(4,2))
  
  function logToConsole() 
  {
    let msg = "MIT Coding Certificate";
    console.log(msg);
  }
  // TODO: Convert logToConsole() to arrow function
  let msg=() => {console.log("MIT Coding Certificate");}
  console.log(msg());