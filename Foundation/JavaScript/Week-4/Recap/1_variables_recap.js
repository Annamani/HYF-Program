// VARIABLES RECAP
//=================

// 1️⃣ VARIABLE DECLARATION - var, let, const
//============================================

let a ;
const b=323;
var c;
 

// Reassignment 

// const cannot be reassigned
// Uncomment to see error:
// PI = 3.14159;  // Error!

const PI = 3.14159;


// 2️⃣ VARIABLE NAMING RULES
//===========================
// Good variable names (descriptive and meaningful)
const studentName= "abed";

// Bad names (avoid these)
const abc ="abed"

// 3️⃣ VARIABLE TYPES (DATA TYPES)
//=================================
// String
const aa= "abed";

// Number

const bb= 123123

// Boolean


// Null
const nullnull = null;

// Undefined


// Array
const students= []

// Object
const student={}

// Check types using typeof
// console.log(typeof studentName);  // "string"
// console.log(typeof age);          // "number"
// console.log(typeof isStudent);    // "boolean"


// 4️⃣ TYPE CONVERSION
//====================
const strNumber = "123";
 

// String to Number

const convertedNumber = parseInt(strNumber);  // 123
// Number to String

const cts = ""+ convertedNumber;

// 5️⃣ TEMPLATE LITERALS (Modern String)
//=======================================

console.log("my name: "+ studentName+ "and my age:'s "+studentName);
console.log(`my name: ${studentName }  and my age's: ${studentName} `);

const res = `my name: ${studentName } and my age: ${studentName } `;

console.log(res);


// Output: "My name is John and I am 25 years old"


// 6️⃣ VARIABLE SCOPE PREVIEW
//============================


// global variables can be used anywhere


// local variables only inside their block


// console.log(globalVar);  // "I am global"
// console.log(localVar);   // Error! localVar is not defined outside


// 💡 BEST PRACTICES
//===================
// • Use const by default
// • Use let when you need to reassign
// • Avoid var (old way)
// • Use descriptive names
// • Use camelCase for variables
// • One variable per line
