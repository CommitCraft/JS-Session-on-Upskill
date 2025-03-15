//Javascript Function : fun are blocks of code designed to perform a specific task. they help to organize code , make it reusable , and improve readability.

// to set of statement that perform a task . fun can take imputes and process them and return an output

// function sayHello(){ // sayHello is a fun name
//     console.log("Hello, World"); // fun that print
// }

// Fun Declaration

// function greet(){
//     console.log("Welcome to Javascript"); 
// }

// // The keyword function is used
// //The fun name is greet
// // the curly braces {} contain the code

// greet();

const add=function(a,b){
    return a+b;
}
console.log(add(5,6));

//the fun has no name (anonymous fun ).
// it is stored in a variable (add) 
// the return statement gives a result

// Arrow Fun

const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(4,2));

// shorter syntax using =>
// if only one statement , we can remove {} and return

const square=x=>x*x;
console.log(square(5));


function greetUser(name){
    console.log("Hello, "+name+ "!");
}
greetUser("Vipin");

// name is a parameter
// "Vipin" is an argument

// Returning a Value
function addNumer(a,b){
    return a+b;
}
let result=addNumer(20,30);
console.log(result);

// Default Parameters
function greet(name="Guest"){
    console.log("Hello," +name)
}

greet();
greet("Bro");


