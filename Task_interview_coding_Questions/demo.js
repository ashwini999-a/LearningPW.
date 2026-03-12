/*let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

🧠 Simple Rule to Remember
Code	                  Sorting Type
arr.sort()	              Alphabetical
arr.sort((a,b)=>a-b)	  Numbers (small → big)
arr.sort((a,b)=>b-a)	  Numbers (big → small)





*/


/*let responseTimes = [320, 85, 1200, 450, 99];

let sorted = responseTimes.sort((a, b) => a - b);

console.log("Fastest:", sorted[0]);*/



let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);