// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// console.log(plants.pop());
// // Expected output: "tomato"

// console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// const fruits = ["apple", "mango", "banana", "orange", "plum"];
// console.log(fruits.pop());

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// const animals = ["1", "2", "3"];

// const count = animals.push("cows");
// console.log(count);
// // Expected output: 4
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push("chickens", "cats", "dogs");
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// const array1 = ["pigs", "goats", "sheep", "cows"];

// const collection = collect({
//   firstname: "Michael",
//   lastname: "Cera",
// });

// collection.pull("lastname");
// console.log(collection);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);
console.log(sum);
