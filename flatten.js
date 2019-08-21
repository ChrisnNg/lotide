
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

// assertArraysEqual.js Combined function to operate independently from assertEqual.js but requires eqArrays.js
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${arrayOne} !== ${arrayTwo}`));
};

// flatten.js - flatten is a function which given an array with other arrays inside, it can flatten it into a single-level array.

const flatten = function(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    }
    for (let x = 0; x < arr[i].length; x++) {
      if (Array.isArray(arr[i])) {
        output.push(arr[i][x]);
      }
    }
  } return output;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
