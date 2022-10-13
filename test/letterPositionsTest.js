const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const word = "hello"

  it("returns letter position of e in 'hello' for position 1", () => {
    const helloPosition = letterPositions(word);
    assert.deepEqual(helloPosition['e'], [1]);
  });
});