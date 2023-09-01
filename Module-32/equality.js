//================================
// 1. Loose Equality (==) / (!=)
//================================
/*
"5" == 5;       // true, because the string is coerced to a number
"5" == "5";     // true, same types and values
true == 1;      // true, because `true` is coerced to the number 1
false == 0;     // true, because `false` is coerced to the number 0
null == undefined; // true, they're considered equal with loose comparison.
*/

//====================================
// 2. Strict Equality (===) / (!==)
//====================================
/*
"5" === 5;       // false, different types
"5" === "5";     // true, same types and values
true === 1;      // false, different types
false === 0;     // false, different types
null === undefined; // false, different types

*/
//=======================
// Objects and Equality
//=======================
/*
{} == {};           // false, different objects in memory
{} === {};          // false, different objects in memory
let obj = {};
let anotherObj = obj;
obj === anotherObj;  // true, both variables reference the same object
*/

