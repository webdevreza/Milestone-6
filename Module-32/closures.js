//===================================
// Closures-- A closure is a function that has access to the parent scope's variables, even after the parent function has finished executing.
//===================================

//example-1
function stopWatch() {
  let counter = 0;
  return function () {
    counter++; // Here, counter variable have access to its parent scope. So it is called Closures
    return counter;
  };
}
const watch1 = stopWatch();
console.log("watch-1:", watch1());
console.log("watch-1:", watch1());
console.log("watch-1:", watch1());


const watch2 = stopWatch();
console.log("watch-2:", watch2());
console.log("watch-2:", watch2());
console.log("watch-2:", watch2());


const watch3 = stopWatch();
console.log("watch-3:", watch3());
console.log("watch-3:", watch3());
console.log("watch-3:", watch3());


//Example-2
function outerFunction() {
   let outerVariable = "I'm an outer variable";

   return function innerFunction() {
       console.log(outerVariable);
   };
}

const closureFunction = outerFunction();
closureFunction();  // This will log "I'm an outer variable"
/*
In the above example:

-- outerFunction defines a variable outerVariable.
-- outerFunction returns the innerFunction.
-- We invoke outerFunction and store the returned function (i.e., innerFunction) in the closureFunction variable.
-- Even though outerFunction has finished executing and its context should theoretically be gone, the innerFunction (now stored in closureFunction) still has access to outerVariable. This is a closure in action.
*/











