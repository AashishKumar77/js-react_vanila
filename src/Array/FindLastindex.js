// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

const array1 = [5, 135, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
