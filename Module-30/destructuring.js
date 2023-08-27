// ========================
// Object Destructuring
// ========================

//example-1
const student = {
  name: "Rezaul karim",
  age: 28,
  Id: 1604029,
  cgpa: 3.21,
};
const { name, age, Id: roll, cgpa } = student;// id is renamed as roll
console.log(name);
console.log(age);
console.log(roll);
console.log(cgpa);

//example-2 - Default Values
const person ={
   firstName:"Rezaul",
   lastName:"Karim"
}
const {firstName,middleName="Unknown",lastName}=person;
console.log(firstName,lastName,middleName);

//example-3 - Nested Destructuring
const movies ={
   bangla:{
      romantic:"Moner majhe tumi",
      horror: "Bhoot"
   },
   english:{
      drama:"piano",
      sciFi:"Avengers"
   }
}
const {
   bangla:{romantic,horror},
   english:{drama,sciFi}
}=movies;

console.log(romantic,horror,drama,sciFi);

//example-4 - Spread Operator
const position ={
   first:"Rezaul",
   second:"Taskin",
   third:"Sakib",
   others:"Amin,jamin,dalim",
   
}
const { first, ...rest } = position;

console.log(first); 
console.log(rest);      
console.log(rest.second);      
console.log(rest.third);      
console.log(rest.others);  


// ========================
// Array Destructuring
// ========================

// example-1- Basic
const [a,b]=[100,200];
console.log(a,b);

const arr = [10,20,30];
const[x,y,z]= arr;
console.log(x,y,z);

// example-2- Skip values using commas
let [p, , r] = [7, 8, 9];
console.log(p,r); // 7,9

// example-3- Using the rest parameter
let [s,t, ...restItems] = [10, 20, 30, 40];
console.log(s,t); // 10
console.log(restItems); // [20, 30, 40]

// example-4- Returning multiple values from a function
function getCoordinates() {
   return [10.5, 25.7];
}
let [ww, yy] = getCoordinates();
console.log(ww, yy); // 10.5 25.7

// example-5-Iterating over arrays of arrays

const colors=[
   ["black","#000"],
   ["white","#fff"],
   ["gray","#ddd"]
];

for (const [colorName,colorHex] of colors) {
   console.log(colorName,colorHex);
}

// ========================
// Function Parameter Destructuring
// ========================

// Example-1- Object Destructuring:
const person2 = {
   name: 'John',
   age: 25,
   city: 'New York'
 };
 function introduce({name, age, city = 'Unknown'}) {
   console.log(`Hi, I'm ${name}, ${age} years old from ${city}.`);
 }
 
 introduce(person2);  // "Hi, I'm John, 25 years old from New York."
 

// Example-2-Using Default Values:
function greet({ name = 'Guest', message = 'Hello' }) {
   console.log(`${message}, ${name}!`);
 }
 
 greet({ name: 'John' });            // Output: "Hello, John!"
 greet({ message: 'Welcome' });      // Output: "Welcome, Guest!"
 greet({});                          // Output: "Hello, Guest!"
 
 //exaample-3- Array Destructuring:
 function coordinates([x, y]) {
   console.log(`X: ${x}, Y: ${y}`);
 }
 
 coordinates([10, 20]); // Output: "X: 10, Y: 20"
 
//  example-4- Rest Parameters with Destructuring:
 function userInfo({ name, ...rest }) {
   console.log(`Name: ${name}`);
   console.log(rest);
 }
 userInfo({ name: 'Mike', age: 25, country: 'USA' });
 // Output: 
 // Name: Mike
 // { age: 25, country: 'USA' }
 

 //example-5- Nested Destructuring:
 function showAddress({ user: { name }, address: { city, country } }) {
   console.log(`${name} lives in ${city}, ${country}`);
 }
 
 const data = {
   user: {
     name: 'Emma',
     age: 28
   },
   address: {
     city: 'London',
     country: 'UK'
   }
 };
 
 showAddress(data);  // Output: "Emma lives in London, UK"
 