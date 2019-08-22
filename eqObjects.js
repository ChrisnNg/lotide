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
const eqObjects = function(object1, object2) {
  let isEqual = false;
  let object1keys = Object.keys(object1)
  let object2keys = Object.keys(object2)

  if (object1keys.length === object2keys.length) {
    for (keys of object1keys) {
      console.log(object1[keys])
      console.log(object2[keys])
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


// Primitive value tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const acb = { a: "1", c: "3", b: "2"};
// assertEqual(eqObjects(acb, abc), true); // => false

// Arrays as values tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


// q3.bak
// const eqObjects = function(object1, object2) {
//   let isEqual = false;
//   let object1keys = Object.keys(object1)
//   let object2keys = Object.keys(object2)

//   if (object1keys.length === object2keys.length) {
//     for (keys of object1keys) {
//       if (object1[keys] === object2[keys]) {
//         isEqual = true;
//       } else return false;
//     } return isEqual;
//   } else return false; 
// };
