function displayChildAge(continent, age) {
    console.log("In ", continent, " You are a child ", age, " years");
}
function displayAdultAge(continent, age) {
    console.log("In ", continent, " You are an adult ", age, " years");
}
function displayOldAge(continent, age) {
    console.log("In ", continent, " You are old ", age, "years");
}
function showAge(continent, age) {
    const message = console.log("In ", continent, " You are old ", age, "years");
    if (age < 18) {
        displayChildAge(continent, age);
    } else if (age >= 18 && age <= 64) {
        displayAdultAge(continent, age);
    } else {
        // displayOldAge(continent, age);
        message;
    }
}
// showAge("Africa", 17);
// showAge("Australia", 28);
showAge("Europe", 65);