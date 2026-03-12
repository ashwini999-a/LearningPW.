Here are 10 JavaScript Array Output Questions commonly asked in companies like
    ** Tata Consultancy Services(TCS), Infosys, and Capgemini.
  Try to guess the output first, then check the answer. 🚀

1️⃣ Question
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3));

✅ Output
[2, 3]
✔ slice(start, end) returns elements from index 1 to before 3.
    *****************************************************************************

    2️⃣ Question
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

✅ Output
[1, 2, 3, 4]
✔ push() adds element at the end.
*****************************************************************************

    3️⃣ Question
let arr = [10, 20, 30];
arr.pop();
console.log(arr);

✅ Output
[10, 20]
✔ pop() removes last element.
************************************************************************************


    4️⃣ Question
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);

✅ Output
[0, 1, 2, 3]
✔ unshift() adds element at the beginning.

***********************************************************************************


    5️⃣ Question
let arr = [1, 2, 3];
arr.shift();
console.log(arr);

✅ Output
[2, 3]
✔ shift() removes first element.
**************************************************************************************


    6️⃣ Question
let arr = [5, 3, 8, 1];
arr.sort();
console.log(arr);

✅ Output
[1, 3, 5, 8]
✔ sort() arranges numbers as strings by default.
***********************************************************************************

    7️⃣ Question
let arr = [10, 20, 30, 40];
arr.splice(2, 1);
console.log(arr);

✅ Output
[10, 20, 40]
✔ splice(2, 1) removes 1 element from index 2.
    *****************************************************************************************


    8️⃣ Question
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);
console.log(newArr);

✅ Output
[2, 4, 6]
✔ map() creates a new array.

*************************************************************************************

    9️⃣ Question
let arr = [10, 20, 30];
let result = arr.reduce((a, b) => a + b);
console.log(result);

✅ Output
60
✔ reduce() adds all elements.
***********************************************************************************


🔟 Question
let arr = [1, 2, 3, 4];
let result = arr.filter(x => x % 2 == 0);
console.log(result);

✅ Output
[2, 4]
✔ filter() keeps elements that match the condition.

*********************************************************************************



⭐ Interview Tip

Many companies like Accenture, Wipro, and HCLTech often ask questions on:

map()

filter()

reduce()

splice()

slice()

sort()

These are very important for QA Automation interviews.