//✅ Triangle Classifier:


//Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, determine
//  if the triangle is equilateral (all sides are equal),
//  isosceles (exactly two sides are equal), or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.

let side1 = 10;
let side2 = 20;
let side3 = 0;
if (side1 === side2 && side2 === side3 && side3 === side1) {
    console.log("Triangle is equilateral");
}
else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("Triangle is isosceles");
}
else {
    console.log("Triangle is scalene");
}