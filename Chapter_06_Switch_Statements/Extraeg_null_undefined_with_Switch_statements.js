//To handle both null and undefined in a single switch statement, 
// you use the grouping (fall-through) technique. 
// Because switch uses strict equality (===), it treats null and undefined as distinct values; 
// however, by stacking their cases, you can force them to share the same logic.





let response = null; // Could also be undefined

switch (response) {
    case null:
    case undefined:
        console.log("No value present (either null or undefined).");
        break;
    default:
        console.log("A valid value exists.");
}