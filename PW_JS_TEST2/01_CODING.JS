/*
Challenge 1: Playwright Result Summary Generator
Easy
❌ Not Submitted
Problem Description:
You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`,
 where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints a summary report 
 with total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

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
The function loops through the array, counts each status, adds durations, and collects failed step names*/





/*const results= [
    { name: "open login", status: "passed", durationMs: 400 },     //Creating the data (results)
    { name: "fill form", status: "failed", durationMs: 700 },     //
     { name: "submit", status: "skipped", durationMs: 0 }]

/*Each object represents a test step.

Example:

name	             status	                duration
open login	         passed	                  400ms
fill form	         failed	                  700ms
submit	             skipped	               0ms

So we have 3 test steps.*/





/*function printsummary(stepresults)
/*
This creates a function named printSummary.
The function takes one parameter:
stepResults
When we call the function, we will pass the results array.*/

/*(
    let passed = 0;
let failed = 0;
let skipped = 0;
let duration = 0;
const failedasteps = [];
 )



/*3️⃣ Step 3: Creating counters
let passed = 0;
let failed = 0;
let skipped = 0;
let totalDuration = 0;
const failedSteps = [];

These are variables to store counts.

Variable	                Purpose
passed	                count passed steps
failed	                count failed steps
skipped	                count skipped steps
totalDuration	        total time of all steps
failedSteps	            names of failed steps
4️⃣ Step 4: Loop through each step



for(const step of stepresults){
   totalduration += step.durationMS
}*/


















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