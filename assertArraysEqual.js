const eqArrays = require("./eqArrays");

// assertArraysEqual.js -requires eqArrays.js
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${arrayOne} !== ${arrayTwo}`));
};

module.exports = assertArraysEqual;