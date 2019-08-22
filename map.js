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
// map.js
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
}

//test cases
const words = ["ground", "control", "to", "major", "tom"];

const mapFirstLetter = map(words, word => word[0]);

const mapElementLength = map(words, word => {for (let i in word) {return word.length}})

const mapStringDouble = map(words, (word => {
  word += word
  return word}));

assertArraysEqual(mapFirstLetter, ["g", "c", "t", "m", "t"])

assertArraysEqual(mapElementLength, [6, 7, 2, 5, 3])

assertArraysEqual(mapStringDouble, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"])

