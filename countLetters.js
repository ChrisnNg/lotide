// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`));
};

const countLetters = function(string) {
  let results = {};
  
  for (letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};


// const test = {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2
// };

// let result = countLetters("ab cdd c");

// assertEqual(result["a"], test.a);
// assertEqual(result.b, test.b);
// assertEqual(result["c"], test.c);
// assertEqual(result.d, test.d);