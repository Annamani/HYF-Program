// const age = 14;

// if (age < 18) {
//     console.log("You are a child");
// } else if (age >= 18 && age <= 64) {
//     console.log("You are a adult");
// } else {
//     console.log("You are old");
// }
// let country = "Europe";
// //Asia
// country = "Asia";
// if (age < 15 && country === "Asia") {
//     console.log("You are a child as per Asia rules");
// } else if (age >= 15 && age < 50 && country === "Asia") {
//     console.log("You are a child as per Asia rules");
// } else {
//     console.log("You are a old as per Asia rules");
// }

// //Europe
// if (age < 17 && country === "Europe") {
//     console.log("You are a child as per Europe rules");
// } else if (age >= 17 && age < 80 && country === "Europe") {
//     console.log("You are a adult as per Europe rules");
// } else {
//     console.log("You are old as per Europe rules");
// }

// const age = 45;
// const continent = "Europe";

// if (continent === "Europe") {
//     if (age < 17) {
//         console.log("In " + continent + " You are a child ");
//     } else if (age >= 17 && age <= 80) {
//         console.log("In " + continent + " You are an adult");
//     } else if (age > 80) {
//         console.log("In " + continent + " You are old");
//     }
// } else if (continent === "Asia") {
//     if (age < 15) {
//         console.log("In " + continent + " You are a child ");
//     } else if (age >= 15 && age <= 50) {
//         console.log("In " + continent + " You are an adult");
//     } else if (age > 50) {
//         console.log("In " + continent + " You are old");
//     }
// } else {
//     if (age < 18) {
//         console.log("In " + continent + " You are a child ");
//     } else if (age >= 18 && age <= 64) {
//         console.log("In " + continent + " You are an adult");
//     } else if (age > 64) {
//         console.log("In " + continent + " You are old");
//     }
// }

//refactor
const age = 45;
const continent = "Africa";
function displayChildAge(continent, age) {
    console.log("In " + continent + " You are a child ", age, " years");
}
function displayAdultAge(continent) {
    console.log("In " + continent + " You are an adult ", age, " years");
}
function displayOldAge(continent) {
    console.log("In " + continent + " You are old ", age, "years");
}
if (continent === "Europe") {
    if (age < 17) {
        displayChildAge(continent);
    } else if (age >= 17 && age <= 80) {
        displayAdultAge(continent);
    } else if (age > 80) {
        displayOldAge(continent);
    }
} else if (continent === "Asia") {
    if (age < 15) {
        displayChildAge(continent);
    } else if (age >= 15 && age <= 50) {
        displayAdultAge(continent);
    } else if (age > 50) {
        displayOldAge(continent);
    }
} else if (continent === "Africa") {
    if (age < 18) {
        displayChildAge(continent);
    } else if (age >= 18 && age <= 64) {
        displayAdultAge(continent);
    } else if (age > 64) {
        displayOldAge(continent);
    }
}

