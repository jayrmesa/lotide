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
  let assertion = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (!eqArrays(actual, expected)) {
    assertion = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(assertion);
  return assertion;
};
  
const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let items = true;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        items = false;
      }
    }
    if (items) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);