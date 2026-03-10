/*2️⃣ map() — Transform Every Element
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);
What map() does

It checks every element

It creates a new array

It does not change the original array*/



//2️⃣ map() — Transform Every Element

//let scores = [45, 82, 91, 60, 73];
//let grades = scores.map(s => s > 70 ? "Pass" : "fail")
//console.log(grades);


let scores = [45, 82, 91, 60, 73];
let grades = scores.map(n => n > 80 ? "GradeA" : "GradeB")
console.log(grades);





//multiply
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = numbers.map(b => b * 2)
console.log(result)*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = numbers.map(b => b - 2)
console.log(result)



//n is the parameter (input value) of the function.
/* => is called an Arrow Function

It is a short way to write a function in JavaScript.
/*Example:

numbers.map(n => n * 2)

Here:

n = each number in the array

The function multiplies each number by 2*/