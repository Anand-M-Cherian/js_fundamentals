// Primitive or Value types
// JS is a dynamically typed language

let my_name = "Anand";
console.log(my_name);
console.log(typeof my_name);

let my_age = 29;
console.log(my_age);
console.log(typeof my_age);

let my_weight = 80.52;
console.log(my_weight);
console.log(typeof my_weight);

// default value is undefined
// no variable should be manually assigned to undefined
let my_life;
console.log(my_life);
console.log(typeof my_life);
my_life = "peaceful and healthy";
console.log(my_life);
console.log(typeof my_life);

// assign null to represent absence of value
let empty = null;
console.log(empty);
console.log(typeof empty);

// Reference Types - Objects, Arrays and Functions

// Objects are just key value pairs
let course = {
    title: "HHLD",
    price: 20,
    is_purchased: false,
};
console.log(course);
console.log(course.title);
console.log(course["price"]);
console.log(typeof course);

// Reference v/s Value Types

// Value Types --> copied by value
let x = "something";
let y = x;
x = "anything";
console.log(x);
console.log(y);

// Reference Types --> copied by reference
let a = {
    name: "Anand",
};
let b = a;
a.name = "Aleena";
console.log(a.name);
console.log(b.name);

// Arrays
let courses = ["hld", "lld", "dsa", 1, true, null, undefined];
console.log(courses);
console.log(courses[6]);
console.log(typeof courses);

// Functinons
function learnCourse(courseName) {
    console.log("learning " + courseName);
}
learnCourse("dsa");
learnCourse("hhld");
console.log(learnCourse);
console.log(typeof learnCourse);

// Always declare before use (even though functions are hoisted)
// Use const by default (prevents reassignment)
// Use let only when you need to reassign
// Never use var (it's legacy, causes bugs)
