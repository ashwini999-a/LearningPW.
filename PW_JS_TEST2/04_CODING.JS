/*Challenge 4: Browser Execution Planner
Medium
❌ Not Submitted
Problem Description:
You have an array of all supported browsers and another array of temporarily blocked browsers. Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

📋 Examples & Test Cases:
Input:
allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]
Expected Output:
{ runnable: ["chromium", "webkit"], blocked: ["firefox"], plan: "Run on: chromium, webkit | Skip: firefox" }
Explanation:
The function filters out blocked browsers and formats both lists into a readable plan.*/






function buildExecutionPlan(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
  const blocked = allBrowsers.filter(browser => blockedBrowsers.includes(browser));

  return {
    runnable: runnable,
    blocked: blocked,
    plan: "Run on: " + runnable.join(", ") + " | Skip: " + (blocked.length ? blocked.join(", ") : "none")
  };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(buildExecutionPlan(allBrowsers, blockedBrowsers));




/*✨ Key Points:
• This solution demonstrates industry best practices
• Time and space complexity are optimized
• Code follows clean coding principles
• Ready for production use*/

