const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');


describe('#assertObjectsEqual', () => {
  it('return a pass assertion for objects with the same key-value pairs (even if not in the same order)', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.include(assertObjectsEqual(ab, ba), '✅✅✅');
  });

  it ('return a fail assertion for objects that has one extra key-value pair even if the rest is matching', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.include(assertObjectsEqual(ab, abc), '🛑🛑🛑');
  });

  it('return a pass assertion for objects with the same key-value pairs (even if they are nested arrays)', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.include(assertObjectsEqual(cd, dc), '✅✅✅');
  });

  it('return a fail assertion for objects where one has one extra element inside the nested array value', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.include(assertObjectsEqual(cd, cd2), '🛑🛑🛑');
  });
});