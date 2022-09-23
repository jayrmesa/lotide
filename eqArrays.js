const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
 
  for (let i = 0;  i < actual.length; i++){
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])){
      if(!eqArrays(actual[i], expected[i])){
        return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
      }
    } else if (actual[i] !== expected[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } 
    return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  };
 

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false