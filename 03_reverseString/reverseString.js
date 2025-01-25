const reverseString = function(inputString) {
    let stringLength = inputString.length;
    let result = "";
    if (stringLength > 0) {
        for (let i = stringLength - 1; i >= 0; i--) {
            result += inputString[i];
        }
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
