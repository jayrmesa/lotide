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




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) { //typical looping as suggested
    if (sentence.charAt(i) !== " ") {  // had to search charAt 
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }
    
  }
  console.log('results', results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);