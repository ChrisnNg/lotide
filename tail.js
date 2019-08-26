const tail = function(array) {
  let newarray = [];
  if (array.length > 1) {
    newarray.splice(0, 0, array[array.length - 1]);
  }
  return newarray;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`));
};

module.exports = tail;