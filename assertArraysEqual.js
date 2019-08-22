// eqArrays.js
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    } return true;
  }
};

// assertArraysEqual.js -requires eqArrays.js
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${arrayOne} !== ${arrayTwo}`));
};
