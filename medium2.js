// Create a function that accepts two string1s,
// then determines whether or not the first string1 is an
// checkAnagram of the second string1 by returning a boolean.
// Estring11ample:
// Input: string1 1: So dark the con of man
//  string1 2: Madonna of the Rocks
// Output: True
// Input: string1 1: Things are good
// 	  string1 2: Dogs eat ants
// Output: False


let checkAnagram = function (string1, string2) {
    let sort1 = string1.split('').sort().join('')
    let sort2 = string2.split('').sort().join('')
    return (sort1 === sort2)
}

console.log(checkAnagram("dog", "god"))
console.log(checkAnagram("race", "care"))
console.log(checkAnagram("So dark the con of man", "Madonna of the Rocks"))
console.log(checkAnagram("Things are good", "Dogs eat ants"))
//split turns string into array
//sort = abcd would be like bacd
//join to combine back to string and reposition
