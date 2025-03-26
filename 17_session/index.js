// // JS CallBack: 17_session/index.js
// // A Callback function is a function that is passed as an argument to another function, 
// // to be “called back” at a later time. A function that accepts other functions as arguments

// // For Example

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data Fetched!");
//         callback('Done!');
//     }, 1500);
// }

// function processData(message) {
//     console.log(message);
// }
    
// fetchData(processData);

// // When multiple callbacks are passed to a function, they are called in the order they are passed.
// // When multiple callbacks are nested , it leads to callback hell, making code hard to read and maintain.

// // For Example

// function fetchData(callback_hell) {
//     setTimeout(() => {
//         console.log("01. Data Fetched!");
//         setTimeout(() => {
//             console.log("02. Data Fetched!");
//             setTimeout(() => {
//                 console.log("03. Data Fetched!");
//             }, 1500);
//         }, 1500);
//     }, 1500);
// }

// function processData(message) {
//     console.log(message);
// }
    
// fetchData(processData);


// // Promises are used to handle asynchronous operations in JavaScript.
// // A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// // For Example

function fetchData() {
    return new Promise((resolve, reject) => { // resolve is called if the operation is successful, and reject if the operation fails.
        setTimeout(() => {
            let success = true; // Change to false to see the reject message
            if(success) {
                resolve('Promise: Data Fetched Success!');
            } else {
                reject('Promise: Data Fetch Failed!');
            }
        },1500);
    });

}
fetchData()
.then(response => console.log(response)) // then() handles the success case
.catch(error => console.log(error)); // catch() handles the error case


// // Chaining Promises
// // Promises can be chained using then() to handle multiple asynchronous operations.

// For Example
function step1(data){
    return new Promise((resolve) => {
        console.log(data);
        setTimeout(() => {
            resolve('Step 1 Completed!');
        }, 1500);
        
    });
}

function step2(data){
    return new Promise((resolve) => {
        console.log(data);
        setTimeout(() => {
            resolve('Step 2 Completed!');
        }, 1500);
        
    });
}
fetchData()
.then(step1)
.then(step2)
.then(finalData => console.log(finalData))
.catch(error => console.log(error));


// Fetch Api (Using Promises)
// The Fetch API provides an interface for fetching resources (including across the network).
// It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

// For Example
fetch('https://jsonplaceholder.typicode.com/posts') // fetch() makes a request to the server and returns a promise
.then(response => response.json()) // response.json() returns a promise that resolves with the result of parsing the body text as JSON
.then(data => console.log(data))
.catch(error => console.log(error)); // catch() handles the error case

// Async/Await ()