const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns array.length - 1", () => {
    let array = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(array).length, 2);
  });

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("original input should contain the same elements", () => {
    let array = ["Hello", "Lighthouse", "Labs"];
    tail(array);
    assert.strictEqual(array.length, 3);
  });

});