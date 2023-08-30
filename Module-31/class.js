//=============================
//class
//=============================

//example-1
class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
  }
}
const person1 = new Person("Rezaul Karim", 1996);
console.log(person1);
console.log(person1.age());

// example-2
class Player {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  play(status) {
    console.log(`${this.name} is playing ${status}.`);
  }
}

const player1 = new Player("Sakib", 30);
const player2 = new Player("Taskin", 28);
player1.play("bad");
player2.play("well");

//=======================================
//class -- with Prototypical inheritance
//=======================================

class Vehicles {
  constructor(name, price, wheels) {
    (this.name = name), (this.price = price), (this.wheels = wheels);
  }
  move() {
    console.log(
      `Amar ${this.price} takar ${this.wheels} chakar ${this.name} ase.`
    );
  }
}
const motorBike = new Vehicles("Pulser", 120000, 2);
motorBike.move();

// extend
class Bus extends Vehicles {
  constructor(name, price, wheels, seats, acNonAc) {
    super(name, price, wheels), (this.seats = seats), (this.acNonAc = acNonAc);
  }
}
const greenLine = new Bus("SCANIA", 2000000, 6, 30, "AC");
console.log(greenLine);

//extend
class Truck extends Vehicles {
  constructor(name, price, wheels, capacity) {
    super(name, price, wheels), (this.capacity = capacity);
  }
}
const malbahiTruck = new Truck("Big Boos", 1500000, 6, "10 Ton");
console.log(malbahiTruck);
