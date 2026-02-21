const students = ["Anastasia", "Abbas", "Annamani", "Arman", "Emebet", "Fatima", "Iglesia", "Jamshed", "Jyoti",
    "Merve", "Oumaima", "Rakesh", "Rashmi", "Shipra", "Vlad"];
function pickRandomStudent() {
    // const random = Math.floor(Math.random() * students.length);
    // const name = students[random];
    // console.log("Random student name: ", students[random]);
    console.log("Random student name: ", students[(Math.floor(Math.random() * students.length))]);
}
pickRandomStudent();