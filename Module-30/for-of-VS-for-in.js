//===========================================
// for of -- can use with Array and String
//===========================================
//Array
const friends=["Abul","Babul","Kabul"];
for (const friend of friends) {
   console.log(friend);
}

//String
const st="Rezaul Karim";
for (const letter of st) {
   console.log(letter);
}
//===========================================
// for in -- can use with Object
//===========================================

const student6={
   name:"Tisha",
   age:10
}
for (const key in student6) {
   const values=student6[key]
   console.log(key,values);
}

// we can do the same by using for of loop in a different way

const stKeys=Object.keys(student6);
for (const key of stKeys) {
   const value=student6[key];
   console.log(key,value);
}