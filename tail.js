const tail = function(array) {
  return array.length > 2 ? array.slice(1) : [];
}

module.exports = tail;
