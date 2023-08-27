console.log(Date());

console.log(new Date().getDate());
console.log(new Date().getUTCDate());

console.log(new Date().getFullYear());
console.log(new Date().getUTCFullYear());

console.log(new Date().getMonth());
console.log(new Date().getUTCMonth());

console.log(new Date().getDay());
console.log(new Date().getUTCDay());

console.log(new Date().getHours());
console.log(new Date().getUTCHours());

console.log(new Date().getMinutes());
console.log(new Date().getUTCMinutes());

console.log(new Date().getSeconds());
console.log(new Date().getUTCSeconds());

console.log(new Date().getMilliseconds());
console.log(new Date().getUTCMilliseconds());

console.log(Date.now()); // it use Date object that is available in browser. It is faster
console.log(new Date().getTime()); // It create new Date object. Then call its timestamp in milliseconds. 

console.log(new Date().getTimezoneOffset());

//MDN 
console.log(Date.now());
console.log(Date.parse());
console.log(Date.UTC());

// MDN Examples-1
console.log("======= MDN Examples-1 ==========");

const birthday1 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday2 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday3 = new Date(1995, 11, 17, 3, 24, 0);
const birthday4 = new Date(628021800000); // passing epoch timestamp

console.log(birthday1);
console.log(birthday2);
console.log(birthday3);
console.log(birthday4);

// MDN Examples-2
console.log("======= MDN Examples-2 ==========");
const date = new Date("2020-05-12T23:50:21.817Z");
const ddd1 =  date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
const ddd2 =  date.toDateString(); // Tue May 12 2020
const ddd3 =  date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
const ddd4 =  date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

const ddd5 =  date.toISOString(); // 2020-05-12T23:50:21.817Z
const ddd6 =  date.toJSON(); // 2020-05-12T23:50:21.817Z

const ddd7 =  date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

const ddd8 =  date.toLocaleString(); // 5/12/2020, 6:50:21 PM
const ddd9 =  date.toLocaleDateString(); // 5/12/2020
const ddd10 =  date.toLocaleTimeString(); // 6:50:21 PM


console.log(date);
console.log(ddd1);
console.log(ddd2);
console.log(ddd3);
console.log(ddd4);
console.log(ddd5);
console.log(ddd6);
console.log(ddd7);
console.log(ddd8);
console.log(ddd9);
console.log(ddd10);
