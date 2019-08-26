const tail = function(array) {//take the array but without the head
  let newarray = [...array];
  if (newarray.length > 1) {
    newarray.splice(0, 1);
  }
  return newarray;
};

module.exports = tail;