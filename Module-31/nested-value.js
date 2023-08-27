// example-1
const data=[{id:1001,name:"Rezaul Karim",university:"PSTU"}];
console.log(data[0].university);

//example-2
const product={
   total:1394,
   data:[
      {id:1,name:"Lenovo Laptop", price:34000},
      {id:2,name:"Mac mini", price:65000}
   ]
}
console.log(product.data[1].price);

// example-3
const userInfo={
   id:1223,
   name:"Rezaul Karim",
   address:{
      home:"Kalkini, Madaripur.",
      office:"Khilkhet, Dhaka."
   }
}
console.log(userInfo.address.office);
