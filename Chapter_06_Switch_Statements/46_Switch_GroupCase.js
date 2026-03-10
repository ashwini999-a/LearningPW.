//How it Works
//Strict Equality: The switch statement compares the variable browser (which is "Edge")
//against each case using strict equality (===).
//Grouping (Fall-through): In the first block, Chrome, Edge, Brave, 
//and Opera are listed sequentially without break statements between them.
//Because browser is "Edge", the engine matches case "Edge".
//Since there is no break immediately after "Edge", it "falls through" to the next lines 
//until it finds a break.
//Execution: It reaches console.log("Chromium Project!"), executes it,
//and then hits the break statement, which exits the entire switch block. 

//Important Note: If you forgot the break after "Chromium Project!", the code would continue
//  to execute and also log "Mozilla Project!", even though the browser isn't Firefox. 










let browser = "Edge";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}
