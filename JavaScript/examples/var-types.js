// Types
console.log(typeof 3); //number
console.log(typeof -33); //number
console.log(typeof "3"); //string
const threeConst = 3;
console.log(threeConst); //3
let threeLet = 3;
console.log(threeLet); //3
console.log(typeof 'console.log("console.log(console.log(""))")'); //string
console.log(typeof typeof 45); //string
const names = ["benjamin", "Christopher"];
console.log(typeof names[0]); //string
console.log(typeof [3][0]); //number
console.log(typeof true); //boolean


console.log("--------------------------------------------------------");
console.log("Arrays Examples: ");
const arrayConst = [];
const shoppingList = ["egg", "apples", "flour", 3, false];
console.log(shoppingList);
console.log(typeof shoppingList);
const shoppingListType = typeof shoppingList;
console.log(typeof shoppingListType);
console.log(shoppingList[1]);
console.log(typeof shoppingList[4]);

const shoppingListApples = shoppingList[1];
const lastItemShoppingList = shoppingList[4];
console.log(lastItemShoppingList);
console.log(typeof lastItemShoppingList);