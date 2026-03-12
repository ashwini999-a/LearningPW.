1️⃣ Question
console.log([] + []);

Output
""
Explanation
[] becomes an empty string ""
"" + "" = ""
So the output is an empty string.



2️⃣ Question
console.log([] + {});

Output
"[object Object]"
Explanation
[] → ""
{ } → "[object Object]"

So:
"" + "[object Object]"



3️⃣ Question
console.log(true + true);

Output
2
Explanation
Value	Number
true	1
true	1
1 + 1 = 2


4️⃣ Question
console.log("5" - 2);

Output
3
Explanation

"5" becomes number 5

5 - 2 = 3
JavaScript converts string to number when using -.




5️⃣ Question
console.log("5" + 2);

Output
"52"
Explanation
  + with a string means concatenation.
    So:
"5" + 2 = "52"



⭐ Very Important Interview Rule
Operator	Behavior
  + String concatenation if one value is string
    - Converts to number
      * Converts to number
        / Converts to number


Example
console.log("5" * 2);

Output:
10