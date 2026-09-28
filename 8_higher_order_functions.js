// Higher Order Functions in JavaScript

// A higher-order function is a function that takes another function as an argument, returns a function, or both.

// Example 1: forEach is a higher-order function that takes a function as an argument
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

// Example 2: map is a higher-order function that takes a function and returns a new array
const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

// Example 3: filter is a higher-order function that takes a function and returns a new array
const evens = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evens); // [2, 4]

// Example 4: A function that returns another function
function createGreeter(greet) {
    return function(name) {
        console.log(greet + ', ' + name);
    };
}

const greeter = createGreeter('Hello');
greeter('World'); // Hello, World