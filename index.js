function printClassName(name) {
  console.log("___________________________");
  console.log(`Now testing ${name}() class`);
}

class Fish {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    return `Hello, my name is ${this.name}`;
  }
}

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Transaction {
  constructor(amount, date, memo) {
    this.amount = amount;
    this.date = date;
    this.memo = memo;
  }
}

class UnalterableTransaction {
  constructor(amount, date, memo) {
    // NOTE:
    // Putting an 'underscore' in front of the property value has literally no effect on actually being able to change it
    // However, this is more of a visual indicator to other programmers who are programming in Vanilla JS that this should not
    // be altered
    // Side Note: Most likely this is an edge case that is accounted for with 'Typescript' imo
    this._amount = amount;
    this._date = date;
    this._memo = memo;
  }
}

class TrulyUnalterableTransaction {
  // In order to make our fields be unalterable, we have to declare them at the top with '#' pound signs in front of them:
#amount;
#date;
#memo;

  constructor(amount, date, memo) {
    // Assign values to the private fields
    this.#amount = amount;
    this.#date = date;
    this.#memo = memo;
  }
}

const redFish = new Fish("Red", 3);
const blueFish = new Fish("Blue", 1);

const oldFish = new Fish("George", 19);
const newFish = new Fish("Clyde", 1);

printClassName("Fish");
console.log(redFish.sayName());
console.log(blueFish.sayName());
console.log(oldFish.sayName());
console.log(newFish.sayName());

printClassName("Square");
const square = new Square(5);

console.log(`square: ${square}`);
console.log(`square.sideLength: ${square.sideLength}`);
console.log(`square.area(): ${square.area()}`);

printClassName("Transaction");
const transaction = new Transaction(100.24, "03/04/2018", "Grocery Shopping");

console.log(`transaction.amount: ${transaction.amount}`);
transaction.amount = 1000000000.24;
console.log(`transaction.amount (AFTER CHANGE): ${transaction.amount}`);

printClassName("UnalterableTransaction");

printClassName("TrulyUnalterableTransaction");

const trulyUnalterableTransaction = new TrulyUnalterableTransaction(100.24, "03/04/2018", "Grocery Shopping");

console.log(`trulyUnalterableTransaction.amount: ${trulyUnalterableTransaction.amount}`);
