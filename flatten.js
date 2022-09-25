const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
 
  for (let i = 0;  i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  let message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (!eqArrays(actual, expected)) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(message);
  return message;
};

const flatten = function(array) {
    let newArr = [];
  
    for (let val of array) {
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          newArr.push(val[i]);
          
        }
  
      } else {
        newArr.push(val);
      }
  
      
    }
    return newArr;
  };
  
console.log(flatten([1, 2, [3, 4], 5, [6]]));

const nums = [1, 2, [3, 4], 5, [6]];
let numsFlattened = flatten(nums);
assertArraysEqual(numsFlattened, [1,2,3,4,5,6]);