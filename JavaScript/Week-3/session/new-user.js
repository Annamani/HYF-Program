const newUser = {
    name: "",
    age: "",
};

var students = [];
function addStudent(student) {
    if (student.name == null && typeof student.name === "string") return "Error";
    if (student.age == null) return "Error";

    students.push(student);
}

addStudent({ name: "Rahim" });
console.log(students);

// // ways to access properties

// user.name;
// user["name"];

// const prop = "name";
// user[prop];

// user["name"] = "Maria";
// user[0] = "Hello world";

// console.log(user);