// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} year old`); 
//     }
// }

// const Person1 = new Person("mansi", 30);
// const Person2 = new Person("mansi2", 20);

// console.log(Person1.name);
// console.log(Person2.greet());

// class BankAccount{
//     #balance

//     constructor(owner, balance){
//         this.#balance = balance;
//         this.owner = owner;
//     }

//     deposit(amount){
//         this.#balance += amount
//         console.log(`Deposit successful! new balance: $${this.#balance}`);  
//     }

//     getBalance(){
//         return this.#balance;
//     }
// }

// const acc = new BankAccount("abc", 500)
// acc.deposit(200)
// console.log(acc.getBalance());


// class Payment{
//     processPayment(amount){
//         console.log(`Precessing payment of $${amount}`);
//         this.#completeTransaction();   
//     }

//     #completeTransaction(){
//         //step1
//         //step2
//         console.log(`Transaction completed successfully!`);
//     }
// }

// const payment = new Payment();
// payment.processPayment(1000);
// payment.completeTransaction();

// class Employee{
//     constructor(name, role){
//         this.name = name;
//         this.role = role;
//     }

//     work(){
//         console.log(`${this.name} is working as a ${this.role}`); 
//     }
// }

// class Manager extends Employee{
//     constructor(name){
//         super(name, "Manager");
//     }

//     manage(){
//         console.log(`${this.name} is manging the team.`);
//     }
// }

// const manager = new Manager('mansi');
// manager.manage()

class Animal{
    // makeSound(){
    //     console.log('Some geric animal sound');    
    // }

    eat(){
        console.log("Animal is eating...");
    }
}

class Meammal extends Animal{
    walk(){
        console.log("Mammal is walking...");    
    }
}

class Dog extends Meammal{
    bark(){
      console.log("Dog is Bakring");
    }
}
// const gericAnimal = new Animal();
const dog = new Dog();

// gericAnimal.makeSound();
dog.eat();
dog.walk();
dog.bark();

