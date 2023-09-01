//==========================
//8 way to get undefined
//==========================
/*
1. Variable that is not initialized will give undefined.
2. Function that has no return / console.log, will give undefined.
3. Function parameters that is not passed will be undefined.
4. If we don't tell what to return then it will return undefined.
5. If we call a property of an object that doesn't exist, then it will give undefined.
6. Accessing array index that doesn't exist, then it will give undefined.
7. Deleting an element inside an Array.
8. set a value directly to undefined.

*/

// example-1
let x;
console.log(x);

//example-2
function add(a, b) {
  const total = a + b;
  // console.log(total);
}
console.log(add(4, 5));

//example-3
function sum(a, b, c, d) {
  console.log(a, b, c, d);
}
sum(4, 6);

// example-4
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return; // If we don't tell what to return then it will return undefined.
  }
  return a + b;
}
// console.log(noNegative(2,5));
console.log(noNegative(2, -5));
// example-5
const student = {
  name: "Abul",
  id: 1001,
};
console.log(student.class);
// example-6
const myFriends = ["Anik", "Manik", "Panik"];
console.log(myFriends[30]);

// example-7
delete myFriends[1]; // don't delete this way. This is Bad practice. rather than use splice
console.log(myFriends);
console.log(myFriends[1]);

// use this splice to delete
myFriends.splice(1, 1); // starting index, number of items to be deleted.
console.log(myFriends);

// example-8
const userId = undefined; //don't delete this way. use null for this.
console.log(userId);

//==============================
// undefined vs null
//==============================
console.log(typeof undefined);
console.log(typeof null);

const data = { result: [], updated: null };
// If we use to set empty value then we should set null.
