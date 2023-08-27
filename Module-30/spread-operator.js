// ========================
// Array  - Spread Operator
// ========================

// example-1-- Copying an array to new array
const array1=[1,2,3,4];
const array2=[...array1]
console.log(array2);//[1,2,3,4]

// example-2-- Combining Arrays
const firstSet = [1,3,5,7];
const secondSet = [2,4,6,8];
const combined = [...firstSet,...secondSet];
console.log(combined); //[1, 3, 5, 7, 2, 4, 6, 8];

// example-3-- Using in Function Arguments
function sum(a,b,c){
   return a+b+c;
}
const numb=[5,6,7]
console.log(sum(...numb));

// ========================
// Objects - Spread Operator
// ========================

//example-1 -- Copying Objects
const obj1={
   name:"Rezaul",
   age:23
}
const obj2={...obj1};
console.log(obj2);

//example-2 -- Merging Objects
const marks={
   bangla:90,
   english:70
}
const student ={
   name:"Rezaul",
   id:1001
}
const studenInfo ={...student,...marks};
console.log(studenInfo);

// ========================
// Strings - Spread Operator
// ========================
const country="Bangladesh";
console.log(...country);


// ========================
// Rest Parameters
// ========================
function printArgs(first, ...others) {
   console.log(first); // 1
   console.log(others); // [2, 3, 4]
}

printArgs(1, 2, 3, 4);

