//=================
//filter - return a new array with filtered items
//=================
//=======using with Array==========
//example-1
const numbers = [12, 34, 33, 28, 74, 93, 64, 11];
const oddNumbers = numbers.filter(function (number) {
  return number % 2 === 1;
});
console.log(oddNumbers);

//example-2
const friends = ["FH Sagor", "Tanbir Khan", "Nazmul Hossain", "Muhsinul islam"];
const evenFriends = friends.filter(function (frnd) {
  return frnd.length % 2 === 0;
});
console.log(evenFriends);

//==========Using with Object==========
const users = [
   { id: 1001, name: "Reza" },
   { id: 1002, name: "Md. Miraj" },
   { id: 1003, name: "Miraj" },
   { id: 1004, name: "Cadet Miraj" },
 ];
 
 const mStartingUsers = users.filter(function (item) {
   return item.name.startsWith("M");
 });

 console.log(mStartingUsers);
 