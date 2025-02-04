const palindromes = function (word) {
    //remove spaces
    word = word.replaceAll(" ", "");

    //turn the word into an array, filter out punctuation and make it all lowercase
    let word_filtered = word.split("")
    .filter((item) => {
        if (item == "," || item == "." || item == "!" || item == "?" || item == ";" || item == ":") {
            return false;
        }
        else {
            return true;
        }
    })
    .map((item) => item.toLowerCase());
    
    //reverse the word (using .slice() to create a copy and not reverse the original array)
    let word_reversed = word_filtered.slice().reverse().join("");
    word_filtered = word_filtered.join("");

    return word_filtered === word_reversed;
}


// Do not edit below this line
module.exports = palindromes;
