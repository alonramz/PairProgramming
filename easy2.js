// Create a function that checks an array for prime numbers
// then inserts any pimes into a new array.
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkPrime(x) {
    if (x < 2) {
        return false;
    } 
    for(let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return x !== 1
}

let prime = array2.filter(checkPrime)
console.log(prime)

let numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]

let prime = numArray.filter(checkPrime)
console.log(prime)