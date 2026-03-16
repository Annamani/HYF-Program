function functionRunner(fn) {
 fn()
}
functionRunner(function () {
  console.log("I was called!");
});
 const sayHello = function () {
  console.log("Hello!");
 };
 functionRunner(sayHello);
