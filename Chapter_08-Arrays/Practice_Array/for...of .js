
let tests = ["login", "checkout", "search"];
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");


/*✅ Final Output
0 login
1 checkout
2 search
----*/


//Explanation of query
/*tests.entries()
tests.entries()

entries() returns pairs of index and value.

Like this internally:

[0, "login"]
[1, "checkout"]
[2, "search"]

3️⃣ Destructuring
for (let [i, test] of tests.entries())

Here array destructuring is used.

Variable	    Gets
   i	        index
  test	        value

So each loop receives:

[i, test]

----*/

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log((student, "=>", students[student]));
};


for (let [i, student] of students.entries()); {
    console.log(i, student);
}