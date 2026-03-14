/*1.What is the index of the first element in a JavaScript array?
Ans- 0
💡 Detailed Explanation:
JavaScript arrays are zero-indexed, so the first element is always at index 0.


2.Which statement correctly creates an array of Playwright browser names?
(B)const browsers = ["chromium", "firefox", "webkit"];
💡 Detailed Explanation:
Square brackets are used to create array literals in JavaScript.


3.Which method should you use to reliably check whether a value is an array?
(C)Array.isArray(value)
💡 Detailed Explanation:
Array.isArray(value) is the standard and reliable way to detect arrays in JavaScript.



4.Which statement about JavaScript arrays is true?
(B)They can store mixed data types
💡 Detailed Explanation:
JavaScript arrays are dynamic and can contain strings, numbers, booleans, objects, and other arrays together.


5.What is the value of `["login", "checkout", "logout"].length`?
3
💡 Detailed Explanation:
The length property returns the total number of elements in the array.



6.What does `push()` do in JavaScript?
(C)Adds an element to the end of an array
💡 Detailed Explanation:
push() appends one or more elements to the end of an array.
7.What does `pop()` return?
(B)The last element removed from the array
💡 Detailed Explanation:
pop() removes the last element and returns that removed element.


8.Which method removes the first element from an array?
(A)shift()
💡 Detailed Explanation:
💡 Detailed Explanation:
shift() removes and returns the first element of an array.


9.Which method adds one or more elements to the beginning of an array?
(C)unshift()
💡 Detailed Explanation:
unshift() inserts elements at the start of an array.
💡 Detailed Explanation:
Arrays are reference types. alias and steps point to the same array, so pushing into steps also affects alia
10.What is the output of the following code? `const steps = ["open", "fill"]; const alias = steps; steps.push("submit"); console.log(alias.length);`
3
💡 Detailed Explanation:
💡 Detailed Explanation:
Arrays are reference types. alias and steps point to the same array, so pushing into steps also affects alias.

11.Which statement about `slice()` is correct?
(B)It creates a shallow copy without mutating the original array
💡 Detailed Explanation:
slice() returns a shallow copy of a selected portion and leaves the original array unchanged.


12.Which method can remove or insert elements inside the original array?
(B)splice()
💡 Detailed Explanation:
splice() mutates the original array and can both remove and insert elements.

13.What does `includes()` return?
(B)A boolean
💡 Detailed Explanation:
includes() returns true if the array contains the value, otherwise false.


14.What will `["pass", "fail"].indexOf("skip")` return?
-1
💡 Detailed Explanation:
indexOf() returns -1 when the value is not present in the array.


15.Which loop gives you the actual array values directly?
(B)for...of
💡 Detailed Explanation:
for...of iterates over iterable values, which makes it a good fit for array elements.


16.What does `map()` return?
(B)A new array with transformed values
💡 Detailed Explanation:
map() creates and returns a new array built from the callback result for each elemen



17.Which method should you use to keep only failed test results from an array?
(B)filter()
💡 Detailed Explanation:
filter() returns only the elements that satisfy the condition.




18.What does `find()` return when no element matches?
(D)undefined
💡 Detailed Explanation:
find() returns undefined when it does not locate a matching element.

19.Which statement about `some()` is correct?
(B)It returns true if at least one element matches
💡 Detailed Explanation:
some() stops early and returns true as soon as one element satisfies the condition.ashwini


20.What is the result of `["10", "2", "1"].sort()` with no custom comparator?
(C)["1", "10", "2"]
💡 Detailed Explanation:
Without a comparator, sort() converts values to strings and compares them lexicographically.




21.Which function form is hoisted with its implementation?
(A)Function declaration
💡 Detailed Explanation:
Function declarations are hoisted in full, so they can be called before their definition in the source
22.What happens if you call a function expression stored in `const` before the line where it is defined?
(C)It throws a ReferenceError
💡 Detailed Explanation:
The const binding exists in the temporal dead zone before initialization, so calling it early throws a ReferenceError.


23.What does a JavaScript function return if there is no explicit `return` statement?
(D)undefined
💡 Detailed Explanation:
Functions without an explicit return value return undefined by default.


24.In `fillForm(email, password)`, `email` and `password` are called:
(B)parameters
💡 Detailed Explanation:
Values in the function definition are parameters; the values you pass while calling are arguments.

25.Which syntax sets a default parameter value?
(B)function runTest(retries = 3) {}
💡 Detailed Explanation:
JavaScript uses `parameter = defaultValue` to define default parameter values.


26.What does the rest parameter syntax `...args` do?
(B)Collects remaining arguments into an array
💡 Detailed Explanation:
Rest parameters gather multiple incoming arguments into a real array.


27.What is returned by this arrow function? `const double = x => x * 2;`
(C)x * 2
💡 Detailed Explanation:
A concise arrow function body returns the expression result implicitly.



28.What is true about an arrow function with curly braces?
(B)It needs an explicit `return` to send back a value
💡 Detailed Explanation:
When you use braces in an arrow function body, you must write return explicitly to return a value.


29.What is a callback function?
(B)A function passed into another function to be executed later
💡 Detailed Explanation:
Callbacks are functions supplied to other functions for deferred or controlled execution.


30.What is a higher-order function?
(B)A function that takes another function as an argument or returns on
💡 Detailed Explanation:
Higher-order functions work with other functions, such as map(), filter(), or custom wrappers.


31.What is a closure in JavaScript?
(B)A function bundled with access to its outer lexical scope
💡 Detailed Explanation:
A closure lets a function remember and access variables from its outer scope even after that outer function has finished running.
Que



32.Which statement describes lexical scope correctly?
(A)Inner functions can access variables from outer scopes
💡 Detailed Explanation:
Lexical scope is determined by where code is written. Inner functions can read from outer scopes.



33.Why is `let` usually safer than `var` inside loops?
(B)let creates a new block-scoped binding for each iteration
💡 Detailed Explanation:
let is block-scoped and creates separate bindings in loops, which avoids classic closure bugs with var.

34.What is true about `this` inside an arrow function?
(C)It lexically inherits `this` from the surrounding scope
💡 Detailed Explanation:
Arrow functions do not bind their own this; they use the this value from the surrounding lexical scope.


35.Which option best describes a pure function?
(B)It returns the same output for the same input and avoids side effects
💡 Detailed Explanation:
Pure functions are predictable and easier to test because they do not depend on or mutate external state.


36.Which statement about JavaScript strings is correct?
(B)Strings are immutable
💡 Detailed Explanation:
Strings are immutable in JavaScript, so methods return new strings instead of changing the original



37.What is the value of `"Playwright".length`?
10
💡 Detailed Explanation:
The word "Playwright" contains 10 characters.



38.What does `trim()` do?
(B)Removes whitespace only from the start and end
💡 Detailed Explanation:
trim() removes leading and trailing whitespace but keeps internal spaces untouched.



39.What does `"admin,editor,viewer".split(",")` return?
(B)["admin", "editor", "viewer"]

💡 Detailed Explanation:
split(",") breaks the string into an array wherever the comma delimiter appears.

40.Which method converts `["chromium", "firefox"]` into a single string like `"chromium | firefox"`?
(C)join(" | ")

💡 Detailed Explanation:
join(separator) combines array items into a string using the supplied separator



41.Which characters are used for template literals in JavaScript?
(C)Backticks

💡 Detailed Explanation:
Template literals use backticks and support interpolation with ${...}.




42.Which method is commonly used before text assertions to make comparisons case-insensitive?
(B)toLowerCase()

💡 Detailed Explanation:
toLowerCase() helps normalize text before comparison when case differences are not important.



43.What is true about `includes()` on strings?
(C)It returns a boolean and is case-sensitive
💡 Detailed Explanation:
String includes() returns true or false and matches text case-sensitively unless you normalize first.


44.What does `"locator".slice(0, 4)` return?
(A)"loca"

💡 Detailed Explanation:
slice(start, end) includes the start index and excludes the end index, so characters 0-3 are returned.
45.What does `"fail fail".replace("fail", "pass")` return?
(C)"pass fail"
💡 Detailed Explanation:
replace() with a plain string pattern replaces only the first occurrence.


46.You have `const texts = [" Login ", "Checkout ", " Profile"];`. Which expression best normalizes them for assertion?
(A)texts.map(text => text.trim().toLowerCase())
💡 Detailed Explanation:
map() lets you transform each string individually by trimming whitespace and lowercasing it



47.Which loop is the clearest choice to run the same Playwright step for each browser name in an array?
(A)for...of
💡 Detailed Explanation:
for...of is a clean way to iterate through each browser value in sequence.
48.Which helper design is the most reusable for a Playwright course project?
(B)function login(page, email, password) { /* uses parameters */ }
💡 Detailed Explanation:
Parameterized functions are more reusable and testable because data and page objects are passed in instead of being hard - coded.


49.You read `"admin,editor,viewer"` from a config file.What should you use to turn it into an array of roles ?
    (B)split(",")
💡 Detailed Explanation:
split(",") turns a comma - separated string into an array of role strings.


50.Which option is the cleanest way to build a readable failure message with a variable named`locator` ?
    (B)`Locator not found: ${locator}`
💡 Detailed Explanation:
Template literals make dynamic strings easier to read and maintain, especially in test output message
CODING QUESTIONS

Challenge 1: Playwright Result Summary Generator
Easy
❌ Not Submitted
Problem Description:
You receive an array of Playwright step result objects in the format`{ name, status, durationMs }`, where status can be`"passed"`, `"failed"`, or`"skipped"`.Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and a comma - separated list of failed step names.
📋 Examples & Test Cases:
Input:
results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
Expected Output:
Total Steps: 3
Passed: 1
Failed: 1
Skipped: 1
Total Duration: 1100ms
Failed Steps: fill form
Explanation:
The function loops through the array, counts each status, adds durations, and collects failed step names.
🚀 Optimal Java Solution:
Solution.java
const results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }
];

function printSummary(stepResults) {
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalDuration = 0;
    const failedSteps = [];

    for (const step of stepResults) {
        totalDuration += step.durationMs;

        if (step.status === "passed") {
            passed++;
        } else if (step.status === "failed") {
            failed++;
            failedSteps.push(step.name);
        } else if (step.status === "skipped") {
            skipped++;
        }
    }

    console.log("Total Steps: " + stepResults.length);
    console.log("Passed: " + passed);
    console.log("Failed: " + failed);
    console.log("Skipped: " + skipped);
    console.log("Total Duration: " + totalDuration + "ms");
    console.log("Failed Steps: " + (failedSteps.length ? failedSteps.join(", ") : "None"));
}

printSummary(results);
✨ Key Points:
•	• This solution demonstrates industry best practices
•	• Time and space complexity are optimized
•	• Code follows clean coding principles
•	• Ready for production use
