// JavaScript Date & Time Methods

// JS provides the Date object to work with dates and times
 // Creating a Date Object

 let currentDate=new Date(); // gets the current date and time
 console.log("Current Date & Time : ",currentDate);

 let specificDate =new Date("2023-03-18");
 console.log("specificDate :", specificDate);

 let dateWithTime=new Date(2024,11,25,10,30,40);
 console.log("date With Time : ",dateWithTime);
 
 let date =new Date();
 console.log("Year : ", date.getFullYear()); // Get year
 console.log("Month : ", date.getMonth()+1); // Get Month (0-based, so add 1)
 console.log("Date :", date.getDate()); // Get day of the Month
 console.log("Day of the Week :",date.getDay()); // Get day of the week (0-Sunday, 1-Monday)

 console.log(date.getTime());


 // JS Math Methods
 console.log("Absolute Value :" , Math.abs(-10)); // 10
 console.log(Math.ceil(4.3));//5
 console.log(Math.floor(4.9));//4
 console.log(Math.round(4.5));

 let randomNum=Math.floor(Math.random()*10)+1;
 console.log(" Random Number : ", randomNum);

 let num =145.5679;
 console.log("Fix 2 decimals :", num.toFixed(2));
 console.log("4 Digit : ", num.toPrecision(4));
console.log("Int :", parseInt(num));
console.log("Float : ",parseFloat(num));


 

 
 
 
 
 
 
 
 
 
 
 
 
 


 