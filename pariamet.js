// Assuming you have imported Vega library correctly
// const vega = require('vega');

function isVgRangeStep(range) {
    // Example implementation; your actual implementation may vary
    return range && typeof range === 'object' && 'step' in range;
}

function processScaleRange(scaleRange) {
    if (scaleRange && isVgRangeStep(scaleRange) && vega.isNumber(scaleRange.step)) {
        // Your logic here
        console.log(`The step value is: ${scaleRange.step}`);
        // Perform operations using scaleRange.step
    } else {
        console.log("scaleRange is not a valid range step or step is not a number.");
    }
}

// Usage example
let scaleRange = { step: 10 };

processScaleRange(scaleRange); // Output: The step value is: 10

scaleRange = { step: "not a number" };

processScaleRange(scaleRange); // Output: scaleRange is not a valid range step or step is not a number.
