// Exedcution Context is the environment packaged together with the reqired functions and variables
// 1. Memory Phase --> Variable Environment
// 2. Code Phase --> Thread of Execution
// Hoisting is when trying to access the variables before they are initialized
// var: Hoisted with undefined (confusing, avoid)
// let/const: Hoisted but TDZ (safe, use these)
// function: Fully hoisted (convenient)

// Demonstrate var hoisting
console.log("=== VAR HOISTING ===");
console.log(x); // undefined (hoisted)
var x = "var value";
console.log(x); // "var value"

// Demonstrate function hoisting
console.log("\n=== FUNCTION HOISTING ===");
console.log(myFunc); // [Function: myFunc] (fully hoisted)
myFunc("works!"); // "works!"
function myFunc(text) {
    console.log(text);
}

// Demonstrate let TDZ
console.log("\n=== LET TDZ ===");
// console.log(y);        // ❌ Uncomment to see error
let y = "let value";
console.log(y); // "let value"

// Window and this
// Whenever JS code is executed a global object is created which is called window
// Every varialble and functions are attached to this window object

console.log("=== Window and This ===");
console.log(a);
console.log(this.a);
console.log(window.a);
var a = 101;
console.log(a);
console.log(this.a);
console.log(window.a);

// Scoping of variables
// lexical scope --> check for variables in the innermost scope and travel outwards if not found
// const and let are block scoped
// var is funciton scoped
// var dies when the function ends. It cannot be accessed outside.

console.log("=== BLOCK SCOPE ===");

function testBlockScope() {
    const name = "Alice"; // Function scope

    if (true) {
        const age = 25; // Block scope (only exists in this {})
        let city = "NYC"; // Block scope (only exists in this {})

        console.log(name); // ✅ "Alice" (can access parent scope)
        console.log(age); // ✅ 25
        console.log(city); // ✅ "NYC"
    }

    console.log(name); // ✅ "Alice"
    // console.log(age); // ❌ ReferenceError: age is not defined
    // console.log(city); // ❌ ReferenceError: city is not defined
}

testBlockScope();

console.log("=== LEXICAL SCOPE CHAIN ===");

const global = "I'm global";

function outer() {
    const outerVar = "I'm in outer";

    function middle() {
        const middleVar = "I'm in middle";

        function inner() {
            const innerVar = "I'm in inner";

            // JavaScript looks for variables in this order:
            // 1. inner scope
            // 2. middle scope
            // 3. outer scope
            // 4. global scope

            console.log(innerVar); // ✅ Found in inner
            console.log(middleVar); // ✅ Found in middle
            console.log(outerVar); // ✅ Found in outer
            console.log(global); // ✅ Found in global
        }

        inner();
        // console.log(innerVar); // ❌ Error: can't access inner from middle
    }

    middle();
}

outer();
