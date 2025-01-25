const removeFromArray = function() {
    let valueCount = arguments.length - 1;
    let inputArray = arguments[0];
    for (let i = 1; i <= valueCount; i++) {
        while (inputArray.indexOf(arguments[i]) != -1) {
            inputArray.splice(inputArray.indexOf(arguments[i]), 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
