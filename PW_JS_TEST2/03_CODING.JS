/*Challenge 3: Normalize Locator Error Messages
Medium
❌ Not Submitted
Problem Description:
Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

📋 Examples & Test Cases:
Input:
rawMessage = "   Locator   not found after TIMEOUT   "
Expected Output:
Normalized: locator not found after timeout
Category: TIMEOUT
Explanation:
After normalization, the message contains both "locator" and "timeout", but TIMEOUT takes priority.*/





function normalizeError(rawMessage) {
    const normalized = rawMessage
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .join(" ");

    let category = "GENERAL";

    if (normalized.includes("timeout")) {
        category = "TIMEOUT";
    } else if (normalized.includes("locator")) {
        category = "LOCATOR";
    }

    console.log("Normalized: " + normalized);
    console.log("Category: " + category);
}

normalizeError("   Locator   not found after TIMEOUT   ");



/*✨ Key Points:
• This solution demonstrates industry best practices
• Time and space complexity are optimized
• Code follows clean coding principles
• Ready for production use*/