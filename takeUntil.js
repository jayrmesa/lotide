// Assert Test

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

// Fix Function

const takeUntil = function(array, callback) {
  let result = []; // from previous lessons, and lotide
  for (let element of array) {

    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }
  return result; 
};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);