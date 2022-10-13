const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns flattened version of nested array', () => {
    const array = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(array), [1, 2, 3, 4, 5, 6]);
  });

});
