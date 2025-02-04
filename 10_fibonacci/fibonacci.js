const fibonacci = function(number) {   
    if (number < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    let c = a+b;
    for (let i = 0; i < number; i++) {
        a = b;
        b = c;
        c = a+b;
    }
    return a;
};


// Do not edit below this line
module.exports = fibonacci;
