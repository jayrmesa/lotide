const flatten = function(array) {
    let newArr = [];
  
    for (let val of array) {
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          newArr.push(val[i]);
          
        }
  
      } else {
        newArr.push(val);
      }
  
      
    }
    return newArr;
  };
  
  module.exports = flatten; 
