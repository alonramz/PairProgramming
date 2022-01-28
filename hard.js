// Write a function that takes in a string and returns a boolean value 
// whether or not the string contains a pair of matching brackets 
// ({}, [], ()). These brackets must be nested appropriately 
// in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

// brackets brackets
// process each character in the string 
// and find an open parenthesis push it onto array
const balance = function(x) {
    let arr = [];
    let characters = { ')': '(', '}': '{', ']': '['};
  for (let char of x) { // standard for loop. check to see if the character is an 
    //open parenthesis by making sure it is not a key. 
    //After it is an open parenthesis, push it onto array.
        
      if (!characters[char]){
         arr.push(char); 
      } 
      else if (arr.pop() !== characters[char]){ //closed parenthesis take 
        //open one off of array and see if it is of the same type. 
        //If it isn’t return false, otherwwise go through the rest of the string
        //pop take off array
          return false;
      } 
    }
    return arr.length === 0; // array length is 0
  };

console.log(balance("{hello world}"));
// console.log(brackets(“{hello world]” brackets(x);


let brackets = (str) =>{
    let arr = [];
      let open = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
      }
      let closed = {
        '}': true,
        ']': true,
        ')' : true,
      }
      for ( let i = 0; i < str.length; i++){
        let x = str;
  
        if (open[x]){
          arr.push(x);
        }else if(closed [x]){
          if(open[arr.pop()] !== x){
            return false;
          }
        }
      }
      return arr.length === 0;
  }
  console.log(brackets("{hello world}"));