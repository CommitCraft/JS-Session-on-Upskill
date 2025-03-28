// Async--Function = propmise
// await--keyword/expression - use inside Async function -- 

// async function fetchData(url){
//     try {
//         let response = await fetch(url)
//         if(! response.ok) throw new Error('Network response not ok')
//         if(response.status == 200){
//             let data = await response.json()
//             console.log(data);
//         }  
//     } catch (error) {
//         console.log(error.message);  
//     }
// }

// fetchData('https://jsonplaceholder.typicode.com/users')


// function getData(callback){
//     setTimeout(() => {
//         callback('Data received!')
//     }, 2000);
// }

// async function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('Data Received!');
//         }, 2000);
//     })
// }

// async function showData(){
//     let message = await getData();
//     console.log(message); 
// }

// showData();
// getData((message)=> console.log(message)
// );

// async function fethMultiple() {
//     let [ post, comments] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json()),
//         fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()),
//     ])
//     console.log('Post', post);
//     console.log('comments', comments);
// }

// fethMultiple()


// async function fetchUserFromDB() {
//     return new Promise(resovle=>{
//         setTimeout(() => {
//            resovle({  id: 1, name: "Mansi", grade: 12 })
//         }, 2000);
//     })  
// }

// async function getUser() {
//     let user = await fetchUserFromDB();
//     console.log(user);
// }

// getUser()


// const fs = require('fs').promises;

// async function readFile() {
//     try {
//         let data = await fs.readFile('file.txt', 'utf-8')
//         console.log(data);
        
//     } catch (error) {
//         console.error(error.message);   
//     }  
// }

// readFile()