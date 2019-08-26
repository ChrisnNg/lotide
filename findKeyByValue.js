// const assertEqual = require("./assertEqual");

// Implement the function findKeyByValue which takes in an object and a value.
//  It should scan the object and return the first key which contains the given value.
//   If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  let key = "";
  let objectValues = [];
  objectValues = Object.entries(object);
  for (let i = 0; i < objectValues.length; i++) {
    if (objectValues[i][1] === value) {
      key = objectValues[i][0];
      return key;
    }
  } return undefined;
};

module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   'sci_fi': "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

