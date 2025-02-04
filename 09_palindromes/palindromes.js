const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let word_filtered = word.split("")
    .map((item) => item.toLowerCase())
    .filter((item) => alphanumerical.includes(item));
    
    //reverse the word (using .slice() to create a copy and not reverse the original array)
    let word_reversed = word_filtered.slice().reverse().join("");
    word_filtered = word_filtered.join("");

    return word_filtered === word_reversed;
}


// Do not edit below this line
module.exports = palindromes;
