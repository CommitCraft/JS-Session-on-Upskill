
// // Loop allow us to execute block of code multiple times.
// // typeof of loops
// // 1 For Loop :- Used when the number of iterations is know as For loop
// // Syntax
// // for(init; cond; inc/dec){
// // code block
// //}

// // example
// for(let i=1;i<=5;i++){
//     console.log("Iteration: ",i);
// }

// // initialization (let i=1;) --> A variable (i) is init before the loop start
// // condition (i<=5;) --> the loop runs as long as i is <=5.
// // Increment (i++) --> the var inc by 1 after each iteration.

// // 2 While Loop
// // While Loop -> used when the num of iteration is unknown (based on a condition)

// // // syntax
// // while(condition){
// //     //code block
// // }

// let a=4;
// while(a<=5){
//     console.log("Print While Loop :",a);
//     a++;
// }

// // 3 Do-while Loop 
// // do-while loop --> Runs at least once, even if the condition is false.
// // syntax
// //  do{
// //     //code block
// //  }while(condition)

// let b=1;
// do{  
//     console.log("Do wile Loop ",b); // runes before checking the condition
//     b++;
// }while(b<=5);

// // Task 
//  let c=10;
//  do{
//     console.log("This runs at least once!");
//  }while(c<5);


//  // Advance

//  // Breaking Loop

//  // Stops a loop immediately when a certain condition is met.

//  for(let i=1;i<=10;i++){
//     if(i===3){
//         console.log("Break at :",i);
//         continue; // Stop
//     }
//     console.log("Print Break",i);
//  }


// let i=1;
// while(true){
//     console.log("This is run");
// }

// let arr=["A","B","C"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);

// }


// Task

// Right Angled Triangle
// Inverted Triangle
// Pyramid
// Diamond
// Number Pattern

let n=5;
let row="";
for(let i=1;i<n;i++){ // the outer loop (i) runs n times (from 1 to 5)
    for(let j=1;j<=i;j++){ // the inner loop (j) print number from 1 to i,
        row += j + "";
    }
    console.log(row);
}

