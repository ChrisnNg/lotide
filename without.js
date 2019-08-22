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

// Combined function to operate independently from assertEqual.js but requires eqArrays.js
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${arrayOne} !== ${arrayTwo}`));
};


// This function should take in a source array and a itemsToRemove array.
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  let output = [];
  for (let x = 0; x < source.length; x++){
    let match = true;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[x] === itemsToRemove[i]) {
        match = false;
        break;
      } else match = true;
    }
    if (match) {
      output.splice(x, 0, source[x]);
    }
  } 
  return output;
};

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without(["1", "2", "3"], [1, "3", 2]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
