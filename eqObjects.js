const eqArrays = require('./eqArrays');
 
// Returns true if both objects have identical keys with identical values.
// If not then false

 const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

const obj1keys = Object.keys(object1);

  for (let i = 0; i < obj1keys.length; i++) {
    
    let key = obj1keys[i];
//Checks if its an array
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

    return true;
  };
  

module.exports = eqObjects; 

