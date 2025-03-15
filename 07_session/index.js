// // // Fun Scope
// // // Global Scope - a var declared outside any fun.
// // // access anywhere in the script


// // let globalVar="I' am Global";
// // function showGlobal(){
// //     console.log(globalVar); // Accessible
// // }
// // showGlobal();
// // console.log(globalVar); // accessible

// // // Local Scope 

// // function localVar(){
// //     let local="I' Am Local"; 
// //     console.log(local); // Access here
// // }
// // localVar();
// // // console.log(local); // Error : local in not defined
 

// // // Function Hosting
// // // hosting allows fun declaration to be used before they are defined

// // console.log(greet("Alice"));

// // function greet(name){
// //     return `Hello, ${name}`;
// // }


// // console.log(sum(5,6)); // Error: Cannot access 'sum' before initialization
// // const sum=function(a,b){
// //     return a+b;
// // }


// // Callback Function : a callback fun is a fun passed as an argument to another fun

// // function greet(name,call){
// //     console.log(`Hello, ${name}`); 
// //     call();   
// // }

// // function saygoodby(){
// //     console.log("SayGoodBye !");
    
// // }

// // greet("Vipin",saygoodby);


// // IIFE

// // (function(){
// //     console.log("I run immediately !");
// // })();

// // why use IIFE ?
// //  avoid global var pollution
// //  execute code immediate
// //  useful in model patterns

// // const add=(a,b)=>a+b;
// // console.log(add(5,6));


// // (function(){
// //     let secret ="I am hidden";
// //     console.log(secret);
    
// // })();
// // console.log(secret); // secret is not defined

// // Higher order Fun


//  // passing a fun as an agrument
// // function doMath(a,b, operation){
// //     return operation(a,b);
// // }
// // function add(x,y){
// //     return x+y;
// // }
// // console.log(doMath(4,6,add));


// function multi(factor){
//     return function(number){
//         return number * factor;
//     }
// }
// const triple=multi(2);
// // fun (number) { return number * 2}
// console.log(triple(5));
// // calls fun with number =5-> return 5*2 -> output 10


// const power=(exp) => (num)=> num**exp;
// const square =power(4);
// console.log(square(4));

const example = (...arguments) =>{
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments.length);
    
}

example ( "value1","value2","value3");