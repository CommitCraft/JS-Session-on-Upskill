// String is a sequence of Char

let singleQuote='Hello World!'; // singleQuote
let doubleQuote="JavaScript is fun!"; // doubleQuote
let backticks=`Welcome User!`; // backticks

// Find the length of a String
console.log(singleQuote.length);

// The length property returns the number of char in a string

// toUpper Case
console.log(singleQuote.toUpperCase());
// toLowercase
console.log(singleQuote.toLowerCase());

// trim() - Remove whitespace
console.log(doubleQuote.trim());

// slice (start, end) - Extract part of a string

console.log(doubleQuote.slice(0,10));
console.log(doubleQuote.slice(-1));

// replace (oldValue, newValue) -Replace text
let newSentence=doubleQuote.replace("JavaScript", "fun");
console.log(newSentence);

// split (separator) convert a string into an array
let word="apple,banana,grape";
let fruitsArray=word.split(",");
console.log(fruitsArray);

// concat() - Join String
let firstName='Vipin';
let lastName="kushwaha";
let fullName=firstName.concat(" ", lastName);
console.log(fullName);

// includes (substring) - Check if a string Contains a word
console.log(doubleQuote.includes("JavaScript"));
console.log(doubleQuote.includes("Python"));


// charAt (index) -Get a char at a specific index
console.log(doubleQuote.charAt(0));

// indexOf (substring) -Find position of a word
console.log(doubleQuote.indexOf("fun!"));
console.log(doubleQuote.indexOf("Python")); // (Not Found)






 