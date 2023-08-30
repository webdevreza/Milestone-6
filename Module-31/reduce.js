//==============
//reduce
//==============
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
console.log(sum);
// reduce can remember previous value