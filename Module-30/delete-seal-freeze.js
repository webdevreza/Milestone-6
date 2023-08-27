// ========================
// delete 
// ========================
//Example-1
const Authors={
   novel:"Rabindranath Tagar",
   poet:"sukanto",
   villagePoet:"Jashim Uddin",
   angryPoet:"Kaji Najrul Islam"
};
console.log(Authors);
delete Authors.poet;
console.log(Authors);

//Example-2
const singers={
   romantic:"Andraw  Kishor",
   sad:"Emon",
   rap:"Dj Bappy"
}
console.log(singers);
const {rap, ...restSingers}=singers;
console.log(restSingers);

// ========================
// Freeze--  it prevents new properties from being added to it, existing properties from being removed, and prevents changing the enumerability, configurability, or writability of existing properties. It also prevents the values of existing properties from being changed. 
// ========================
const person ={
   name:"Rezaul",
   age:28
}
person.birthYear=1998;// before freeze I can add new entries
console.log(person);

Object.freeze(person);

person.name="Rezaul Karim" // can't update value
person.sex="Male"; // can't add new entries 
delete person.age; // can't delete
console.log(person);

// ========================
// Seal - it prevents new properties from being added and existing properties from being removed. However, the values of existing properties can still be changed as long as they are writable. 
// ========================

const person2={
   name:"Tanjila",
   age:23
}

Object.seal(person2);

person2.name="Tanjila Islam"; // can update value.
person2.sex="Female";// can't add new entries 
delete person2.age;// can't delete
console.log(person2);



