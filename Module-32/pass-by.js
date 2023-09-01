// ===============================
// Primitive -- in Primitive, if we set new value inside a function it doesn't change the original value. It only  change inside the function.
// ===============================
const numb1=4;
const numb2=6;

function sum(a,b){
   a=20; 
   return a+b;
}
const result = sum(numb1,numb2);
console.log(result);
// ===============================
// Non-Primitive --  Object and Array are pass by reference.
// In Array or Object, if we set new value for a parameter inside a function it change in the outer scope ( original array or Object). 
// ===============================

const student1={name:"Anis", Partner:"Kanis"}
const student2={name:"Manik", Partner:"Panik"}

function makeMovie(couple1,couple2){
   couple1.name="Anonto",
   couple2.Partner="Popy"
}
console.log(student1); // Anis
console.log(student2); // Panik
makeMovie(student1,student2);
console.log(student1); // Anonto
console.log(student2); // Popy