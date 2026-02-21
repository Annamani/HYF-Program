let fruits = ["Apple", "Orange", "Pear"];
console.log("Initial Array", fruits);
console.log(fruits.pop()); // remove "Pear" and alert it

console.log("After pop", fruits);
fruits.push("Grapes");
console.log("After push", fruits);
fruits.shift();

console.log("After shift ", fruits);
fruits.unshift('Apple');
console.log("After unshift", fruits);
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
console.log("after push and unshift array", fruits)