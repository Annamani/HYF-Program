const userRole = "admin";
const isAdmin = userRole === "admin";
const isLoggedIn = userRole !== "guest";

if (isAdmin) {
    console.log("You are in charge");
} else if (isLoggedIn) {
    console.log("Welcome user");
} else {
    console.log("Welcome guest");
}

