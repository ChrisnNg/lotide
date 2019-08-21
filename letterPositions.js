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

//letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  // logic to update results here
  sentence = sentence.toLowerCase();
  for (letter of sentence) {
    if (results[letter]) {
      results[letter].push(position)
      position += 1;
    } else {
      results[letter] = [position] 
      position += 1;
    }
  }
  return results;
};

test = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};
assertArraysEqual(letterPositions("hello").h, test.h);
assertArraysEqual(letterPositions("hello").e, test.e);
assertArraysEqual(letterPositions("hello").l, test.l);
assertArraysEqual(letterPositions("hello").o, test.o);
