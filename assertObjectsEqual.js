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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

const obj1keys = Object.keys(object1);

  for (let i = 0; i < obj1keys.length; i++) {
    
    let key = obj1keys[i];

    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

    return true;
  };


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects (actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};


assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });