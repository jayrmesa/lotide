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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
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
  

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

