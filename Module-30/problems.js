// Problem-2
const checkLength = (arr) => {
  const evenFriends = [];
  for (const item of arr) {
    if (item.length % 2 == 0) {
      evenFriends.push(item);
    }
  }
  return evenFriends;
};

const friends = ["Abul", "Habul kha", "Kabuli wala", "Bulbul"];
console.log(checkLength(friends));

// problem-3
const square = (numbersArray) => {
  let total = 0;
  for (let number of numbersArray) {
   number*=number;
   total+=number;
  }
  return total;
};
const numbers = [2,3,4];
console.log(square(numbers));

//problem-4

const findMax=(arr1,arr2)=>{
  const together=[...arr1,...arr2];
return Math.max(...together);
}
const number1=[12,33,23,34,55,20];
const number2=[32,13,54,64,35,27];

console.log(findMax(number1,number2));
