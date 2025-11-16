// let user = {
//     name: "John",
//     surname: "Smith"
// };
// user.name = "Pete";
// console.log(user);
// // Remove the property name from the object.
// delete user.name;
// console.log("after remove name property", user);
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));