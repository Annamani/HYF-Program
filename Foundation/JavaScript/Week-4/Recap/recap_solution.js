// FUNCTIONS RECAP - SOLUTIONS
//=============================

// 1️⃣ BASIC FUNCTION - No Parameters
//====================================
function sayHello() {
    console.log("Hello, World!");
}

// Call (use) the function
sayHello();  // Output: Hello, World!


// 2️⃣ FUNCTION WITH PARAMETERS - Input Data
//===========================================
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Call with different inputs
greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!


// 3️⃣ FUNCTION WITH RETURN - Output Data
//========================================
function addNumbers(a, b) {
    let result = a + b;
    return result;  // Send result back
}

// Store the returned value
let sum = addNumbers(5, 3);
console.log(sum);  // Output: 8

// Use directly in other operations
let total = addNumbers(10, 20) + 5;  // 35


// 4️⃣ REAL-WORLD EXAMPLES
//========================

// Calculator functions
function multiply(x, y) {
    return x * y;
}

function isEven(number) {
    return number % 2 === 0;
}

// Usage
console.log(multiply(4, 5));    // 20
console.log(isEven(8));         // true
console.log(isEven(7));         // false

// String functions
function makeUppercase(text) {
    return text.toUpperCase();
}

function getInitials(firstName, lastName) {
    return firstName[0] + lastName[0];
}

console.log(makeUppercase("hello"));           // "HELLO"
console.log(getInitials("John", "Doe"));       // "JD"


// 5️⃣ FUNCTION EXPRESSIONS - Alternative Syntax
//===============================================
// Function declaration (what we used above)
function subtract(a, b) {
    return a - b;
}

// Function expression (storing in variable)
let divide = function(a, b) {
    return a / b;
};

// Arrow function (modern shorthand)
let square = (num) => {
    return num * num;
};

// Super short arrow function
let double = num => num * 2;

// All work the same way:
console.log(subtract(10, 3));   // 7
console.log(divide(10, 2));     // 5
console.log(square(4));         // 16
console.log(double(6));         // 12


// 6️⃣ DEFAULT PARAMETERS
//======================
function greetWithDefault(name = "Friend") {
    return "Hello, " + name + "!";
}

console.log(greetWithDefault("Alice"));    // "Hello, Alice!"
console.log(greetWithDefault());           // "Hello, Friend!"


// 7️⃣ FUNCTION BEST PRACTICES
//============================
// Good function names (verbs - what they do)
function calculateArea(width, height) {
    return width * height;
}

function checkPassword(password) {
    return password.length >= 8;
}

function formatName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Keep functions small and focused
function isAdult(age) {
    return age >= 18;
}

function canVote(age, country) {
    if (country === "USA") {
        return age >= 18;
    }
    return age >= 16;  // Other countries
}


// 8️⃣ COMPLETE EXAMPLE - Grade Calculator
//========================================
// 90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, below 60 = F
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getGradeMessage(score) {
    let grade = calculateGrade(score);
    return "Your score: " + score + ", Grade: " + grade;
}

// Usage
console.log(getGradeMessage(85));  // "Your score: 85, Grade: B"
console.log(getGradeMessage(92));  // "Your score: 92, Grade: A"


// 9️⃣ WHY USE FUNCTIONS?
//======================
// • REUSABILITY: Write once, use many times
// • ORGANIZATION: Break big problems into small pieces  
// • TESTING: Easy to test individual parts
// • DEBUGGING: Easier to find and fix problems
// • COLLABORATION: Team members can work on different functions
