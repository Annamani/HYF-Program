// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let value in salaries) {
//     sum += salaries[value];
// }
// console.log(sum);

// before the call
function multiplyNumeric(value) {
    for (let key in value) {
        if (typeof value[key] == 'number') {
            value[key] *= 2;
        }
    }
    console.log(value);
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

