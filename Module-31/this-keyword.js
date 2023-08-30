// example-1
const rezaul = {
  birthYear: 1996,
  job: "Web Developer",
  calcAge: function () {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear - this.birthYear);
  },
};
rezaul.calcAge();

//example-2
const tanjila = {
  job: "Student",
  birthYear: 2000,
};
tanjila.calcAge = rezaul.calcAge;
tanjila.calcAge();

//example-3
class Student {
  constructor(name, id, result) {
    (this.name = name), (this.id = id), (this.result = result);
  }
}
const rk = new Student("Rezaul Karim", 1001, 3.21);
const tanu = new Student("Tanjila", 1002, 3.51);
console.log(rk);
console.log(tanu);
