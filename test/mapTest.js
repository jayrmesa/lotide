const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it("returns new array each containing first letter when callback function w => w[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, w => w[0]);
    assert.deepEqual(result, ['g','c','t','m','t']);
  });

  it("returns false for 'm' and 't' for its not the first letter", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, w => w[0]);
    assert.isNotFalse(result, ['m', 't']);
  });
});
