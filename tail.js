const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array) {
  return array.length > 2 ? array.slice(1) : [];
};

assertEqual(words.length, 3); // original array should still have 3 elements!