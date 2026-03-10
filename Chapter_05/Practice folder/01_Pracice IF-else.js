let age = 22;
if (age > 20) {
    console.log("Good Day");
}
else {
    console.log("Good evening");
}
//If time is less than 10:00, create a "Good morning" greeting, if not,
//  but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
let time = 22;
if (time < 10) {
    console.log("Good Morning");
}
else if (time < 20) {
    console.log("Good Day");
}
else {
    console.log("Good Evening");
}
//This example will write a link to either W3Schools or to the World Wildlife Foundation (WWF). By using a random number, there is a 50% chance for each of the links.


//leass than 0.5= "<a href='https://w3schools.com'>Visit W3Schools</a>";
//greater than 0.5="<a href='https://wwf.org'>Visit WWF</a>";
let link = 0.1;
if (Math.random() < 0.5) {
    console.log("<a href='https://w3schools.com'>Visit W3Schools</a>");
} else {
    console.log("<a href='https://wwf.org'>Visit WWF</a>");
}