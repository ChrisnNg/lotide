// const assertArraysEqual = require("./assertArraysEqual");

// map.js
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
};

module.exports = map;
// //test cases
// const words = ["ground", "control", "to", "major", "tom"];

// const mapFirstLetter = map(words, word => word[0]);

// const mapElementLength = map(words, word => {for (let i in word) {return word.length}})

// const mapStringDouble = map(words, (word => {
//   word += word;
//   return word}))

// assertArraysEqual(mapFirstLetter, ["g", "c", "t", "m", "t"]);

// assertArraysEqual(mapElementLength, [6, 7, 2, 5, 3]);

// assertArraysEqual(mapStringDouble, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);

