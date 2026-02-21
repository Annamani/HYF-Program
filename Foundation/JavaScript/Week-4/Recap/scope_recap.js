// SCOPE (GLOBAL VS LOCAL) RECAP
//================================

// 1️⃣ GLOBAL SCOPE
//==================


// Global variables can be used anywhere


// console.log(globalVar);  // "I'm global"


// 2️⃣ LOCAL SCOPE (FUNCTION)
//============================


// Call the function


// console.log(globalName);  // "Alice" (accessible)
// console.log(localName);   // Error! localName is not defined


// 3️⃣ BLOCK SCOPE (let and const)
//=================================


// console.log(outsideVar);  // "I'm outside"
// console.log(insideVar);   // Error! insideVar is not defined


// 4️⃣ VAR vs LET vs CONST SCOPE
//===============================

// var - function scoped (avoid using)


// let - block scoped


// const - block scoped, cannot reassign


// console.log results


// 5️⃣ NESTED SCOPES
//===================


// Call the function


// 6️⃣ SCOPE CHAIN
//=================


// Call the function


// 7️⃣ SHADOWING (SAME NAME IN DIFFERENT SCOPES)
//===============================================


// console.log(name);  // "Global"


// 8️⃣ REAL-WORLD EXAMPLES
//=========================

// Counter with closure


// Private variables


// Configuration settings


// Use the examples


// 💡 BEST PRACTICES
//===================
// • Use const by default for better scope control
// • Use let when you need to reassign
// • Avoid var (it's function-scoped and can cause bugs)
// • Minimize global variables
// • Keep variables in the smallest scope needed
// • Use meaningful names to avoid shadowing confusion
