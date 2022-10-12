const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("does not remove elements from array", function() {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

});