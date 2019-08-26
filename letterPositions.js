// const assertArraysEqual = require("./assertArraysEqual");
//letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  // logic to update results here
  sentence = sentence.toLowerCase();
  for (let letter of sentence) {
    if (results[letter]) {
      results[letter].push(position);
      position += 1;
    } else {
      results[letter] = [position];
      position += 1;
    }
  }
  return results;
};

module.exports = letterPositions;

// let test1 = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// };
// assertArraysEqual(letterPositions("hello").h, test1.h);
// assertArraysEqual(letterPositions("hello").e, test1.e);
// assertArraysEqual(letterPositions("hello").l, test1.l);
// assertArraysEqual(letterPositions("hello").o, test1.o);
