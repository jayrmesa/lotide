const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  let message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  if (!eqObjects(actual, expected)) {
    message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  
  console.log(message);
  return message;
};

module.exports = assertObjectsEqual;
