// 1 if statement

// if(condition){
//     // code to be executed if condition is true
// }

// let age = 19;
// if(age >= 18){
// console.log("You are eligible to vote");
// }
    
// 2 else statement

// if(condition){
//     // code to be executed if condition is true
// }else{
//     // code to be executed if condition is false
// }

// let age1 = 17;
// if(age1 >= 18){
// console.log("You are eligible to vote");
// }else{
// console.log("You are not eligible to vote");
// }

// 3 else if statement

// if(condition1){
//     // code to be executed if condition1 is true
// }else if(condition2){
//     // code to be executed if condition2 is true
// }else{
//     // code to be executed if condition1 and condition2 are false
// }

// let score = 65;
// if(score >= 90){
// console.log("A grade");
// }else if(score >= 80){
// console.log("B grade");
// }else if(score >= 70){
// console.log("C grade");
// }else{
//     console.log("fail");
// }

// 4 Nested if statement

// let num =10;
// if(num>0){
//     if(num%2==0){
//         console.log("Even number");
//     }else{
//         console.log("Odd number");
//     }
// }else{
//     console.log("Please enter a positive number");
// }

// 5 Ternary operator

// let age = 19;
// let result = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

// 6 Switch statement


// switch(expression){
//     case value1:
//         // code to be executed if expression is equal to value1
//         break;
//     case value2:
//         // code to be executed if expression is equal to value2
//         break;
//     case value3:
//         // code to be executed if expression is equal to value3
//         break;
//     default:
//         // code to be executed if expression is different from value1 and value2

// }

// let day=5;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


let grade = 'C';
switch(grade){
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}