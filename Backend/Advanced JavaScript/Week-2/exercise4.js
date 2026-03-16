function createGreeter(greeting){
    return (name)=> console.log(`${greeting}, ${name}!`);
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
sayHello("Alice"); // "Hello, Alice!"
sayHi("Bob"); // "Hi, Bob!"
