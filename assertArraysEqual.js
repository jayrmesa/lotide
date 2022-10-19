const eqArrays = require('./eqArrays');

//check if two values are actual and expected, if not assertion fails
const assertArraysEqual = function(actual, expected) {
  let message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (!eqArrays(actual, expected)) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(message);
  return message;
};

module.exports = assertArraysEqual; 
