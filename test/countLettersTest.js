const countLetters = require("../countLetters");
const assert = require('chai').assert;


// let result = countLetters("ab cdD c");

// assertEqual(result["a"], test.a);
// assertEqual(result.b, test.b);
// assertEqual(result["c"], test.c);
// assertEqual(result.d, test.d);


describe("#head", () => {
  it("returns 1 for \"a\" given ab cdD c", () => {
    const test = {
      a: 1,
      b: 1,
      c: 2,
      d: 2
    };
    assert.deepEqual(countLetters("ab cdD c"), test);
  });

  it(`returns 2 for the value of d given ab cdD c`, () => {
    assert.deepEqual(countLetters("ab cdD c").d, 2);
  });

  it(`returns 4 for the number of unique keys given ab cdD c`, () => {
    assert.deepEqual(Object.keys(countLetters("ab cdD c")).length, 4);
  });

});