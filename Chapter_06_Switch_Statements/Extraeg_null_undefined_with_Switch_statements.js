//To handle both null and undefined in a single switch statement, 
// you use the grouping (fall-through) technique. 
// Because switch uses strict equality (===), it treats null and undefined as distinct values; 
// however, by stacking their cases, you can force them to share the same logic.

/*4️⃣ Why developers sometimes write it this way
This pattern is useful when checking missing API responses or 
empty data in testing.
Example in automation testing:
if (response == null)
But with switch you explicitly handle both cases.


5️⃣ Important note
In JavaScript:
null → intentional empty value
undefined → variable not assigned yet
Example:
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

✅ Summary

response value	      Output
  null	           No value present
undefined	       No value present
anything else	   A valid value exists*/





let response = null; // Could also be undefined

switch (response) {
    case null:
    case undefined:
        console.log("No value present (either null or undefined).");
        break;
    default:
        console.log("A valid value exists.");
}