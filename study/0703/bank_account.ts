// class BankAccount {
//   #balance: number = 1000;
//   deposit(amount: number) {
//     this.#balance += amount;
//   }
//   getBalance() {
//     console.log(this.#balance);
//   }
//   setBalance(amount: number) {
//     amount = amount * 2;
//     this.#balance = amount;
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// account.setBalance(2000);
// account.getBalance();

class Animal {
  sound() {
    console.log("");
  }
}

class Doggie extends Animal {
  sound() {
    console.log("멍멍!");
  }
}
class Cat extends Animal {
  sound() {
    console.log("야옹!");
  }
}

let doggie = new Doggie();
doggie.sound();
let cat = new Cat();
cat.sound();

const animals: Animal[] = [new Doggie(), new Cat()];
for (let i = 0; i < animals.length; i++) {
  animals[i].sound();
}
