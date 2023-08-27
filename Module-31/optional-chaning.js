//================================
//Optional chaining -- With optional chaining, you can access the nested property without having to check each level.
//================================

//example-1--Object
const user1={
   name:"Rezaul",
   profile: {
      address: {
        city: "New York"
      }
    }
}
const city1=user1.profile?.address?.city;
console.log(city1);
const user2={
   name:"Rezaul",
   profile: null
}
const city2=user2.profile?.address?.city;
console.log(city2);

//Example-2 -- Array
const arr = [2,4,5,6];
const x=arr?.[4];
console.log(x);

//Example-3 -- Function Calls
const userInfo={
   name:"Rk",
   birthYear:1996,
   calcAge(){
      return 2023-this.birthYear;
   }
}
const age=userInfo?.calcAge();
console.log(age);


//================================
//Combining with Nullish Coalescing ?? to set a default value.
//================================
const user3={
   name:"Rk",
   profile: {
      address: {
         country:"Bangladesh"
      }
    }
}

const city3= user3.profile?.address?.city??"City Name is not provided.";
console.log(city3);


