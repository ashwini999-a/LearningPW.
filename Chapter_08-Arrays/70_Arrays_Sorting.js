
//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default


let numbers = [10, 2, 5, 1, 9];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers);

numbers.sort((a, b) => b - a); // descending
console.log(numbers);
