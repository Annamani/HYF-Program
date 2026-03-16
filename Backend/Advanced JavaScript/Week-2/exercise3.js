const functions = [
  function () {
    console.log("First");
  },
  function () {
    console.log("Second");
  },
  function () {
    console.log("Third");
  }
];

for (let i = 0; i < functions.length; i++) {
  functions[i](); // call each function
}
