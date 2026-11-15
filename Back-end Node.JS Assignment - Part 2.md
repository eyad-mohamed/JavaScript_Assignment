Name: Eyad Mohamed
Course: Back-end Node.JS

--------------------------------------------------

1. What is the difference between forEach and for...of? When would you use each?

The main difference lies in how they control the loop and what data structures they work with. 

forEach is an array method that takes a callback function and runs it for every element in the array. Because it uses a callback, you cannot use break, continue, or return to stop the loop early. Also, it does not work well with async/await if you want operations to run sequentially.

for...of is a modern loop statement that works on any iterable object (like arrays, strings, Maps, and Sets). It gives you direct access to the value of each element, and you have full control over the loop, meaning you can use break, continue, and return inside it. It also works naturally with async/await.

When to use each:
- Use forEach when you want a clean, simple way to apply an operation to every item in an array without needing to stop early.
- Use for...of when you need to break out of the loop early based on a condition, when iterating over strings or other iterables, or when dealing with asynchronous code inside a loop.

--------------------------------------------------

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before the code is executed. However, only the declarations are hoisted, not the initializations.

Variables declared with var are hoisted and initialized with undefined. Function declarations are completely hoisted, meaning you can call them before they appear in the code.

Example of Hoisting:
console.log(x); // Output: undefined
var x = 10;

sayHi(); // Output: "Hi"
function sayHi() {
    console.log("Hi");
}

The Temporal Dead Zone (TDZ) is the time between entering a scope and the actual line where a variable declared with let or const is initialized. Even though let and const are hoisted, they are not initialized with undefined. Accessing them while they are in the TDZ results in a ReferenceError.

Example of TDZ:
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

--------------------------------------------------

3. What are the main differences between == and ===?

Both are comparison operators, but they handle data types differently:

== (Loose Equality): Compares two values for equality after converting both values to a common type (type coercion). For example, comparing a string "5" and a number 5 will return true because JavaScript converts the string to a number first.

=== (Strict Equality): Compares both the value and the data type without performing any type conversion. If the types are different, it immediately returns false.

Example:
5 == "5"   // true (values match after conversion)
5 === "5"  // false (different types: number vs string)

--------------------------------------------------

4. Explain how try-catch works and why it is important in async operations.

A try-catch block is used for error handling in JavaScript. You place the code that might fail inside the try block. If an error occurs at any point in the try block, execution stops immediately and jumps to the catch block, which receives the error object so you can handle it gracefully instead of crashing the entire application.

Why it is important in async operations:
When working with async/await, Promises can be rejected (for example, due to a failed network request or a database error). Unlike synchronous errors, unhandled promise rejections can crash a Node.js server. Wrapping await calls inside a try-catch block allows you to catch rejected promises just like regular errors, log them, or send a proper error response to the user.

Example:
async function fetchData() {
    try {
        let response = await someAsyncCall();
        console.log(response);
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

--------------------------------------------------

5. What's the difference between type conversion and coercion? Provide examples of each.

Type Conversion (Explicit): This happens when the developer intentionally converts a value from one data type to another using built-in functions or methods.

Example of Type Conversion:
let str = "123";
let num = Number(str); // Explicitly converting string to number (123)

Type Coercion (Implicit): This happens automatically when JavaScript converts a value from one type to another behind the scenes during an operation involving different data types.

Example of Type Coercion:
let result = "5" + 2; // Output: "52" (JavaScript coerces the number 2 into a string)
let sub = "5" - 2;    // Output: 3 (JavaScript coerces the string "5" into a number)