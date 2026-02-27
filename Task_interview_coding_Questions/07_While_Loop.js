//1️⃣ Print "Playwright" 5 times

//2️⃣ Print numbers from 1 to 10

//3️⃣ Print even numbers from 1 to 20

//4️⃣ Calculate sum of first 10 natural numbers

//5️⃣ Print the multiplication table of 7

//Print "Playwright" 5 times

let a = 0;
while (a < 5) {
    console.log("Playwright");
    a++;
}


//2️⃣ Print numbers from 1 to 10
let i = 1;
while (i < 11) {
    console.log(i);
    i++
}


//3️⃣ Print even numbers from 1 to 20
let c = 2;
while (c <= 20) {
    console.log(c)
    c = c + 2;
}

//Calculate sum of first 10 natural numbers
let num = 1;
let sum = 0;
while (num <= 10) {
    sum = sum + num;
    num++
}
console.log("The sum is:", sum);

////5️⃣ Print the multiplication table of 7
let b = 1;
let multi = 7;
while (b <= 10) {
    num = multi * b;
    b++;
    console.log("The table of 7 is:", num);


}
