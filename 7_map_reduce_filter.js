// Higher Order Array manipulation functions

const nums = [1, 2, 3, 4, 5];
console.log(nums);

// MAP
const doubledNums = nums.map((num) => 2 * num);
console.log(doubledNums);

// FILTER
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens);

// REDUCE
const product = nums.reduce((accumulator, num) => {
    return accumulator * num;
}, 1);
console.log(product);
