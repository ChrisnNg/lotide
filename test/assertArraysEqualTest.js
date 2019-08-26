const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // should fail
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should fail
assertArraysEqual([], []);
assertArraysEqual("undefined", "undefined");

// test cases for middle.js
console.log("../middle.js test cases");
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]