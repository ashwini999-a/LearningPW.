// Leap Year Checker:
//Create a program that determines whether a given year is a leap year. 
// A leap year is divisible by 4,
//  but not by 100 unless it is also divisible by 400. 
// Use an if-else statement to make this determination.

let a = 2024
if (a % 4 === 0) {
    console.log("This is leap year");
}
else if (a % 100 !== 0) {
    console.log("This is not leap year");
}
else if (a % 400 === 0) {
    console.log("This is leap year");
}
else {
    console.log("This is not leap year");
}