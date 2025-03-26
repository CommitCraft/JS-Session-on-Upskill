// JS Scope 
// Local :- var declared inside a fun are scoped to that fun 
//         :- Cannot be accessed outside the fun

function localScope(){
let localVar="I am Local";
console.log(localVar); // Accessible inside the fun
}
localScope();
// console.log(localVar); // Error: localVar is not defined



// Global :- Var declared outside any fun  or block are globally scoped
//         :- Accessible anywhere in the script

let globalVar="I am GlobalVar";
function showGlobal(){
    console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible


// Block :- var declared inside {} using let or const are only available within that block
//       :- var does not have block scope

if(true){
    let blockVar="I am Block scoped";
    console.log(blockVar);  
}
// console.log(blockVar);


// lexical scope :- a fun can access var defined in its parent scope
 // It follows the hierarchy of scope (scope chain)

 function outer(){
    let outerVar="I am from Outer Fun";
    function inner(){
        console.log(outerVar); // accessible due to lexical scope
    }
    inner();
 }
 outer();

 // Closures :- A fun remembers var from its outer scope even after the outer fun has finished executing

 function counter(){
    let count=0; // Private Var
    return function(){
        count ++; // can access & modify count
        console.log(count);
         
    }
 }
 const increment = counter();
 increment();
 increment();
 increment();
 increment();

 function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(`Count:${count} `);
        
    }
 }
 const counterr= createCounter();  // Create a new closure
 counterr();




