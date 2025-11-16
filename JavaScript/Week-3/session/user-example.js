const user = {
    name: "Emil",
    age: 25,
    role: "Teacher",
    classes: ["Javascript 1", "Javascript 2"],
    hobbies: {
        favourite: "computers",
        sports: "running to class",
    },
};

console.log(user);

// Add new property
user.lastName = "Bay";

console.log(user);

delete user.lastName;

console.log(user);

console.log(user.hobbies.favourite);
console.log({ favourite: "computers", sports: "running to class" }.favourite);

function graduatedClass(student, className) {
    if (student.classes.includes(className)) return "Error";

    student.classes.push(className);
}

console.log(user);
graduatedClass(user, "HTML");
console.log(user);
graduatedClass(user, "HTML");

