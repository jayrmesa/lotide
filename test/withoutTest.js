const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns [2, 3] without 1 from [1, 2, 3]', () => {
    const array = [1, 2, 3];
    assert.deepEqual(without(array, [1]), [2, 3]);
  });

  it('returns ["1", "2"] in comparison to [1, 2, "3"] without [1, 2,] from ["1", "2", "3"] ', () => {
    const array = ["1", "2", "3"];
    assert.deepEqual(without(array, [1, 2, "3"]), ["1", "2"]);
  });

  it('returns original array when array is passed in without function', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});

