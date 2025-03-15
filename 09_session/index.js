// Introduction to JavaScript Arrays:- JavaScript arrays are data structures that allow you to store multiple values in a single variable. Arrays can hold different data types such as numbers, strings, objects, or even other arrays

// Creating an array
// arrays can be declared using square brackets [];
 let number =[1,2,3,4,5,6]; // Array of Number
 let city=["Delhi","Goa","Lucknow","Mumbai"]; // Array of Strings
 let mix=[10,"Hello",true,{name:"Vipin"},[1,2,3]]; // Mixed Array

 let arr=new Array(5); // Create an empty array with 5 slot
 console.log(arr); // Empty x 5

 console.log(city[0]);
 console.log(city.length);
 
 // Modifying Array 
 city[1]="Noida";
 console.log(city);

 // Adding 
 city.push("Kanpur");
 console.log(city);

 // Remove
 city.pop();
 console.log(city);

  // Unshift
  city.unshift("Kanpur");
  console.log(city);

  // Shift
  city.shift();
  console.log(city);
  
 // map() Transforming Each Element :- The map() method creates a new array by applying a function to each element.

//  array.map((Element,index,array)=>{
//     return newElement;
//  });

let num1=[1,2,3,4,5,6];
let squareNumbers=num1.map(num=>num*num);
console.log(squareNumbers);

let priceUSD=[10,23,38];
let exchangeRate=86;
let priceINR=priceUSD.map(price=>price*exchangeRate);
console.log(priceINR);

//  filter() – Selecting Specific Elements
// The filter() method creates a new array containing elements that pass a specific condition

// Syntax
// array.filter((element,index,array)=>{
//     return CSSConditionRule;
// });

let num2=[1,2,3,4,5,6,7,8,9,10];
let evenNum=num2.filter(num=>num%2===0);
console.log("Even Number: ", evenNum);


let student=[
    {name:"Sonu", score:85},
    {name:"Ram", score:80},
    {name:"Rohan", score:75},
    {name:"Rohit", score:65},
    {name:"Mansi", score:50},
    {name:"Vishal", score:45},
    {name:"Sonu", score:85},
    {name:"Ram", score:80},
    {name:"Rohan", score:75},
    {name:"Rohit", score:65},
    {name:"Mansi", score:50},
    {name:"Vishal", score:45},
]

let topStudent=student.filter(student=>student.name=="Sonu");
console.log(topStudent);


// reduce()- Aggregating Data
// The reduce() method reduces an array to a single value.

// syntax
// array.reduce((accumulator,currentValue,index,array)=>{
//     return updatedAccumulator;
// },initialValue)

// Example

let num3=[1,2,3,4,5,6];
let sum=num3.reduce((acc,curr)=>acc+curr,0);
console.log(sum);


let cart=[
    { item: "Laptop", price: 50000 },
    { item: "Phone", price: 20000 },
    { item: "Tablet", price: 15000 }
];
let totalBill=cart.reduce((total,product)=>total+product.price,0);
console.log(totalBill);


let numbers1=[1,2,3,4,5,6,7,8,9,10];
let result=numbers1
.filter(num=>num%2===0) // Select even Number
.map(num=>num*2) // Double each Number
.reduce((sum,num)=>sum+num,0); // Dum them
console.log(result); 


