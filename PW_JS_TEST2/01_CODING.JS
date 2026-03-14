/*










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