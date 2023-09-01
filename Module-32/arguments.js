function sum(a, b, c) {
  // here a,b,c are called Parameters
  console.log(arguments); // Array like Object.
  console.log(arguments[4]); //6
  console.log(arguments.length); //8

  // we can make the arguments an array.
  const args = [...arguments];
  console.log(args); //[2, 3, 4, 5, 6, 7, 8, 9]

  return a + b + c;
}
const total = sum(2, 3, 4, 5, 6, 7, 8, 9); // Here 2,3,4,5 are called Argument.
console.log(total); // 9, Here first three arguments are calculated because the function has only three parameters.
console.log(sum.length); // 3, Here sum have 3 parameters - a,b,c.
