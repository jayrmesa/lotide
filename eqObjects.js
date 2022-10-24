const eqArrays = require('./eqArrays');
 
// Returns true if both objects have identical keys with identical values.
// If not then false

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //Checks if its an array
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && object1[key] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;



