
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Dynamic property access  
// 🧠 Why it works:
//key = "email" → property name
//user[key] → same as user["email"]
//👉 So it gives the value: "abc@gmail.com"           //
const key = "email";
console.log(user[key]);


// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);
