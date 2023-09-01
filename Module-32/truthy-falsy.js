//========================
// Falsy Value
//========================
/*
1. false
2. 0
3. ""
4.null
5.undefined
6.NaN

Everything else in JavaScript is considered truthy.
*/
//========================
// Truthy value
//========================
/*
1. true
2. Any numbers (+ve or -ve) But not zero 0
3.[]
4.{}
5.function(){}
6."0"
7."false"
8. " "

*/
const x = NaN;
if (x) {
  console.log("Value of x is truthy");
} else {
  console.log("value of x is falsy");
}

//=====================================
// Check falsy
//=====================================
let p = "";
if (!p) {
  console.log("The value is falsy");
} else {
  console.log("the value is truthy");
}

//=====================================
// Check Truthy
//=====================================
const z = 2;
if (!!z) {
  console.log("Value is Truthy");
} else {
  console.log("Value is Falsy");
}
