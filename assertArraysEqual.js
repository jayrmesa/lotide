const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
 
  for (let i = 0;  i < actual.length; i++){
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])){
      if(!eqArrays(actual[i], expected[i])){
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

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
  
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

