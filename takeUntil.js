const takeUntil = function(array, callback) {
  let result = []; 
  for (let element of array) {

    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }
  return result; 
};

module.exports = takeUntil; 

