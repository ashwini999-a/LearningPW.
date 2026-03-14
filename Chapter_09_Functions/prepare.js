function getresult(score) {
    return score >= 70 ? "pass" : "fail";
}
console.log(getresult(80));
console.log(getresult(40));





function greet() {
    console.log("Hi");
}
greet();






function greetByName(Name) {
    console.log("Hi", Name);
}

greetByName("Pramod");
greetByName("Paru");
greetByName("Parag");
greetByName("Prachi");
greetByName("Priya");






/*function sayhello() {
    console.log("Hi");
    return "Hello";
}
let relative = sayhello();
console.log(relative);*/




function sayhello() {
    console.log("hi");
    return ("hello");
}
let relative = sayhello();
console.log(relative);





function sumofTwoNumbers(a, b) {
    return a + b;
}
let result = sumofTwoNumbers(9, 9);
console.log(result);





function greet(name) {
    return 'Hello ,${name}!';
}
console.log(greet("Aradhya"));




