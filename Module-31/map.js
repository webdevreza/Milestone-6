//================================
//map loop over an array and return a new array. But doesn't change in the previous array.
//================================
//example-1
const number = [2, 3, 4, 5, 6];
const double = number.map(function (num) {
  return num * 2;
});
console.log(double);

//example-2
const squareNumber = function (num) {
  return num * num;
};
console.log(number.map(squareNumber));

//example-3
const numbers2 = [10, 20, 30, 40];
const half = numbers2.map((number) => number / 2);
console.log(half);
//example-4
const friends = ["Anis", "Manish", "Panish", "Vanish"];

const frndName = friends.map(function (frnd) {
  return frnd.length;
});
console.log(`Friends Name Length: ${frndName}`);
//Example-5 - use map with string
const text = "Bangladesh";
const letters = [...text].map(function (letter) {
  return letter;
});
console.log(letters);

//=============================================================
// Map() object. new Map() return an object with key,value pair.The key can be any data type's (string,number,boolean) in Map object;
// But regular object's key can be string only. This is the main difference between Map and Object
//=============================================================
let mapObj = new Map();

// set key-values in Map object;
mapObj.set("name", "Rezaul");
mapObj.set("Id", 1002);
mapObj.set(1, "Number One");
mapObj.set(true, "Good Student");

console.log(mapObj);

// get values from the Map
console.log(mapObj.get("name"));
console.log(mapObj.get("Id"));
console.log(mapObj.get(1));
console.log(mapObj.get(true));

// checking if key exists
console.log(mapObj.has("name")); // true

// looping on Map
mapObj.forEach(function (value, key) {
  console.log(`Key: ${key}, value:${value}`);
});
