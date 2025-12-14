// ARITHMETIC OPERATORS RECAP
//=============================

// 1️⃣ BASIC ARITHMETIC
//======================

// Addition (+)
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Subtraction (-)
function subNumbers(num1, num2) {
    if (num1 > num2) return num1 - num2;
    else return num2 - num1;
}

// Multiplication (*)
function mulNumbers(num1, num2) {
    return num1 * num2;
}

// Division (/)
function divNumbers(num1, num2) {
    if (num1 > 0 && num2 > 0) return num1 / num2;
}

console.log(addNumbers(7, 8));        // 15
console.log(subNumbers(3, 8)); // 5
console.log(mulNumbers(10, 5));    // 50
console.log(divNumbers(24, 12));   // 2


// 2️⃣ MODULUS (REMAINDER)
//=========================
function modNumbers(num1, num2) {
    if (num1 > 0 && num2 > 0) return num1 % num2;
}
console.log(modNumbers(17, 4));     // 1 (17 ÷ 4 = 4 remainder 1)
// console.log(isEvenNumber);  // false


// 3️⃣ EXPONENTIATION (POWER)
//============================


// console.log(squared);  // 25 (5 × 5)
// console.log(cubed);    // 8 (2 × 2 × 2)


// 4️⃣ INCREMENT & DECREMENT
//===========================


// Post-increment (use value, then add 1)


// Pre-increment (add 1, then use value)


// console.log(count);      // 6
// console.log(score);      // 9


// 5️⃣ ASSIGNMENT OPERATORS
//==========================


// Addition assignment (+=)


// Subtraction assignment (-=)


// Multiplication assignment (*=)


// Division assignment (/=)


// console.log(total);    // 15
// console.log(balance);  // 70
// console.log(value);    // 60
// console.log(share);    // 5


// 6️⃣ OPERATOR PRECEDENCE (ORDER)
//=================================


// console.log(result1);  // 17 (5 + 12, multiplication first)
// console.log(result2);  // 27 (parentheses first)


// 7️⃣ REAL-WORLD EXAMPLES
//=========================

// Calculate total price with tax


// Calculate discount


// Calculate average


// Split bill equally


// console.log(finalPrice);      // 112
// console.log(discountedPrice); // 75
// console.log(average);         // 85
// console.log(perPerson);       // 25


// 💡 BEST PRACTICES
//===================
// • Use parentheses for clarity
// • Watch for division by zero
// • Remember operator precedence: () > ** > * / % > + -
// • Use += instead of x = x + 1
// • Use ++ and -- for simple increments
