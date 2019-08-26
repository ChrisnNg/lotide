const countLetters = function(string) {
  let results = {};
  string = string.toLowerCase();
  for (let letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};

module.exports = countLetters;

