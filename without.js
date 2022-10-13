const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let items = true;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        items = false;
      }
    }
    if (items) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

module.exports = without; 