/*1️⃣ What reduce() Does
reduce() is used to combine all array values into one single value.
Example uses:
Sum of numbers
Product of numbers
Counting items


2️⃣ Syntax of reduce()
Defination:reduce() is used to convert an array into a single value. 
In this example it adds all the scores together and returns the total sum.

array.reduce((accumulator, currentValue) => result, initialValue)
Part	Meaning
accumulator (sum)	stores the running result
currentValue (s)	current element in array
initialValue (0)	starting value


6️⃣ Meaning of (sum, s) => sum + s
sum → running total
s → current score
sum + s → add current score to total*/



let total = scores.reduce((sum, s) => sum + s, 0); //351
console.log(total);

















/*Question
Count the frequency of elements in an array using reduce().
Example array:
let arr = [1,2,2,3,3,3,4];
Expected Output:
{1:1, 2:2, 3:3, 4:1}


⭐ Interview Tip (Very Important)

If interviewer asks:

“Where is this useful?”

You can say:

This is useful for counting duplicates, analyzing data,
 and grouping elements in arrays.

*/


/*let arr = [1, 2, 2, 3, 3, 3, 4];

let count = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(count);*/




/*1️⃣ Find the Maximum Number Using reduce()

Question
Find the largest number in an array.*/

/*let arr = [10, 45, 23, 67, 12];
let max = arr.reduce((a, b) => a > b ? a : b);
console.log(max);*/


let arr = [10, 45, 23, 67, 12];
let min = arr.reduce((a, b) => a < b ? a : b);
console.log(min);



/*If the initial value is not provided in reduce(), 
JavaScript automatically takes the first element of the array as the
 accumulator and starts iteration from the second element.*/
