/*
Challenge 2: Build Test Users from Arrays
Easy
❌ Not Submitted
Problem Description:
Write a JavaScript function that receives two arrays: one with names and one with roles.
 Return a new array of user objects in the format `{ username, email, role }`. 
 The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.

📋 Examples & Test Cases:
Input:
names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
Expected Output:
[{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]
Explanation:
Each name is normalized into a username and reused to build the email.*/





function buildUsers(names, roles) {
    const users = [];

    for (let index = 0; index < names.length; index++) {
        const username = names[index].trim().toLowerCase().split(" ").join("_");

        users.push({
            username: username,
            email: username + "@playwrightbatch.com",
            role: roles[index]
        });
    }

    return users;
}

const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

console.log(buildUsers(names, roles));





/*✨ Key Points:
• This solution demonstrates industry best practices
• Time and space complexity are optimized
• Code follows clean coding principles
• Ready for production use*/