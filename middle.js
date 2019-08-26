// middle.js
const middle = function(array) {
  let output = [];
  let middle =  array.length / 2 - 1;
  if (array.length > 2 && array.length % 2 === 0) {
    output.splice(0, 0, array[middle]);
    output.splice(1, 0, array[middle + 1]);
  } else if (array.length > 2) {
    output.splice(0, 0, array[middle + 0.5]);
  }
  return output;
};

module.exports = middle;