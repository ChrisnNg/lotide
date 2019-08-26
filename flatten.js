
// const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = flatten;
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
