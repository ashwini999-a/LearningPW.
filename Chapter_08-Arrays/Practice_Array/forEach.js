/*2️⃣ forEach() Method
tests.forEach((test, index) => {
forEach() is an array method that runs a function for every element in the array.

It provides two important parameters:

Parameter	Meaning
test	   current value
index	    position of element

So every time the loop runs:

test → value

index → array position*/

// forEach (no return value)


let tests = ["login", "checkout", "search"];

tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("----");


/*✅ Final Output
0: login
1: checkout
2: search




tests.forEach((test,index) =>{
    console.log('${index}: ${value}');
});
console.log("----");tests.forEach((test,index) =>{
    console.log('${index}:${test}');
});
console.log("----");
tests.forEach((test,index) => {
    console.log('${index}:${value)');
});
console.log("----");
)*/







