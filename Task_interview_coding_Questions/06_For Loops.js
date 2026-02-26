//1️⃣ Print "Hello" 5 times

//2️⃣  Print numbers from 1 to 10

//3️⃣ Print even numbers from 1 to 20

//4️⃣ Print the sum of first 10 natural numbers

//5️⃣ Print the multiplication table of 5

//1️⃣ Print "Hello" 5 times
for (let a = 0; a < 5; a++) {
    console.log("Hello");
}

//2️⃣  Print numbers from 1 to 10
for (i = 1; i < 10; i++) {
    console.log(i);
}

//3️⃣ Print even numbers from 1 to 20
for (i = 0; i < 20; i++)
    if (i % 2 === 0) {

        console.log("The number is Even number =", i);
    }

// Print the sum of first 10 natural numbers
let c = 0;
for (let i = 1; i <= 10; i++) {
    c = c + i;
}

console.log(c);

//Print the multiplication table of 5
let multi = 5;
for (let i = 1; i <= 10; i++) {
    num = multi * i;
    console.log("The multiplication table of 5 = ", num);
}





