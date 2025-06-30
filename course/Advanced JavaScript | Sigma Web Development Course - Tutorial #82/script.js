// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and immediately executed after its creation.

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

// IIFE in JavaScript (Immediately Invoked Function Expression)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and immediately executed after its creation.

// Syntax:
// javascript
// Copy
// Edit
// (function() {
//     // Code inside the IIFE
// })();
// // OR
// (() => {
//     // Code inside the IIFE (Arrow function version)
// })();
// Purpose of IIFE:
// Encapsulation:
// Creates a private scope to avoid polluting the global namespace.

// Avoid Variable Conflicts:
// Useful when multiple scripts run on the same page to prevent variable name collisions.

// Module Pattern:
// Before ES6 modules, IIFEs were a popular way to implement the module pattern in JavaScript.

// Simple Example:
// javascript
// Copy
// Edit
// (function() {
//     var message = "Hello, IIFE!";
//     console.log(message);
// })(); // Output: Hello, IIFE!
// ✅ message is not accessible outside the IIFE.

// Common Applications of IIFE:
// Application	Explanation
// Data Privacy	Keeps variables out of the global scope.
// Avoid Polluting Global Namespace	Prevents variable name clashes.
// Initialization Code	Run setup/configuration code immediately.
// Module Pattern (Pre-ES6)	Creates private/public APIs.
// Prevent Hoisting Confusion	Keeps temporary variables hidden and safe.
// Used in Event Handlers/Loops	To capture current loop variable value.

// Real-World Example: Initializing Configuration
// javascript
// Copy
// Edit
// var config = (function() {
//     var privateApiKey = "123456";

//     return {
//         getApiKey: function() {
//             return privateApiKey;
//         }
//     };
// })();

// console.log(config.getApiKey()); // 123456
// console.log(config.privateApiKey); // undefined
// ✅ privateApiKey is protected and not accessible directly.

// Summary:
// IIFE = Private, immediate, safe.

// Key uses: Scope isolation, avoiding conflicts, setup code.

// Still relevant, though ES6 modules now offer a more modern solution.

// If you want, I can also help you build a small project using IIFEs to better understand it!
// IIFE
// (async function  main() {
// let a = await sleep()
// let b = await sleep()
// console.log(a,b);

// })();

// destructuring
// (async function  main() {
// let [x,y]=[2,5,77]
//     console.log(x,y);
// let [a,b, ...rest]=[1,2,3,4,5,6,7,8,9]
// console.log(a,b,rest);

// })();


// with object we can use destrucutring if we need to get only 3 -4 values form a large object
(async function main() {
    let obj = {
        name: "salman",
        age: "23",
        gender: "male"
    }
    // remeber to use curly brackets
    let { name, age } = obj;
    console.log(name, age)
})();

// spread operator
function sum(a, b, c) {
    return a + b + c;
}

let arr = [1, 2, 3, 4, 5, 6];
let spreadObj = [...arr]
console.log(sum(arr[0], arr[1], arr[2]));
console.log(...arr);
console.log(sum(...arr));
console.log(spreadObj);


// hoisting

// Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved("hoisted") to the top of their scope(global or function scope) before code execution.

// 🔹 Key Concept:
// Declarations are hoisted, but initializations are not.

// 1. Variable Hoisting(using var)
//     javascript
// Copy
// Edit
// console.log(x); // undefined
// var x = 5;
// Why ?
//     The JavaScript engine interprets it like this:

// javascript
// Copy
// Edit
// var x;         // Declaration is hoisted
// console.log(x); // undefined
// x = 5;         // Initialization remains in place
// 2. Let and Const Hoisting
// let and const are hoisted but not initialized.They stay in a temporal dead zone(TDZ) from the start of the block until the declaration is encountered.

//     javascript
// Copy
// Edit
// console.log(y); // ❌ ReferenceError
// let y = 10;
// 3. Function Hoisting
// a.Function Declarations are Hoisted
// javascript
// Copy
// Edit
// greet(); // ✅ Works
// function greet() {
//     console.log("Hello!");
// }
// b.Function Expressions are NOT fully hoisted
// javascript
// Copy
// Edit
// sayHello(); // ❌ TypeError: sayHello is not a function
// var sayHello = function () {
//     console.log("Hi!");
// };
// Why ? sayHello is hoisted as undefined, not as a function.

// Summary Table:
// Feature	Hoisted	Initialized	Accessible Before Declaration
// var Yes	No	Yes (value = undefined)
// let / const Yes	No	❌ ReferenceError
// Function Declaration	Yes	Yes	✅ Yes
// Function Expression	Only var name	No	❌ No

// 🛠 Practical Use:
// Helps understand bugs caused by accessing variables before they're declared.

// Avoid confusion by declaring variables / functions at the top of their scope.

// Let me know if you’d like a diagram or animation - like explanation of hoisting—it really helps!