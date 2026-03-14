/*Challenge 5: Reusable Step Runner with Callback
Hard
❌ Not Submitted
Problem Description:
Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. If the callback throws an error, catch it and return `passed: false` with the error message.

📋 Examples & Test Cases:
Input:
runStep("open dashboard", () => "Page loaded")
Expected Output:
{ stepName: "open dashboard", passed: true, message: "Page loaded" }
Explanation:
The callback succeeds, so the wrapper marks the step as passed.

🚀 Optimal Java Solution:
Solution.java*/




function runStep(stepName, actionFn) {
    console.log("Starting step: " + stepName);

    try {
        const result = actionFn();

        return {
            stepName: stepName,
            passed: true,
            message: typeof result === "string" ? result : "Step completed successfully"
        };
    } catch (error) {
        return {
            stepName: stepName,
            passed: false,
            message: error.message
        };
    }
}

const successResult = runStep("open dashboard", function () {
    return "Page loaded";
});

const failureResult = runStep("click submit", function () {
    throw new Error("Locator not found");
});

console.log(successResult);
console.log(failureResult);




/*✨ Key Points:
• This solution demonstrates industry best practices
• Time and space complexity are optimized
• Code follows clean coding principles
• Ready for production use*/