// Printing a string with JavaScript
console.log("Hello, world!");

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  // Printing a string with JavaScript
console.log("Hello, world!");
VM68:2 Hello, world!
undefined
// Simple JavaScript console.log statement
function printHello();

VM73:2 Uncaught SyntaxError: Unexpected token ';'
// Simple JavaScript console.log statement
function printHello()

VM82:3 Uncaught SyntaxError: Unexpected end of input
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

undefined
  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
undefined
console.log(additioin(4, 5));
VM187:1 Uncaught ReferenceError: additioin is not defined
    at <anonymous>:1:9
(anonymous) @ VM187:1
console.log(addition(4, 5));
VM278:1 9
undefined
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
undefined
console.log(doubleAddition(65, 34));
VM415:1 198
undefined
printHello = () => "Hello there!";
() => "Hello there!"
// Converted to an arrow function
addition = (a, b) => a + b;
(a, b) => a + b
doubleAddition = (c, d) => addition(c, d) * 2;
(c, d) => addition(c, d) * 2
console.log(doubleAddition(33, 25));
VM561:1 116