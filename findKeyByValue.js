// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`));
};

// Implement the function findKeyByValue which takes in an object and a value.
//  It should scan the object and return the first key which contains the given value.
//   If no key with that given value is found, then it should return undefined.

const findKeyByValue = function (object, value) {
  let key = ""
  let objectValues = [];
  objectValues = Object.entries(object)
  for(let i = 0; i < objectValues.length; i++) {
    if (objectValues[i][1] === value) {
      key = objectValues[i][0]
      return key;
    } 
  } return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


// we are given a object then a value. the value should match up to one of the values in the object, then return the key of that value.
// value should check every value in object and break when it finds the first match
  // iterate through the values of the object
// take the key of that value and return it