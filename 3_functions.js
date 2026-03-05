// First class citizens

// Assigned to variables
// Unlike direct function declaration which is fully hoisted, when functions are assigned to variables they are hoisted in TDZ in case let and var
let sum = function (a, b) {
    return a + b;
};
console.log(sum);
console.log(sum(2, 3));

function diff(a, b) {
    return a - b;
}

// Higher order functions: functions which take functions as arguments or return functions
console.log("=== Higher Order Functions ===");
function operate(operation, a, b) {
    return operation(a, b);
}
console.log(operate(diff, 3, 1));

function outer() {
    function inner() {
        console.log("inner");
    }
    return inner;
}
let returnedFuncVar = outer();
console.log(returnedFuncVar);
returnedFuncVar();

// Arror Functions
console.log("=== Arrow Functions ===");
let mul = (a, b) => {
    return a * b;
};
let div = (a, b) => a / b; // {} not required if only one line

//  Closures --> function + lexical scope
function outer() {
    let a = 100;
    function inner() {
        a++;
        console.log(a);
    }
    return inner;
}
let closerFunc = outer();
// Normal expectation: When a function finishes, its local variables should die, right?
// But here's the magic: a does NOT die because inner still references it!
// inner has "closed over" the variable a. It remembers a even though outer finished running.
closerFunc();
closerFunc();
closerFunc();
// : All three calls share the same a variable from the original outer() execution.
let closerFuncTwo = outer();
closerFuncTwo();
closerFuncTwo();
closerFuncTwo();
// Each call to outer() creates a new closure with its own a variable.

// Too much closures might end up in memory leaks
