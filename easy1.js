// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odd = [];
let even = [];

function oddOrEven(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    } else {
      odd.push(num[i]);
    }
  }
}

oddOrEven(array);
console.log(odd);
console.log(even);
