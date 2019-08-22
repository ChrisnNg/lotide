// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`));
};

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

// Returns true if both objects have identical keys with identical values. as long as it contains the idential key with value, it can be any position
// Otherwise you get back a big fat false!
// eqObjects.js
const eqObjects = function(object1, object2) {
  let isEqual = false;
  let object1keys = Object.keys(object1)
  let object2keys = Object.keys(object2)

  if (object1keys.length === object2keys.length) {
    for (keys of object1keys) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (eqArrays(object1[keys], object2[keys])) {
          isEqual = true;
        } else return false;
      } else if (object1[keys] === object2[keys]) {
        isEqual = true;
      } else return false;
    } return isEqual;
  } else return false; 
};




// assertObjectsEqual.js -Requires eqArrays.js
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {// eqObjects should take actual and return a boolean while expected is a given boolean
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`));
};



// // Primitive value tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const acb = { a: "1", c: "3", b: "2"};
assertObjectsEqual(acb, abc); // => false

// Arrays as values tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

