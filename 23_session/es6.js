// var (function scope)
var a = 1;
if (true) {
  var a = 2; // same variable!
  console.log(a); // 2
}
console.log(a); // 2 (var does not have block scope)

let b=10;
if (true) {
  let b = 20; // different variable
  console.log(b); // 20
}
console.log(b); // 10 (let has block scope) (b inside block is separate)

const c = 30;
// c = 40; // TypeError: Assignment to constant variable.
 console.log(c); // 30

// Template literals
 const name = "Alice";
    const age = 25;

    // Old way (ES5)
    console.log("Hello, My name is " + name + " and I am " + age + " years old.");
    // New way (ES6)
    console.log(`Hello, My name is ${name} and I am ${age} years old.`); // Template literals (backticks)


    // Regular expressions
    //  function add(a,b) {
    //     return a+b;
    //  }
    //     console.log(add(5,10));

    // Arrow functions
    const add = (a, b) => a + b; // Arrow function
    console.log(add(5, 10)); // 15
    // without parameters
    const greet = () => "Hello, World!"; // Arrow function without parameters
    console.log(greet()); // Hello, World!
    // with one parameter
    const square = x => x * x; // Arrow function with one parameter
    console.log(square(5)); // 25
    // with multiple parameters
    const multiply = (a, b) => a * b; // Arrow function with multiple parameters
    console.log(multiply(5, 10)); // 50


    // spread operator (...)
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2]; // Spread operator
    console.log(combined); // [1, 2, 3, 4, 5, 6]
    // Rest Operator
    const sum = (...numbers) => {
        return numbers.reduce((acc, curr) => acc + curr, 0); // Rest operator
    };
    console.log(sum(1, 2, 3, 4, 5)); // 15


    // Default parameters
    function greet(name = "Guest") { // Default parameter
        return `Hello, ${name}!`;
    }
    console.log(greet()); // Hello, Guest!
    console.log(greet("Alice")); // Hello, Alice!

    // Destructuring assignment
   // array destructuring
   const arr = [1, 2, 3];

   const [x, y, z] = arr; // Destructuring assignment
    console.log(x, y, z); // 1 2 3

    let first=numbers[0];
    let second=numbers[1];

    //object destructuring
    const person = {
        name: "Alice",
        age: 25,
        city: "New York"
    };
// without destructuring
    let name1 = person.name;
    let age1 = person.age;

    let {name, age} = person; // Destructuring assignment
    console.log(name, age); // Alice 25