//eqArrays.js
const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};

// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`));
};
// assertArraysEqual.js
const assertArraysEqual = function(arrayOne, arrayTwo) {
  assertEqual(eqArrays(arrayOne, arrayTwo), true)
}

// middle.js
const middle = function(array){
  let output = [];
  let middle =  array.length / 2 - 1
  if (array.length > 2 && array.length % 2 === 0) {
    output.splice(0, 0, array[middle])
    output.splice(1, 0, array[middle + 1])
  } else if (array.length > 2) {
    output.splice(0, 0, array[middle +0.5])
  }
  return output;
}

// test cases for middle.js
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]) // => [4]