const middle = function(list) {
  if (list.length < 3) {
    return [];
  }

  let mid = Math.floor(list.length / 2);

  if (list.length % 2 === 0) {
    return list.slice(mid -1, mid + 1);
  }
    
  return list.slice(mid, mid + 1);

};


module.exports = middle; 



