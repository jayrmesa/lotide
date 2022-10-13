const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  const constellation = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns 'noma' when constellation.stars === 2", () => {
    assert.strictEqual(findKey(constellation, x => x.stars === 2), "noma");
  });
});