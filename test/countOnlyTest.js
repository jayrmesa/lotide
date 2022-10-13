const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns count of Jason: 1 when Jason: true", function() {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns undefined when Karima: true but not in array list", function() {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns count of Fang: 2 when Fang: true", function() {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined and not count Agouhanna: 1 when Agouhanna: false", function () {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});