const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', function() {
  
  it("returns a count of L to 2 from 'LHL' ", function() {
    const letterCount = countLetters("LHL");
    assert.strictEqual(letterCount['L'], 2);
  });

  it("returns a count of H to 1 from 'LHL' ", function() {
    const letterCount = countLetters("LHL");
    assert.strictEqual(letterCount['H'], 1);
  });

  it("returns a count of l to 1 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['l'], 1);
  });

  it("returns a count of i to 2 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['i'], 2);
  });

  it("returns a count of g to 1 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['g'], 1);
  });

  it("returns a count of h to 4 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['h'], 4);
  });

  it("returns a count of t to 2 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['t'], 2);
  });

  it("returns a count of o to 2 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['o'], 2);
  });

  it("returns a count of u to 2 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['u'], 2);
  });

  it("returns a count of s to 2 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['s'], 2);
  });

  it("returns a count of e to 3 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['e'], 3);
  });

  it("returns a count of n to 1 from 'lighthouse in the house' ", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['n'], 1);
  });
});
