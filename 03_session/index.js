// 01 Arithmetic Operators
console.log("Arithmetic Operators");

let x = 10;
let y = 5;
console.log("Addition: ", x + y);
console.log("Subtraction: ", x - y);
console.log("Multiplication: ", x * y);
console.log("Division: ", x / y);
console.log("Modulus: ", x % y);
console.log("Exponentiation: ", x ** y);
console.log("\n");

// 02 Assignment Operators
console.log("Assignment Operators");
let a=5;
a+=3;
console.log("Addition: ", a);
a-=2;
console.log("Subtraction: ", a);
a*=2;
console.log("Multiplication: ", a);
a/=2;
console.log("Division: ", a);
a%=2;
console.log("Modulus: ", a);
a**=2;
console.log("Exponentiation: ", a);
console.log("\n");

// 03 Comparison Operators
console.log("Comparison Operators");
console.log("5 == '5': ", 5 == '5');
console.log("5 === '5': ", 5 === '5');
console.log("5 != '5': ", 5 != '5');
console.log("5 !== '5': ", 5 !== '5');
console.log("15 > 5: ", 15 > 5);
console.log("15 >= 5: ", 15 >= 5);
console.log("15 < 5: ", 15 < 5);
console.log("15 <= 5: ", 15 <= 5);
console.log("\n");

// 04 Logical Operators
console.log("Logical Operators");
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("!true: ", !true);
console.log("\n");

// 05 Bitwise Operators
console.log("Bitwise Operators");
console.log("5 & 1: ", 5 & 1);
console.log("5 | 1: ", 5 | 1);
console.log("\n");

// 06 ternary Operators
console.log("ternary Operators");
let age = 10;
let status = (age >= 18) ? "Adult" : "Child";
console.log("Status: ", status);
console.log("\n");

// 07 typeof Operator
console.log("typeof Operator");
console.log("typeof 5: ", typeof 5);
console.log("typeof '5': ", typeof '5');
console.log("typeof true: ", typeof true);
console.log("typeof null: ", typeof null);
console.log("typeof undefined: ", typeof undefined);
console.log("typeof {}: ", typeof {});
console.log("typeof []: ", typeof []);
console.log("[] instanceof Array: ", [] instanceof Array);
console.log("\n");

// 08 Spread and Rest Operator
console.log("Spread and Rest Operator");
let arr1 = [1, 2, 3];
let arr2 = [...arr1,4, 5, 6];
console.log("Spread Operator: ", arr2);

function sub(...args) {
    return args.reduce((acc, val) => acc - val, 0);
}
console.log("Rest Operator: ", sub(1, 2, 3, 4, 5));