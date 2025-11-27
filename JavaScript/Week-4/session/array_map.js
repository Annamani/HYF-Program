const number = [1, 4, 9, 16];

// function multiplyByTwo() {
//     const result = [];
//     for (let i = 0; i < number.length; i++)
//         result.push(number[i] * 2);
//     return result;
// }
// console.log("Using Basic Function: ", multiplyByTwo());

//Arrow Function
const resultArrow = () => {
    const resultArray = [];
    for (let i = 0; i < number.length; i++) {
        resultArray.push(number[i] * 2);
    }
    return resultArray;

};
console.log("Array Function Result: ", resultArrow());

//using MAP function
// const mapResult = number.map((number) => number * 2);
// console.log("Using Map Function: ", mapResult);