//============
//find -- The find method returns the value of the first element in an array that satisfies the provided testing function. If no value satisfies the testing function, it returns undefined.
//============
const numbers = [2, 3, 4, 5, 6, 7];

const found = numbers.find(function (number) {
  return number > 4;
});
console.log(found);