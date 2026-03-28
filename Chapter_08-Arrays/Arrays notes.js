🔟 What is filter() in JavaScript ?
  Answer :
  filter() returns elements that match a condition.

    Example:

let arr = [10, 20, 30, 40];

let result = arr.filter(x => x > 20);

Output:

[30, 40]



9️⃣ What is map() in JavaScript ?

  Answer :
  map() creates a new array by applying a function to each element.

    Example:

let arr = [1, 2, 3];

let result = arr.map(x => x * 2);

Output:

[2, 4, 6]




🔟 What is filter() in JavaScript ?
  Answer :
  filter() returns elements that match a condition.
    Example:
let arr = [10, 20, 30, 40];
let result = arr.filter(x => x > 20);
Output:
[30, 40]




1️⃣1️⃣ How do you loop through an array ?
  let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);



}
1️⃣2️⃣ What is includes() in JavaScript ?
  It checks if a value exists in an array.
let arr = [10, 20, 30];
arr.includes(20);
Output:
true

✅ Common Coding Interview Question

Reverse an array
let arr = [1, 2, 3, 4];
let rev = arr.reverse();
console.log(rev);



5️⃣ What is splice() in JavaScript ?
  Answer :
  splice() is used to add, remove, or replace elements in an array.
    Example:
let arr = [1, 2, 3, 4];
arr.splice(2, 1);



6️⃣ What is slice() in JavaScript ?
  Answer :
  slice() returns a new array without changing the original array.
    Example:
let arr = [10, 20, 30, 40];
let newArr = arr.slice(1, 3);
Output:
[20, 30]


JavaScript Array Coding Questions asked in companies

1️⃣ Reverse an Array
Question: Reverse the array.
let arr = [1, 2, 3, 4, 5];
Answer:
let arr = [1, 2, 3, 4, 5];
let reversed = arr.reverse();
console.log(reversed);

Output:
[5, 4, 3, 2, 1]



2️⃣ Find the Maximum Number in an Array

Question: Find the largest number.

let arr = [10, 5, 20, 8];

Answer:

let arr = [10, 5, 20, 8];

let max = Math.max(...arr);

console.log(max);

Output:

20



3️⃣ Remove Duplicate Elements

Question: Remove duplicates from an array.

let arr = [1, 2, 2, 3, 4, 4, 5];

Answer:

let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr)];

console.log(unique);

Output

[1, 2, 3, 4, 5]

4️⃣ Find Even Numbers

Question: Return only even numbers.

let arr = [1, 2, 3, 4, 5, 6];

Answer

let arr = [1, 2, 3, 4, 5, 6];

let even = arr.filter(num => num % 2 === 0);

console.log(even);

Output

[2, 4, 6]

5️⃣ Sum of All Numbers

Question: Find the total sum.

let arr = [1, 2, 3, 4];

Answer

let arr = [1, 2, 3, 4];

let sum = arr.reduce((a, b) => a + b, 0);

console.log(sum);

Output

10


6️⃣ Find Second Largest Number

Question: Find second largest number.

let arr = [10, 20, 30, 40];

Answer

let arr = [10, 20, 30, 40];

arr.sort((a, b) => b - a);

console.log(arr[0]);

Output

30


7️⃣ Merge Two Arrays

Question: Merge two arrays.

let arr1 = [1, 2];
let arr2 = [3, 4];

Answer

let merged = [...arr1, ...arr2];

console.log(merged);

Output

[1, 2, 3, 4]


8️⃣ Find Missing Number

Question: Find missing number.

[1, 2, 3, 5]

Answer

let arr = [1, 2, 3, 5];

for (let i = 1; i <= 5; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}

Output

4

9️⃣ Count Occurrences

Question: Count how many times a number appears.

let arr = [1, 2, 2, 3, 2];

Answer

let arr = [1, 2, 2, 3, 2];

let count = arr.filter(x => x === 2).length;

console.log(count);

Output

3


🔟 Flatten an Array

Question: Convert nested array to single array.

let arr = [1, [2, 3], [4, 5]];

Answer

let arr = [1, [2, 3], [4, 5]];

let flat = arr.flat();

console.log(flat);

Output

[1, 2, 3, 4, 5] -



  20 TRICKY JavaScript Array Interview Questions asked in companies like TCS,
    Infosys, Capgemini, Accenture. 
These are very useful for QA / Automation tester interviews.

1️⃣ Reverse an array without reverse()
let arr = [1, 2, 3, 4];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log(rev);


2️⃣ Find duplicate elements
let arr = [1, 2, 3, 2, 4, 5, 1];
let duplicates = arr.filter((item, index) =>
  arr.indexOf(item) !== index
);
console.log(duplicates);


3️⃣ Find the largest number
let arr = [10, 50, 20, 40];
let max = Math.max(...arr);
console.log(max);


4️⃣ Find the smallest number
let arr = [10, 50, 20, 5];
let min = Math.min(...arr);
console.log(min);


5️⃣ Remove duplicates
let arr = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(arr)];
console.log(unique);


6️⃣ Check if array contains a value
let arr = [10, 20, 30];
console.log(arr.includes(20));


7️⃣ Find sum of array
let arr = [1, 2, 3, 4];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);


8️⃣ Find even numbers
let arr = [1, 2, 3, 4, 5, 6];
let even = arr.filter(num => num % 2 === 0);
console.log(even);


9️⃣ Find second largest number
let arr = [10, 20, 30, 40];
arr.sort((a, b) => b - a);
console.log(arr[1]);


🔟 Merge two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log(merged);


1️⃣1️⃣ Find missing number
let arr = [1, 2, 3, 5];
for (let i = 1; i <= 5; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}


1️⃣2️⃣ Flatten array
let arr = [1, [2, 3], [4, 5]];
let flat = arr.flat();
console.log(flat);


1️⃣3️⃣ Convert array to string
let arr = ["Hello", "World"];
console.log(arr.join(" "));
Output
Hello World


1️⃣4️⃣ Find index of element
let arr = [10, 20, 30];
console.log(arr.indexOf(20));


1️⃣5️⃣ Check if variable is array
let arr = [1, 2, 3];
console.log(Array.isArray(arr));


1️⃣6️⃣ Add element at beginning
let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);


1️⃣7️⃣ Remove first element
let arr = [1, 2, 3];
arr.shift();
console.log(arr);


1️⃣8️⃣ Find frequency of elements
let arr = [1, 2, 2, 3, 3, 3];
let count = {};
arr.forEach(num => {
  count[num] = (count[num] || 0) + 1;
});
console.log(count);


1️⃣9️⃣ Sort array
let arr = [5, 2, 8, 1];
arr.sort((a, b) => a - b);
console.log(arr);


2️⃣0️⃣ Find common elements in two arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let common = arr1.filter(x => arr2.includes(x));
console.log(common);
Output
[3, 4]

  ** Find second largest number
let arr = [10, 20, 30, 40];
arr.sort((a, b) => b - a);
console.log(arr[1]);
Explanation:
Array Creation
let arr = [10, 20, 30, 40];
An array named arr is created with four numbers.
[10, 20, 30, 40]
2️⃣ Sorting the Array
arr.sort((a, b) => b - a);
sort() is used to arrange elements in an array.
The function (a, b)=> b - a sorts the numbers in descending order(largest → smallest).
How the comparison works
a	   b	b - a	  Result
10	  20	10	  20 comes first
20	  30	10	  30 comes first
So the array becomes:
[40, 30, 20, 10]
3️⃣ Accessing the Element
console.log(arr[1]);
Array index starts from 0.

Index	Value
0	40
1	30
2	20
3	10

So:
arr[1] = 30

✅ Final Output
30



✅ Most Asked in Interviews
1.Remove duplicates
2.Find second largest number
3.Find missing number
4.Flatten array
5.Find duplicates
6.Reverse array without method

⭐ If you want, I can also show you:

15 Very Tricky JavaScript Output Questions(asked in interviews)

JavaScript Coding Questions asked in Automation Testing Interviews

Playwright + JavaScript Interview Coding Questions(very useful for QA).