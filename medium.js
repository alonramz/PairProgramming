// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

// var vowels = ["a", "e", "i", "o", "u"];

function vowelChecker(x) {
    if ((x === "a") || (x === "e") || (x ==="i") || (x ==="o") || (x ==="u")) {
        console.log("this is a vowel")
    } else {
        console.log("this is not a vowel")
    }
}
vowelChecker("b");
vowelChecker("a");


